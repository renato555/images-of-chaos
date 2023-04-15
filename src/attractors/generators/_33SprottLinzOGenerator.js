import {Vector3} from "three";

const deltaTime = 0.005;
const a = 2.7;

export function sprottLinzOGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (y) * deltaTime;
    y2 = y + (x - z) * deltaTime;
    z2 = z + (x + x*z + a*y) * deltaTime;

    return new Vector3(x2, y2, z2);
}