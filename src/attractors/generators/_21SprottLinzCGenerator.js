import {Vector3} from "three";

const deltaTime = 0.02;

export function sprottLinzCGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (y*z) * deltaTime;
    y2 = y + (x - y) * deltaTime;
    z2 = z + (1 - x*x) * deltaTime;

    return new Vector3(x2, y2, z2);
}