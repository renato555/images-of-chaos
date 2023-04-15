import {Vector3} from "three";

const deltaTime = 0.01;
const a = 1.013;
const b = -0.011;
const c = 0.02;
const d = 0.96;
const f = 0.01;
const g = 1.0;
const h = 0.05;
const u = 0.05;

export function tamariGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (((x + 1) - a*(y + 1))*Math.cos((z + 1)) - b*(y + 1)*Math.sin((z + 1))) * deltaTime;
    y2 = y + (((x + 1) + c*(y + 1))*Math.sin((z + 1)) + d*(y + 1)*Math.cos((z + 1))) * deltaTime;
    z2 = z + (f*(z + 1) + g*Math.atan(((1 - u)*(y + 1))/((1 - h)*(x + 1)))) * deltaTime;

    return new Vector3(x2, y2, z2);
}