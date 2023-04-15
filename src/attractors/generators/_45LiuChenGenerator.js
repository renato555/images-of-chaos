import {Vector3} from "three";

const deltaTime = 0.001;
const a = 2.4;
const b = -3.78;
const c = 14;
const d = -11;
const e = 4;
const f = 5.58;
const g = -1;

export function liuChenGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (a*(y + 3) + b*(x + 1) + c*(y + 3)*(z + 5)) * deltaTime;
    y2 = y + (d*(y + 3) - (z + 5) + e*(x + 1)*(z + 5)) * deltaTime;
    z2 = z + (f*(z + 5) + g*(x + 1)*(y + 3)) * deltaTime;

    return new Vector3(x2, y2, z2);
}