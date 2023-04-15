import {Vector3} from "three";

const deltaTime = 0.001;
const a = 38;
const b = 8/3;
const c = 80;

export function qiChenGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (a*(y - x) + y*z) * deltaTime;
    y2 = y + (c*x + y - x*z) * deltaTime;
    z2 = z + (x*y - b*z) * deltaTime;

    return new Vector3(x2, y2, z2);
}