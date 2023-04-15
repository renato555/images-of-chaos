import {Vector3} from "three";

const deltaTime = 0.005;
const a = 0.977;
const b = 10;
const c = 4;
const d = 0.1;

export function wangGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (a*(x - y) - y*z) * deltaTime;
    y2 = y + (-b*y + x*z) * deltaTime;
    z2 = z + (-c*z + d*x + x*y) * deltaTime;

    return new Vector3(x2, y2, z2);
}