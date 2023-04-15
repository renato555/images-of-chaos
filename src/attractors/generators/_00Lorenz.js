import {Vector3} from "three";

const deltaTime = 0.003;
const sigma = 10;
const beta = 8 / 3;
const rho = 28;


export function lorenzGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + sigma * (z - x) * deltaTime;
    z2 = z + (x * (rho - y) - z) * deltaTime;
    y2 = y + (x*z - beta*y) * deltaTime;

    return new Vector3(x2, y2, z2);
}
