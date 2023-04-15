import {Vector3} from "three";

const deltaTime = 0.05;
const b = 0.19;

export function thomasGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (-b*x + Math.sin(y)) * deltaTime;
    y2 = y + (-b*y + Math.sin(z)) * deltaTime;
    z2 = z + (-b*z + Math.sin(x)) * deltaTime;

    return new Vector3(x2, y2, z2);
}