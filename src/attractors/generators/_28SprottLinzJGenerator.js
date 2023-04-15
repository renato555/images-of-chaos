import {Vector3} from "three";

const deltaTime = 0.006;
const a = 2;

export function sprottLinzJGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (a*z) * deltaTime;
    y2 = y + (-a*y + z) * deltaTime;
    z2 = z + (-x + y + y*y) * deltaTime;

    return new Vector3(x2, y2, z2);
}