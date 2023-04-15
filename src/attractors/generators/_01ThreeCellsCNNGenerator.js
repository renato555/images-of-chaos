import {Vector3} from "three";

const deltaTime = 0.007;
const p1 = 1.24;
const p2 = 1.1;
const r = 4.4;
const s = 3.21;


export function threeCellsCNNGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    const h1 = 0.5 * (Math.abs(x + 1) - Math.abs(x - 1));
    const h2 = 0.5 * (Math.abs(y + 1) - Math.abs(y - 1));
    const h3 = 0.5 * (Math.abs(z + 1) - Math.abs(z - 1));

    x2 = x + (-x + p1*h1 - s*h2 - s*h3) * deltaTime;
    y2 = y + (-y - s*h1 + p2*h2 - r*h3) * deltaTime;
    z2 = z + (-z - s*h1 + r*h2 + h3) * deltaTime;

    return new Vector3(x2, y2, z2);
}