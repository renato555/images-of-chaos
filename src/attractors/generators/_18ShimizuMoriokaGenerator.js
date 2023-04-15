import {Vector3} from "three";

const deltaTime = 0.01;
const a = 0.75;
const b = 0.45;

export function shimizuMoriokaGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (y) * deltaTime;
    y2 = y + ((1 - z)*x - a*y) * deltaTime;
    z2 = z + (x*x - b*z) * deltaTime;

    return new Vector3(x2, y2, z2);
}