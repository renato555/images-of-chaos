import {Vector3} from "three";

const deltaTime = 0.01;
const a = 1.8;
const b = -0.07;
const d = 1.5;
const m = 0.02;

export function actGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (a*(x - y)) * deltaTime;
    y2 = y + (-4*a*y + x*z + m*x*x*x) * deltaTime;
    z2 = z + (-d*a*z + x*y + b*z*z) * deltaTime;

    return new Vector3(x2, y2, z2);
}