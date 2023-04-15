import {Vector3} from "three";

const deltaTime = 0.009;
const a = 1.5;

export function noseHooverGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (y) * deltaTime;
    y2 = y + (-x + y*z) * deltaTime;
    z2 = z + (a - y*y) * deltaTime;

    return new Vector3(x2, y2, z2);
}