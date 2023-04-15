import {Vector3} from "three";

const deltaTime = 0.0001;
const a = 50;
const b = 10;
const c = 13;
const e = 6;

export function xingYunGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (a*((y + 3) - (x + 3)) + (y + 3)*(z + 0.1)*(z + 0.1)) * deltaTime;
    y2 = y + (b*((x + 3) + y) - (x + 3)*(z + 0.1)*(z + 0.1)) * deltaTime;
    z2 = z + (-c*(z + 0.1) + e*(y + 3) + (x + 3)*(y + 3)*(z + 0.1)) * deltaTime;

    return new Vector3(x2, y2, z2);
}