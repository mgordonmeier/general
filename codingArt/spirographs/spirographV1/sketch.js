let R = 0;  // radius of the sphere
let maxR = 55; //max radius
let t = 0;    // angle of rotation
let centerX = -250;  // x-coordinate of the center of the circle
let centerY = -100;  // y-coordinate of the center of the circle
let prevX, prevY;  // previous position of the pen
let lines = [];  // array to store all the lines
let count = 0;  // counter for the number of times max size has been reached
let maxCount = 9; // number of loops
let shifter = true; // controls increasing/decreasing of radius change and centerX positive or negative value
let frameCounter = 0;

function setup() {
  createCanvas(800, 800);
  stroke(0, 0, 0);
  // noFill();
  prevX = R * cos(t) + centerX;
  prevY = R * sin(t) + centerY;
}

function draw() {
  clear();  // clear the canvas of any drawn content
  translate(width/2, height/2);  // move the origin to the center of the canvas

  

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
  } else if (R <=0 && count >= maxCount) {
    R = 0;
  }

  // if (count > 1) {
    
  // }

  // if (frameCounter % 700 == 0) {
  //     shifter = !shifter;
  // }
  
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

  // shift the center of the circle gradually
  // centerX += shifter ? random(0, 0.25) : -random(0, 0.25);
  // centerY += random(0, 0.25);
  
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
    centerY -= random(0.1, 0.3 )
  } else if (count == 5) {
    centerX += random(0.2, 0.4);
    centerY += random(0, 0.2);
  } else if ( count == 7){
    centerX += random(0, 0.15);
    centerY -= random(0.15, 0.4);
  } else if (count == 8) {
    centerX -= random(0.1, 0.3);
    centerY -= random(0, 0.3 )
  } else if (count == 9) {
    centerX -= random(0, 0.4);
    centerY += random(0, 0.1);
  }

  // draw all the lines stored in the array
  for (let i = 0; i < lines.length; i++) {
    let coords = lines[i];
    line(coords[0], coords[1], coords[2], coords[3]);
  }

  let frameCountFlip = true;

  if (frameCounter < 40 && frameCountFlip ) {
    frameCounter += 1;
  } else if (frameCounter >= 40) {
    frameCountFlip = false; 
    frameCounter -= 1;
  } else if (frameCounter > 0 && !frameCountFlip) {
    frameCounter -= 1;
  } else if( frameCounter <= 0) {
    frameCountFlip = true;
    frameCounter += 1;
  }
  // console.log(frameCounter)
}

// function draw2() {
//   for (let i = 0; i < lines.length; i++) {
//     let coords = lines[i];
//     line(coords[0], coords[1], coords[2], coords[3]);
//   }
// }


