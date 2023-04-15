import {Vector3} from "three";

const deltaTime = 0.003;
const a = -5.5;
const b = 3.5;
const c = -1.0

export function arneodoGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (y) * deltaTime;
    y2 = y + (z) * deltaTime;
    z2 = z + (-a*x - b*y - z + c*x*x*x) * deltaTime;

    return new Vector3(x2, y2, z2);
}