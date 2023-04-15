import {Vector3} from "three";

const deltaTime = 0.0001;
const a = 40;
const b = 55;
const c = 1.833;
const d = 0.16;
const e = 0.65;
const f = 20;

export function tsucs2Generator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (a*(y - x) + d*x*z) * deltaTime;
    y2 = y + (f*y - x*z + b*x) * deltaTime;
    z2 = z + (c*z + x*y - e*x*x) * deltaTime;

    return new Vector3(x2, y2, z2);
}