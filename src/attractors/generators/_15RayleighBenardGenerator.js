import {Vector3} from "three";

const deltaTime = 0.05;
const a = 9;
const r = 12;
const b = 5;

export function rayleighBenardGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (-a*x + a*y) * deltaTime;
    y2 = y + (r*x - y - x*z) * deltaTime;
    z2 = z + (x*y - b*z) * deltaTime;

    return new Vector3(x2, y2, z2);
}