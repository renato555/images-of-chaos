import {Vector3} from "three";

const deltaTime = 0.02;
const a = 0.4;

export function sprottLinzGGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (a*x + z) * deltaTime;
    y2 = y + (x*z - y) * deltaTime;
    z2 = z + (-x + y) * deltaTime;

    return new Vector3(x2, y2, z2);
}