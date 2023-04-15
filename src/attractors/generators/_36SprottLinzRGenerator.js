import {Vector3} from "three";

const deltaTime = 0.02;
const a = 0.9;
const b = 0.4;

export function sprottLinzRGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (a - y) * deltaTime;
    y2 = y + (b + z) * deltaTime;
    z2 = z + (x*y - z) * deltaTime;

    return new Vector3(x2, y2, z2);
}