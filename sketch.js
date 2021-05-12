function setup() {
  createCanvas(340,340);
  angleMode(DEGREES);
}

function draw() {
  // body...
  background(0);
  translate(170,170);
  rotate(-90);


  let hr = hour();
  let mn = minute();
  let sc = second();

  noFill();
  strokeWeight(8);
  //SECONDS
  stroke(255, 100, 150);
  let end1 = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, end1);

  //SECOND HAND
  push();
  rotate(end1);
  stroke(255, 100, 150);
  line(0, 0, 100, 0);
  pop();
  for (sc; sc < 10; sc++) {
    push()
    stroke(0, 150, 90);
    pop()
  }

  //MINUTES
  stroke(150, 100, 255);
  let end2 = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, end2);

  //MINUTE HAND
  push();
  rotate(end2);
  stroke(150, 100, 255);
  line(0, 0, 80, 0);
  pop();

  //HOURS
  stroke(150, 255, 100)
  let end3 = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, end3);

  //HOUR HAND
  push();
  rotate(end3);
  stroke(150, 255, 100);
  line(0, 0, 60, 0);
  pop();

  stroke(255);
  strokeWeight(8);
  point(0, 0)

  stroke(255);
}

