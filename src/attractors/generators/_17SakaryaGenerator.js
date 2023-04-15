import {Vector3} from "three";

const deltaTime = 0.002;
const a = 0.4;
const b = 0.3;
const c = 1;
const d = -1;
const e = 1;


export function sakaryaGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (-(x + c) + (y + d) + (y + d)*(z + e)) * deltaTime;
    y2 = y + (-(x + c) - (y + d) + a*(x + c)*(z + e)) * deltaTime;
    z2 = z + ((z + e) - b*(x + c)*(y + d)) * deltaTime;

    return new Vector3(x2, y2, z2);
}