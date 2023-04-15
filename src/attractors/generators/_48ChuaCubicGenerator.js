import {Vector3} from "three";

const deltaTime = 0.005;
const a = 10;
const b = 16;
const c = -0.143;

export function chuaCubicGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (a*(y - x*x*x - c*x)) * deltaTime;
    y2 = y + (x - y + z) * deltaTime;
    z2 = z + (-b*y) * deltaTime;

    return new Vector3(x2, y2, z2);
}