import {Vector3} from "three";

const deltaTime = 0.003;
const a = 0.1;
const b = 4;
const c = 14;
const d = 0.08;

export function lorenzMod1Generator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (-a*x + y*y - z*z + a*c) * deltaTime;
    y2 = y + (x*(y - b*z) + d) * deltaTime;
    z2 = z + (z + x*(b*y + z)) * deltaTime;

    return new Vector3(x2, y2, z2);
}