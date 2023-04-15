import {Vector3} from "three";

const deltaTime = 0.005;
const a = 0.49;
const b = 1;
const c = 0.0322;
const d = 1;
const s = 1;
const u = 0.03;
const v = 0.80;

export function hindmarshRoseGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + ((-u*x + y -a*x*x*x + b*x*x + z)/u) * deltaTime;
    y2 = y + (-a*x*x*x - (d - b)*x*x + z) * deltaTime;
    z2 = z + ((-s*x - z + c)/v) * deltaTime;

    return new Vector3(x2, y2, z2);
}