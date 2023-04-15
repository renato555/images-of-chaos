import {Vector3} from "three";

const deltaTime = 0.001;
const a = -10;
const b = -4;
const c = 18.1;

export function luChenGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (-(a*b*x)/(a + b) - y*z + c) * deltaTime;
    y2 = y + (a*y + x*z) * deltaTime;
    z2 = z + (b*z + x*y) * deltaTime;

    return new Vector3(x2, y2, z2);
}