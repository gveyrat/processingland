let num = 45;
let tableauLines = [num];

function setup() {
  createCanvas(400, 400);

  for (let n = 0; n < num; n++) {
    tableauLines[n] = height / num * n;
  }
}

function draw() {
  background(0);

  for (let n = 0; n < num; n++) {
    let colorValue = map(tableauLines[n], 0, 400, 255, 80);
    stroke(colorValue, 0, 255);
    strokeWeight(5);
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
  strokeWeight(150)
  translate(width/2, height/2)
  ellipse(0, 0, 430, 430);
  pop();

}