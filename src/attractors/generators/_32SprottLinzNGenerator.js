import {Vector3} from "three";

const deltaTime = 0.01;
const a = 2;

export function sprottLinzNGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (-a*y) * deltaTime;
    y2 = y + (x + z*z) * deltaTime;
    z2 = z + (1 + y - a*z) * deltaTime;

    return new Vector3(x2, y2, z2);
}