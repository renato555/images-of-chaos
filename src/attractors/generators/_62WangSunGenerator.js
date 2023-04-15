import {Vector3} from "three";

const deltaTime = 0.01;
const a = 0.2;
const b = -0.01;
const c = 1;
const d = -0.4;
const e = -1;
const f = -1;

export function wangSunGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + ((x + 0.3)*a + c*(y + 0.1)*(z + 1)) * deltaTime;
    y2 = y + (b*(x + 0.3) + d*(y + 0.1) - (x + 0.3)*(z + 1)) * deltaTime;
    z2 = z + (e*(z + 1) + f*(x + 0.3)*(y + 0.1)) * deltaTime;

    return new Vector3(x2, y2, z2);
}