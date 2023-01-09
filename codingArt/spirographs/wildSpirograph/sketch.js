// By Steve's Makerspace (YouTube)
// https://youtu.be/jNWaAh3Irjw

// Click on sketch to pause. Change values below to change the images. Need to be signed in with your own free p5js account, then file-duplicate to change values.
// See also random values you could change at line 41.

let type = 1; // Make either curve:
//                 1) hypotrochoid
//                 2) epitrochoid
let size = 1; // strokeweight
let alph = 100; // transparency - 10-255
let numb = 5000; // # of pixels per drawing
// offset and increm add randomness to the center point.  0 offset = none
let offset = 0; //stray length
let increm = 0.001; //speed of change
// Try changing abc starting values.
let a = 2.3; // radius of circle not moving - should be between 2 and 20.
let b = 2.3; // radius of moving circle - should be between 2 and 20.
let c = 20.0; // length of drawing arm from center of moving circle - should be between 1 - 20 for type 1, or 8 - 20 for type 2.

let zoom = 70;
let n = 0;
let x, y, offsetx, offsety;
let i = 0;
let p = 1;
let r = 125;
let g = 125;
let bl = 125;

function setup() {
  let w = windowHeight;
  if (windowWidth < windowHeight) {
    w = windowWidth;
  }
  createCanvas(w, w);
  angleMode(DEGREES);
  background(0);
}
function draw() {
  if (p > 0) {
    // You could also mess with these random values.
    a = a + random(-0.01, 0.025);
    b = b + random(-0.02, 0.01);
    c = c + random(-0.025, 0.015);
    r = r + random(-10, 22);
    g = g + random(-24, 10);
    bl = bl + random(-10, 15);

    if ((type = 1)) {
      if (a > 20) {
        a = 1.5;
      }
      if (a < 1.5) {
        a = 20;
      }
      if (b > 20) {
        b = 1.5;
      }
      if (b < 1.5) {
        b = 20;
      }
      if (c < 1) {
        c = 20;
      }
      if (c > 20) {
        c = 1;
      }
    }
    if ((type = 2)) {
      if (a > 20) {
        a = 2.0;
      }
      if (a < 2.0) {
        a = 20;
      }
      if (b > 20) {
        b = 2.0;
      }
      if (b < 2.0) {
        b = 20;
      }
      if (c < 8) {
        c = 20;
      }
      if (c > 20) {
        c = 8;
      }
    }
    if (r > 256) {
      r = 0;
    }
    if (r < 0) {
      r = 256;
    }
    if (g < 0) {
      g = 256;
    }
    if (g > 256) {
      g = 0;
    }
    if (bl > 256) {
      bl = 0;
    }
    if (bl < 0) {
      bl = 256;
    }
    let max = 0;
    offsetx = noise(i) * offset - offset / 2;
    offsety = noise(i + 10000) * offset - offset / 2;
    beginShape();
    for (var n = 0; n < numb; n++) {
      if (type == 1) {
        x = (a - b) * cos(n) + c * cos((a / b - 1) * n);
        y = (a - b) * sin(n) - c * sin((a / b - 1) * n);
      } else if (type == 2) {
        x = (a + b) * cos(n) - c * cos((a / b + 1) * n);
        y = (a + b) * sin(n) - c * sin((a / b + 1) * n);
      }
      noFill();
      stroke(r, g, bl, alph);
      strokeWeight(size);
      if (x > max) {
        max = x;
      }
      vertex(width / 2 + offsetx + x * zoom, height / 2 + offsety + y * zoom);
    }
    endShape();
    zoom = (width / 2 - 30) / max;
    i = i + increm;
  }
}
function mousePressed() {
  p = p * -1;
}
