import {Vector3} from "three";

const deltaTime = 0.001;
const a = 40;
const c = 0.833;
const d = 0.5;
const e = 0.65;
const f = 20;

export function tsucs1Generator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (a*(y - x) + d*x*z) * deltaTime;
    y2 = y + (f*y - x*z) * deltaTime;
    z2 = z + (c*z + x*y - e*x*x) * deltaTime;

    return new Vector3(x2, y2, z2);
}