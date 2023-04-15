import {Vector3} from "three";

const deltaTime = 0.005;
const a = 0.2;
const b = 4;
const f = 8;
const g = 1;

export function hadleyGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (-y*y - z*z - a*x + a*f) * deltaTime;
    y2 = y + (x*y - b*x*z - y + g) * deltaTime;
    z2 = z + (b*x*y + x*y - z) * deltaTime;

    return new Vector3(x2, y2, z2);
}