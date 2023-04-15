import {Vector3} from "three";

const deltaTime = 0.008;
const a = 3.4;
const b = 0.5;

export function sprottLinzQGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (-z) * deltaTime;
    y2 = y + (x - y) * deltaTime;
    z2 = z + (a*x + y*y + b*z) * deltaTime;

    return new Vector3(x2, y2, z2);
}