import {Vector3} from "three";

const deltaTime = 0.02;
const a = 2;

export function wimolBanlueGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (y - x) * deltaTime;
    y2 = y + (-z*Math.tanh(x)) * deltaTime;
    z2 = z + (-a + x*y + Math.abs(y)) * deltaTime;

    return new Vector3(x2, y2, z2);
}