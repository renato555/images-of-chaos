import {Vector3} from "three";

const deltaTime = 0.004;
const a = 5;
const b = -10;
const c = -0.38;
const d = 4.5;

export function chenLeeGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (a*x - y*(z + d)) * deltaTime;
    y2 = y + (b*y + x*(z + d)) * deltaTime;
    z2 = z + (c*(z + d) + x*y/3) * deltaTime;

    return new Vector3(x2, y2, z2);
}