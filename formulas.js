function calculateVelocity(vi, a, t) {
	return p5.Vector.add(vi, p5.Vector.mult(a, Math.abs(t)));
}

function calculateDistance(vi, a, t) {
	return p5.Vector.add(p5.Vector.mult(vi, Math.abs(t)),
		p5.Vector.mult(a, 0.5 * t * t));
}

function reynoldsNumberForBall(r, v) {
	return p5.Vector.div(p5.Vector.mult(v, airDensity * 2 * r), dynamicViscosity);
}

const dragPreConst = 6 * Math.PI * dynamicViscosity;

function calculateDrag(r, v) {
	// const re = reynoldsNumberForBall(r, v);
	let drag = createVector(0, 0);
	drag.x = dragPreConst * r * v.x * -1;
	drag.y = dragPreConst * r * v.y * -1;
	return drag;
}