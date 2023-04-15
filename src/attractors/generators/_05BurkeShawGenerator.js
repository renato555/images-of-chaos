import {Vector3} from "three";

const deltaTime = 0.005;
const s = 10;
const v = 4.272;

export function burkeShawGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (-s*(x + y)) * deltaTime;
    y2 = y + (-y - s*x*z) * deltaTime;
    z2 = z + (s*x*y + v) * deltaTime;

    return new Vector3(x2, y2, z2);
}