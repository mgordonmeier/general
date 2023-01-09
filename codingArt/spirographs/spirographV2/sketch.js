var r1
var r2

var a1 = 0;
var a2 = 0;

var a1Inc
var a2Inc

var prevX
var prevY

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES)
  background(30)
  
  // r1 = random(100, 200)
  // r2 = random(100, 200)
  
  // a1Inc = random(0.1, 5)
  // a2Inc = random(0.1, 5)

  // Gradient Blend
  r1 = 101.92
  r2 = 177.16
  
  a1Inc = 3.6650
  a2Inc = 1.2224

  // Spiral Spiky
  // r1 = 114.369
  // r2 = 168.216
  
  // a1Inc = 2.966062
  // a2Inc = 2.075976

  // Another
  // r1 = 134.61189
  // r2 = 189.11173

  // a1Inc = 2.6820486
  // a2Inc = 0.8533084

  // The Snail
  // r1 = 125.6952351
  // r2 = 160.4599506

  // a1Inc = 4.488421007
  // a2Inc = 2.7529


  
  console.log(r1, r2, a1Inc, a2Inc)
}

function draw() {
  
  translate(width/2, height/2);
  stroke(255);
  
  for (var i = 0; i < 1000; i++) {
    var x1 = r1 * cos(a1);
    var y1 = r1 * sin(a1);
  
    var x2 = x1 + r2 * cos(a2);
    var y2 = y1 + r2 * sin(a2)
    
    var r = map(sin(frameCount), -1, 1, 100, 200)
    var g = map(cos(frameCount), -1, 1, 100, 200)
    var b = map(sin(frameCount), -1, 1, 200, 100)
    
    stroke(r, g, b)
  
    line(prevX, prevY, x2, y2);
  
    prevX = x2;
    prevY = y2;
  
    a1 += a1Inc;
    a2 += a2Inc; 
  }
}

