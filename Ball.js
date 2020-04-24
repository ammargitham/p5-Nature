function Ball(cx, cy, r, cor, mass) {
  this.center = createVector(cx, cy);
  this.r = r;
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.time = 0;
  this.mass = mass;
  this.cor = cor; // coefficient of restitution

  this.draw = function () {
    circle(this.center.x, this.center.y, this.r);
  };

  this.accelerate = function (accVector) {
    this.acc.add(accVector);
  };

  this.update = function (time) {
    const drag = calculateDrag(this.r, this.vel);
    dragAcc = p5.Vector.div(drag, this.mass);
    // console.log(dragAcc.y);
    const actualAcc = p5.Vector.add(this.acc, dragAcc);
    const tDiff = time - this.time;
    const d = calculateDistance(this.vel, actualAcc, tDiff);
    this.center.sub(d);
    this.vel = calculateVelocity(this.vel, actualAcc, tDiff);
    // if (this.time != 0 && this.vel.x < 1) {
    //   this.vel.x = 0;
    // }
    // if (this.time != 0 && this.vel.y < 1) {
    //   this.vel.y = 0;
    // }
    this.time = time;
  };
}
