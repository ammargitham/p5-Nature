function Environment(w, h) {
  const noOfBalls = 1;
  this.w = w;
  this.h = h;
  this.balls = [];
  this.time = 0;

  this.init = function (time) {
    this.time = time;
    this.initBalls();
  };

  this.initBalls = function () {
    this.balls = Array(noOfBalls)
      .fill(null)
      .map((_v) => {
        const r = random(10, 51);
        const x = random(r, w - r - w / 2);
        const y = random(r, h - r - h / 2);
        const cor = random(0.8, 0.9);
        const mass = random(1, 51);
        const b = new Ball(x, y, r, cor, mass);
        b.accelerate(createVector(0, -G));
        return b;
      });
  };

  this.update = function (time) {
    this.time = time;
    this.balls.forEach((b) => b.update(time));
    this.checkCollision();
  };

  this.checkCollision = function () {
    this.balls.forEach((b) => {
      if ((b.center.y + b.r >= h || b.center.y - b.r <= 0) && b.vel.y != 0) {
        if (b.center.y + b.r >= h) {
          b.center.y = h - b.r;
        }
        if (b.center.y - b.r <= 0) {
          b.center.y = b.r;
        }
        b.vel.y *= -1 * b.cor;
        // if (Math.abs(b.vel.y) < 20) {
        //   b.vel.y = 0;
        //   console.log('Reached y stop');
        //   // console.log(b.center, b.r, h);
        //   b.center.y = h - b.r;
        // }
      }
      if ((b.center.x + b.r >= w || b.center.x - b.r <= 0) && b.vel.x != 0) {
        if (b.center.x + b.r >= w) {
          b.center.x = w - b.r;
        }
        if (b.center.x - b.r <= 0) {
          b.center.x = b.r;
        }
        b.vel.x *= -1 * b.cor;
        // if (Math.abs(b.vel.x) < 20) {
        //   b.vel.x = 0;
        // }
      }
    });
  };

  this.draw = () => {
    // draw the balls
    this.balls.forEach((b) => b.draw());
  };

  this.mousePressed = function () {
    this.balls.forEach((b) => (b.acc.x = 50));
  };

  this.mouseReleased = function () {
    this.balls.forEach((b) => (b.acc.x = 0));
  };
}
