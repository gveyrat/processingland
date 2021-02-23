let num = 45;
let tableauLines = [num];

function setup() {
  createCanvas(400, 400);
// for linesMovin()
  // for (let n = 0; n < num; n++) {
  //   tableauLines[n] = height / num * n;
  // }
}

function draw() {
  background(0);

  //linesMoving();

  for (let n = 0; n < num; n++) {
    let colorValue = map(tableauLines[n], 0, 1080, 80, 255);
    stroke(colorValue, 80, 90);
    translate(width / 2, height / 2);
    strokeWeight(30);
    noFill();
    for (let p = 0; p < 1000; p+= 100) {
    ellipse(0, 0, tableauLines[n] - p, tableauLines[n] - p);
    }
    tableauLines[n] += 5;
    if (tableauLines[n] - 400 > height) {
      tableauLines[n] = 0;
    }
  }

}

function linesMoving() {
  for (let n = 0; n < num; n++) {
    let colorValue = map(tableauLines[n], 0, 1080, 255, 80);
    stroke(colorValue, 0, 255);
    strokeWeight(15);
    line(0, tableauLines[n], width, tableauLines[n]);
    tableauLines[n] += .5;
    if (tableauLines[n] > height) {
      tableauLines[n] = 0;
    }
  }

  push();
  rectMode(CENTER);
  noFill();
  stroke(0);
  strokeWeight(500)
  translate(width / 2, height / 2)
  ellipse(0, 0, 1480, 1480);
  pop();
}