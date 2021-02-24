function setup() {
  createCanvas(375, 375);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  noFill();
  stroke(255);
  strokeWeight(50)
  for (let i = 0; i < 175; i += 2) {
    let r = map(i, 0, 175, 0, 100);
    let g = map(i, 0, 175, 100, 255);
    let b = map(i, 0, 175, 255, 100);
    push()
    stroke(r, g, b);
    //rotate(sin(frameCount) * i);
    //rotate(sin(frameCount + i * i) * 50);
    rotate(sin(frameCount + i) * 50);
    rect(0, 0, 175 - i, 175 - i);
    pop();
  }
}