import {Vector3} from "three";

const deltaTime = 0.01;
const a = 3;

export function sprottLinzDGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (-y) * deltaTime;
    y2 = y + (x + z) * deltaTime;
    z2 = z + (x*z + a*y*y) * deltaTime;

    return new Vector3(x2, y2, z2);
}