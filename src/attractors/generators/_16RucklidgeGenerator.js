import {Vector3} from "three";

const deltaTime = 0.01;
const k = 2;
const a = 6.7;

export function rucklidgeGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (-k*x + a*y - y*z) * deltaTime;
    y2 = y + (x) * deltaTime;
    z2 = z + (-z + y*y) * deltaTime;

    return new Vector3(x2, y2, z2);
}