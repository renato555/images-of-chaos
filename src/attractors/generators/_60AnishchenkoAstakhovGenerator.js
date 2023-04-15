import {Vector3} from "three";

const deltaTime = 0.01;
const m = 1.2;
const g = 0.5;

export function anishchenkoAstakhovGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (m*x + y - x*z) * deltaTime;
    y2 = y + (-x) * deltaTime;
    z2 = z + (-g*z + g*zeroOne(x)*x*x) * deltaTime;

    return new Vector3(x2, y2, z2);
}

function zeroOne(x) {
    return x > 0 ? 1 : 0;
}

