let t = 0;

function setup() {
  createCanvas(375, 375);
  noStroke();
}

function draw() {
  //translate(width/2, height/2);
  background(0, 5);
  let x = width * noise(t);
  let y = height * noise(t +10);
  let r = map(x, 0, t, 0, 255);
  let g = map(y, 0, height, 0, 255);
  let b = map(y, 0, width, 100, 0);
  fill(r, g, b);
  ellipse(x, y, 150, 150);
  t += 0.001;
}