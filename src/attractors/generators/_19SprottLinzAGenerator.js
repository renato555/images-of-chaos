import {Vector3} from "three";

const deltaTime = 0.01;

export function sprottLinzAGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (y) * deltaTime;
    y2 = y + (-x + y*z) * deltaTime;
    z2 = z + (1 - y*y) * deltaTime;

    return new Vector3(x2, y2, z2);
}