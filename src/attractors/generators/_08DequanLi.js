import {Vector3} from "three";

const deltaTime = 0.0001;
const a = 40;
const c = 1.8333;
const d = 0.16;
const e = 0.65;
const k = 55;
const f = 20;

export function dequanLiGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (a*(y - x) + d*x*z) * deltaTime;
    y2 = y + (k*x + f*y - x*z) * deltaTime;
    z2 = z + (c*z + x*y - e*x*x) * deltaTime;

    return new Vector3(x2, y2, z2);
}