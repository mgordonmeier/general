let R = 0;  // radius of the sphere
let maxR = 75; //max radius
let t = 0;    // angle of rotation
let t2 = 0;
let centerX;  // x-coordinate of the center of the circle
let centerY;  // y-coordinate of the center of the circle
let prevX, prevY;  // previous position of the pen
let lines = [];  // array to store all the lines
let count = 0;  // counter for the number of times max size has been reached
let maxCount = 9; // number of loops
let shifter = true; // controls increasing/decreasing of radius change and centerX positive or negative value
let frameCounter = 0;
let fullFrameCounter = 0;
let h = 0;
let k = 0;
let h0 = 0;
let k0 = 0;
let r = 75;

function setup() {
  createCanvas(800, 800);
  stroke(0, 0, 0);
  // noFill();
  prevX = R * cos(t) + centerX;
  prevY = R * sin(t) + centerY;
}

function draw() {
  clear();  // clear the canvas of any drawn content
  translate(width / 2, height / 2);  // move the origin to the center of the canvas

  if (fullFrameCounter < 400) {
    stroke(0,255,255)
  } else if (fullFrameCounter < 800) {
    stroke(255, 255, 255)
  } else if (fullFrameCounter < 1200) {
    stroke(255, 0, 255)
  } else {
    stroke(0, 0, 0)
  }



  // calculate the x and y position of the pen using the equation for a circle
  let x = R * cos(t) + centerX;
  let y = 0.8 * R * sin(t) + centerY;

  // create an array to store the line coordinates
  let coords = [prevX, prevY, x, y];
  prevX = x;
  prevY = y;

  // increase the angle of rotation for the next frame
  t += 4;
  // t2 += random(0.5, 1.5);

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
  }

  if (R >= maxR) {
    count++;
    R = maxR - 0.1;
  }
  // /maxCount > count > 1)

  let radiusWeight = frameCounter / 30;

  if (shifter) {
    R += radiusChange * radiusWeight;
  } else if (!shifter) {
    R -= radiusChange * radiusWeight;
  }

  lines.push(coords);

  // angleMode(RADIANS);

  // let r = a * (phi ^ n) / 40;
  centerX = h + R * cos(t);
  centerY = k + R * 4 * sin(t);

  // h = h0 + r * cos(t2);
  // k = k0 + r * sin(t2);

  // draw all the lines stored in the array
  for (let i = 0; i < lines.length; i++) {
    let coords = lines[i];
    line(coords[0], coords[1], coords[2], coords[3]);
  }

  let frameCountFlip = true;

  if (frameCounter < 40 && frameCountFlip) {
    frameCounter += 1;
  } else if (frameCounter >= 40) {
    frameCountFlip = false;
    frameCounter -= 1;
  } else if (frameCounter > 0 && !frameCountFlip) {
    frameCounter -= 1;
  } else if (frameCounter <= 0) {
    frameCountFlip = true;
    frameCounter += 1;
  }
  fullFrameCounter += 1;
  // console.log(frameCounter)
}

// function draw2() {
//   for (let i = 0; i < lines.length; i++) {
//     let coords = lines[i];
//     line(coords[0], coords[1], coords[2], coords[3]);
//   }
// }


