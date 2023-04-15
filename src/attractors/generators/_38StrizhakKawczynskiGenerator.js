import {Vector3} from "three";

const deltaTime = 0.08;
const a = 150.0
const b = 436.6
const b1 = 3.714
const b2 = 21.7
const q = 0.07
const r = 0.101115
const ax1 = 10
const ax2 = 11
const ax3 = 20

export function strizhakKawczynskiGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (r*(y - (x - ax1)*(x - ax2)*(x - ax3) - a)) * deltaTime;
    y2 = y + (b - b1*z - b2*x - y) * deltaTime;
    z2 = z + (q*(x - z)) * deltaTime;

    return new Vector3(x2, y2, z2);
}