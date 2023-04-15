import {Vector3} from "three";

const deltaTime = 0.001;
const a = 4;
const b = 6;
const c = 10;
const d = 5;
const k = 1;

export function fourWingGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (a*x - b*y*z) * deltaTime;
    y2 = y + (-c*y + x*z) * deltaTime;
    z2 = z + (k*x - d*z + x*y) * deltaTime;

    return new Vector3(x2, y2, z2);
}