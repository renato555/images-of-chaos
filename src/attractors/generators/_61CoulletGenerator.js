import {Vector3} from "three";

const deltaTime = 0.01;
const a = 0.8;
const b = -1.1;
const c = -0.45;
const d = -1;

export function coulletGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (y) * deltaTime;
    y2 = y + (z) * deltaTime;
    z2 = z + (a*x + b*y + c*z + d*x*x*x) * deltaTime;

    return new Vector3(x2, y2, z2);
}