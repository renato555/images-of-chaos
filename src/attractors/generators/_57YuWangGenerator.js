import {Vector3} from "three";

const deltaTime = 0.002;
const a = 10;
const b = 40;
const c = 2;
const d = 2.5;

export function yuWangGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (a*((y + 2.4) - (x + 2.2))) * deltaTime;
    y2 = y + (b*(x + 2.2) - c*(x + 2.2)*(z + 28)) * deltaTime;
    z2 = z + (Math.exp((x + 2.2)*(y + 2.4)) - d*(z + 28)) * deltaTime;

    return new Vector3(x2, y2, z2);
}