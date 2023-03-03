import { Configuration, OpenAIApi } from "openai"
import { useState } from "react";
import './App.css';

function App() {

  const [prompts, setPrompt] = useState('');
  const [result, setResult] = useState('');

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage({
        'prompt': prompts,
        'n': 1,
        'size': '1024x1024',
    });

    console.log(res.data.data[0].url);
    setResult(res.data.data[0].url);
  }

  return (
    <div className="app-main">

      <h2>Generate an Image using Open AI API</h2>
      <input
        className="app-input"
        placeholder="Type something descriptive..."
        onChange={(r) => setPrompt(r.target.value)}
      />
      <button className="app-button" onClick={generateImage}>Generate an Image</button>

      {result.length > 0 ? <img className="result-image" src={result} alt="result" /> : <></>}

    </div>
  );
}

export default App;
