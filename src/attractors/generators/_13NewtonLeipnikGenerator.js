import {Vector3} from "three";

const deltaTime = 0.02;
const a = 0.4;
const b = 0.175;

export function newtonLeipnikGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (-a*x + y + 10*y*z) * deltaTime;
    y2 = y + (-x - 0.4*y + 5*x*z) * deltaTime;
    z2 = z + (b*z - 5*x*y) * deltaTime;

    return new Vector3(x2, y2, z2);
}