let ss = 0;
let hh = 200;

let aa = 0;

let oo = 50;

function setup() {
  createCanvas(375, 375);
}

function draw() {
  strokeGrowth();
}

function strokeGrowth() {
  frameRate(25);
  background(0);
  translate(width / 2, height / 2);
  noFill();
  let prout = map(aa, 0, 100, 0, 255);
  stroke(40, prout, 140);
  strokeWeight(aa);
  ellipse(0, 0, 100, 100);
  aa++;
  if (aa == 180) {
    aa = 0;
  }
}

function growingCircle() {
  background(220);
  translate(width / 2, height / 2);
  ellipse(0, 0, ss, ss);
  ss++;
  if (ss == 100) {
    ss = -ss;
  }
}