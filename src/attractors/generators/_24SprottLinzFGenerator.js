import {Vector3} from "three";

const deltaTime = 0.01;
const a = 0.5;

export function sprottLinzFGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (y + z) * deltaTime;
    y2 = y + (-x + a*y) * deltaTime;
    z2 = z + (x*x - z) * deltaTime;

    return new Vector3(x2, y2, z2);
}