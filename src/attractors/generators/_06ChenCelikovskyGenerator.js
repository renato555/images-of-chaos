import {Vector3} from "three";

const deltaTime = 0.002;
const a = 36;
const b = 3;
const c = 20;

export function chenCelikovskyGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (a*((y + 1) - (x + 1))) * deltaTime;
    y2 = y + (-(x + 1)*(z + 1) + c*(y + 1)) * deltaTime;
    z2 = z + ((x + 1)*(y + 1) - b*(z + 1)) * deltaTime;

    return new Vector3(x2, y2, z2);
}