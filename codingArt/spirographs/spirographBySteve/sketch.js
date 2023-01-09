// By Steve's Makerspace (YouTube)
// video: https://youtu.be/k2egFXqv8Rw

let sliderA, sliderB, sliderC, sliderZ, sliderType;
let a = 2; // radius of circle not moving
let b = 3; // radius of moving circle
let c = 3; // length of drawing arm from
//               center of moving circle
let s = 1; // step up rate - sometimes makes a difference
let type = 3; // 1) hypotrochoid
//               2) epitrochoid
//               3) Steve's curve
let size = 2; // pixel size - 1 for fine, 4 for bold
let z = 0.25; // zoom out to give a gap around the edge of the canvass
let n = 0;
let numb = 20000;
let x, y, z2;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES); //try commenting this out
  createP('A, B, C, Zoom, Type');
  sliderA = createSlider(1, 20, 11, 0.1);
    sliderA.style('width','200px');

  sliderB = createSlider(1, 20, 9, 0.1);
    sliderB.style('width','200px');

  sliderC = createSlider(1, 20, 13, 0.1);
    sliderC.style('width','200px');

  sliderZ = createSlider(0.05, 1.0, 0.7, 0.05);
  sliderZ.style('width','200px');
    sliderType = createSlider(1, 3, 2, 1);
}

function draw() {
  // a = sliderA.value();
  // b = sliderB.value();
  // c = sliderC.value();
  // z = sliderZ.value();
  // type = sliderType.value();

  //this is sick
  // a = 17.2;
  // b = 10.3;
  // c = 2.7;
  // z = 0.25;
  // type = 1;
  
    if (type == 1) {
    z2 = 80 //3*height / 2 / ((a - b) * cos(n) + c * cos((a / b - 1) * n));
  } else if (type == 2) {
    z2 = height / 2 / (abs(a) + abs(b) + abs(c));
  } else {
    z2 = height / 2; //z2 figures the maximum height expected for each curve and converts it to the height of the canvass.
  }
  background(0);

  beginShape();
  for (var n = 0; n < numb; n += s) {
    let d = c + abs(a - b);
    if (type == 1) {
      x = (a - b) * cos(n) + c * cos((a / b - 1) * n);
      y = (a - b) * sin(n) - c * sin((a / b - 1) * n);
    } else if (type == 2) {
      x = (a + b) * cos(n) - c * cos((a / b + 1) * n);
      y = (a + b) * sin(n) - c * sin((a / b + 1) * n);
    } else {
      x = ((a - b) * cos(n) + c * cos((a / b - 1) * n)) / d;
      y = ((a - b) * sin(n)) / (a - b);
    }
    n = n + s;
    noFill();
    stroke(255);
    strokeWeight(size);
    vertex(width / 2 + x * z2 * z, height / 2 + y * z2 * z);
  }
  endShape();
  print(a, b, c, z);
}
