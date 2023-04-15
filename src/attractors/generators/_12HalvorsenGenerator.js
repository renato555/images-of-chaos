import {Vector3} from "three";

const deltaTime = 0.005;
const a = 1.4;

export function halvorsenGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (-a*x - 4*y - 4*z - y*y) * deltaTime;
    y2 = y + (-a*y - 4*z - 4*x - z*z) * deltaTime;
    z2 = z + (-a*z - 4*x - 4*y - x*x) * deltaTime;

    return new Vector3(x2, y2, z2);
}