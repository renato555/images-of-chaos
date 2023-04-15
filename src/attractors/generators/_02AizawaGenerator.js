import {Vector3} from "three";

const deltaTime = 0.01;
const a = 0.95;
const b = 0.7
const c = 0.6
const d = 3.5
const e = 0.25
const f = 0.1

export function aizawaGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + ((z - b)*x - d*y) * deltaTime;
    y2 = y + (d*x + (z - b)*y) * deltaTime;
    z2 = z + (c + a*z - z*z*z/3 - (x*x + y*y)*(1 + e*z) + f*z*x*x*x) * deltaTime;

    return new Vector3(x2, y2, z2);
}