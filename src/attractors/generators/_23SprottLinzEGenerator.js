import {Vector3} from "three";

const deltaTime = 0.01;
const a = 4;

export function sprottLinzEGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (y*z) * deltaTime;
    y2 = y + ((x + 1)*(x + 1) - y) * deltaTime;
    z2 = z + (1 - a*(x + 1)) * deltaTime;

    return new Vector3(x2, y2, z2);
}