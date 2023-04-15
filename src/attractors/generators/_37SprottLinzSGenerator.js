import {Vector3} from "three";

const deltaTime = 0.002;
const a = 4;

export function sprottLinzSGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (-x - a*y) * deltaTime;
    y2 = y + (x + z*z) * deltaTime;
    z2 = z + (1 + x) * deltaTime;

    return new Vector3(x2, y2, z2);
}