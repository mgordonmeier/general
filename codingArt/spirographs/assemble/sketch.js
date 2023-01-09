var r1
var r2
var a1 = 0;
var a2 = 0;
var a1Inc
var a2Inc
var prevXg
var prevYg
let R = 0;  // radius of the sphere
let maxR = 55; //max radius
let t = 0;    // angle of rotation
let centerX = -250;  // x-coordinate of the center of the circle
let centerY = -50;  // y-coordinate of the center of the circle
let prevX, prevY;  // previous position of the pen
let lines = [];  // array to store all the lines
let count = 0;  // counter for the number of times max size has been reached
let maxCount = 9; // number of loops
let shifter = true; // controls increasing/decreasing of radius change and centerX positive or negative value
let frameCounter = 0;
let maxFrameCount = 100;
// let secondCanvas;
let mainCanvas;
let linesCanvas;

function setup() {
  mainCanvas = createCanvas(800, 800);
  linesCanvas = createCanvas(800, 800);
  angleMode(DEGREES)
  stroke(0, 0, 0)
  background(130)
  prevX = R * cos(t) + centerX;
  prevY = R * sin(t) + centerY;

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


}

function draw() {
  // clear(); // clear the canvas of any drawn content
  translate(width / 2, height / 2); // move the origin to the center of the canvas
  stroke(255);

  angleMode(DEGREES)

  for (var i = 0; i < 1000; i++) {
    var x1 = r1 * cos(a1);
    var y1 = r1 * sin(a1);

    var x2 = x1 + r2 * cos(a2);
    var y2 = y1 + r2 * sin(a2)

    var r = map(sin(frameCount), -1, 1, 100, 200)
    var g = map(cos(frameCount), -1, 1, 100, 200)
    var b = map(sin(frameCount), -1, 1, 200, 100)

    stroke(r, g, b)

    line(prevXg, prevYg, x2, y2);

    prevXg = x2;
    prevYg = y2;

    a1 += a1Inc;
    a2 += a2Inc;
  }

  angleMode(RADIANS)
  // stroke(0)`

  // calculate the x and y position of the pen using the equation for a circle
  let x = R * cos(t) + centerX;
  let y = 0.8 * R * sin(t) + centerY;

  // create an array to store the line coordinates
  let coords = [prevX, prevY, x, y];
  prevX = x;
  prevY = y;

  // increase the angle of rotation for the next frame
  t += 0.15;

  radiusChange = random(0, 0.2);

  // move the center of the circle and reset the radius when R becomes 0
  if (R <= 15 && count < maxCount) {
    shifter = true;
  } else if (R >= maxR && count < maxCount) {
    shifter = false;
  } else if (R > 0 && count >= maxCount) {
    shifter = false;
  } else if (R <= 0 && count >= maxCount) {
    R = 0;
    // clear();
    // for (let i = 0; i < lines.length; i++) {
    //   let coords = lines[i];
    //   line(coords[0], coords[1], coords[2], coords[3]);
    // }
    // return;
  }

  if (R >= maxR) {
    count++;
    R = maxR - 0.1;
  }

  let radiusWeight = frameCounter / maxFrameCount;

  if (shifter) {
    R += radiusChange * radiusWeight;
  } else if (!shifter) {
    R -= radiusChange * radiusWeight;
  }

  lines.push(coords);

  // shift the center of the circle gradually
  if (count == 0 || count == 6) {
    centerX += random(0.05, 0.25);
    centerY += random(0.05, 0.3);
  } else if (count == 1) {
    centerX -= random(0, 0.25);
    centerY += random(0, 0.3);
  } else if (count == 2) {
    centerX += random(0.2, 0.4);
    centerY += random(0, 0.2);
  } else if (count == 3) {
    centerX += random(0, 0.1);
    centerY -= random(0.15, 0.4);
  } else if (count == 4) {
    centerX -= random(0, 0.3);
    centerY -= random(0.1, 0.3)
  } else if (count == 5) {
    centerX += random(0.2, 0.4);
    centerY += random(0, 0.2);
  } else if (count == 7) {
    centerX += random(0, 0.15);
    centerY -= random(0.15, 0.4);
  } else if (count == 8) {
    centerX -= random(0.1, 0.3);
    centerY -= random(0, 0.3)
  } else if (count == 9) {
    centerX -= random(0, 0.4);
    centerY += random(0, 0.1);
  }

  // draw all the lines stored in the array
  for (let i = 0; i < lines.length; i++) {
    let coords = lines[i];
    // linesCanvas.line(coords[0], coords[1], coords[2], coords[3]);
    line(coords[0], coords[1], coords[2], coords[3]);

  }

  // image(mainCanvas, 0, 0);
  // image(linesCanvas, 0, 0);

  // linesCanvas.clear();


  let frameCountFlip = true;

  if (frameCounter < maxFrameCount && frameCountFlip) {
    frameCounter += 1;
  } else if (frameCounter >= maxFrameCount) {
    frameCountFlip = false;
    frameCounter -= 1;
  } else if (frameCounter > maxFrameCount && !frameCountFlip) {
    frameCounter -= 1;
  } else if (frameCounter <= maxFrameCount) {
    frameCountFlip = true;
    frameCounter += 1;
  }

  // if (count > 1 && frameCounter == maxFrameCount) {
  //   Math.random(0, 2) >= 1.5 ? shifter = shifter : shifter = !shifter;
  // }
}

