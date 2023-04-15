import {Vector3} from "three";

const deltaTime = 0.004;
const p = 3;
const q = 2.7;
const r = 1.7;
const s = 2;
const e = 9;

export function dadrasGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (y - p*x + q*y*z) * deltaTime;
    y2 = y + (r*y - x*z + z) * deltaTime;
    z2 = z + (s*x*y - e*z) * deltaTime;

    return new Vector3(x2, y2, z2);
}