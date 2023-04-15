import {Vector3} from "three";

const deltaTime = 0.03;
const a = 0.001;
const b = 0.2;
const c = 1.1;

export function financeGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + ((1/b - a)*x + z + x*y) * deltaTime;
    y2 = y + (-b*y - x*x) * deltaTime;
    z2 = z + (-x - c*z) * deltaTime;

    return new Vector3(x2, y2, z2);
}