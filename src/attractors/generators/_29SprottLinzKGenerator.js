import {Vector3} from "three";

const deltaTime = 0.02;
const a = 0.3;

export function sprottLinzKGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (x*y - z) * deltaTime;
    y2 = y + (x - y) * deltaTime;
    z2 = z + (x + a*z) * deltaTime;

    return new Vector3(x2, y2, z2);
}