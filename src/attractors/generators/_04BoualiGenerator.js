import {Vector3} from "three";

const deltaTime = 0.006;
const a = 0.3;
const s = 1.0;

export function boualiGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (x*(4 - y) + a*z) * deltaTime;
    y2 = y + (-y*(1- x*x)) * deltaTime;
    z2 = z + (-x*(1.5 - s*z) - 0.05*z) * deltaTime;

    return new Vector3(x2, y2, z2);
}