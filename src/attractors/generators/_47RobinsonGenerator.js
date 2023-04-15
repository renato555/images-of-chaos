import {Vector3} from "three";

const deltaTime = 0.01;
const a = 0.71;
const b = 1.8587;
const c = 0.7061;
const d = 0.1;
const v = 1;

export function robinsonGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (y) * deltaTime;
    y2 = y + (x - 2*x*x*x - a*y + b*x*x*y - v*y*z) * deltaTime;
    z2 = z + (-c*z + d*x*x) * deltaTime;

    return new Vector3(x2, y2, z2);
}