import {Vector3} from "three";

const deltaTime = 0.005;
const a = 3.9;
const b = 0.9;

export function sprottLinzLGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + ((y + 1) + a*z) * deltaTime;
    y2 = y + (b*(x + 1)*(x + 1) - (y + 1)) * deltaTime;
    z2 = z + (1 - (x + 1)) * deltaTime;

    return new Vector3(x2, y2, z2);
}