import {Vector3} from "three";

const deltaTime = 0.01;
const a = 0.44;
const b = 1.1;
const c = 1.0;

export function genesioTesiGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (y) * deltaTime;
    y2 = y + (z) * deltaTime;
    z2 = z + (-c*x - b*y - a*z + x*x) * deltaTime;

    return new Vector3(x2, y2, z2);
}