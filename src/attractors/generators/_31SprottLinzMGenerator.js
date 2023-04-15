import {Vector3} from "three";

const deltaTime = 0.001;
const a = 1.7;

export function sprottLinzMGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (-z) * deltaTime;
    y2 = y + (-x*x - y) * deltaTime;
    z2 = z + (a + a*x + y) * deltaTime;

    return new Vector3(x2, y2, z2);
}