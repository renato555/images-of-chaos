import {Vector3} from "three";

const deltaTime = 0.02;
const a = -0.2;

export function sprottLinzIGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (a*y) * deltaTime;
    y2 = y + (x + z) * deltaTime;
    z2 = z + (x + y*y - z) * deltaTime;

    return new Vector3(x2, y2, z2);
}