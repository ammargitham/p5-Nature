let env;

function setup() {
  createCanvas(windowWidth, windowHeight - 10);
  frameRate(60);
  env = new Environment(windowWidth, windowHeight - 10);
  env.init();
}

function draw() {
  background(100);
  env.draw();
  if (frameRate() !== 0) {
    env.update(millis() / 1000);
  }
  // noLoop()
}

function mousePressed() {
  env.mousePressed();
}

function mouseReleased() {
  env.mouseReleased();
}
