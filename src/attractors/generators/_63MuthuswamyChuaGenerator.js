import {Vector3} from "three";

const deltaTime = 0.01;
const a = 0.6;

export function muthuswamyChuaGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (y) * deltaTime;
    y2 = y + (-x/3 + y/2 - y*z*z/2) * deltaTime;
    z2 = z + (y - a*z - y*z) * deltaTime;

    return new Vector3(x2, y2, z2);
}