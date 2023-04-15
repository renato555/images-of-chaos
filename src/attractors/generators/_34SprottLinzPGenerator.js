import {Vector3} from "three";

const deltaTime = 0.01;
const a = 2.7;

export function sprottLinzPGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (a*y + z) * deltaTime;
    y2 = y + (-x + y*y) * deltaTime;
    z2 = z + (x + y) * deltaTime;

    return new Vector3(x2, y2, z2);
}