import {Vector3} from "three";

const deltaTime = 0.001;
const a = 0.9;
const b = 5;
const c = 9.9;
const d = 1;

export function lorenzMod2Generator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (-a*x + y*y - z*z + a*c) * deltaTime;
    y2 = y + (x*(y - b*z) + d) * deltaTime;
    z2 = z + (-z + x*(b*y + z)) * deltaTime;

    return new Vector3(x2, y2, z2);
}