import {Vector3} from "three";

const deltaTime = 0.0002;
const a = 16;
const b = 43;
const c = -16;
const d = 16;
const e = 1;

export function qi3dGenerator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    x2 = x + (a*((y - 4) - (x + 3)) + e*(y - 4)*(z + 3)) * deltaTime;
    y2 = y + (c*(x + 3) + d*(y - 4) - (x + 3)*(z + 3)) * deltaTime;
    z2 = z + ((x + 3)*(y - 4) - b*(z + 3)) * deltaTime;

    return new Vector3(x2, y2, z2);
}