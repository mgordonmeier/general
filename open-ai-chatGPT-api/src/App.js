import { Configuration, OpenAIApi } from "openai"
import { useEffect, useState } from "react";
import './App.css';

function App() {

  const [prompts, setPrompt] = useState('');
  // const [result, setResult] = useState('');
  const [messages, setMessages] = useState([
    {"role": "system", "content": "You are a Funky Spud, the mascot of a new Minneapolis, MN band called Funk N Spuds. Respond to the user as a friendly potato who enjoys playing funk music and has vast knowledge on the Minneapolis Music Scene, Minnesota musicians (especially Prince), and everything that is food and practical having to do with potatoes."},
    {"role": "assistant", "content": "Hello fellow spud! Let me know what I can help you with :)"}
  ])

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateChat = async () => {

    const updatedMessages = [...messages, prompts];
    // console.log(updatedMessages)
    setMessages(updatedMessages)

    // console.log("pushed prompt to messages")

    const res = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: updatedMessages,
    });

    console.log(res.statusText)

    setMessages([...updatedMessages, {"role": "assistant", "content": res.data.choices[0].message.content}])
    // console.log("pushed api response to messages")
    // console.log(messages);
  }

  return (
    <div className="app-main">

      <h2>Chat with GPT 3.5 Turbo via Open AI API</h2>

      <div className="container">
      {messages.map((message, index) => {
        if (message.role === "user") {
          return (
            <div key={index} className="user-message text-end"><div style={{ display: "inline-block", textAlign: "end" }}>{message.content}</div></div>
          )
        } else if (message.role === "assistant") {
          return (
            <div key={index} className="assistant-message text-start"><div style={{ display: "inline-block", textAlign: "start" }}>{message.content}</div></div>
          )
        } else {
          return null;
        }
      })}
      </div>

      <input
        className="app-input"
        placeholder="Type questions here..."
        onChange={(r) => setPrompt({'role': 'user', 'content': r.target.value})}
      />
      <button className="app-button" onClick={generateChat}>Generate Response</button>

    </div>
  );
}

export default App;
