function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  deux();
}

function un() {
  translate(width / 2, height / 2);
  if (frameCount >= 300) {
    frameCount = 0;
    background(0);
  }
  ellipse(random(-50, 50), random(-50, 50), 10, 10);
}

function deux() {
  translate(width / 2, height / 2);
  fill('#03f4fc');
  if (frameCount >= 5) {
    frameCount = 0;
    ellipse(random(-200, 200), random(-200, 200), 3, 3);
  } else {
    ellipse(random(-50, 50), random(-50, 50), 10, 10);
  }
}