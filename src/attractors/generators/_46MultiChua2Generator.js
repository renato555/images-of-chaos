import {Vector3} from "three";

const deltaTime = 0.01;
const a = 9;
const b = 14.286;

export function multiChua2Generator(point) {
    const [x, y, z] = point;
    let x2, y2, z2;

    let innerFunction = innerF(x);
    x2 = x + (a*(y - innerFunction)) * deltaTime;
    y2 = y + (x - y + z) * deltaTime;
    z2 = z + (-b*y) * deltaTime;

    return new Vector3(x2, y2, z2);
}

const m = [-1/7, 2/7, 4/7, 2/7, -4/7, 2/7];
const c = [0, 1.0, 2.15, 3.6, 8.2, 13.0];

function innerF(x) {
    let result = m[5] * x + 0.5 * (
        (m[0] - m[1]) * (Math.abs(x + c[1]) - Math.abs(x - c[1])) +
        (m[1] - m[2]) * (Math.abs(x + c[2]) - Math.abs(x - c[2])) +
        (m[2] - m[3]) * (Math.abs(x + c[3]) - Math.abs(x - c[3])) +
        (m[3] - m[4]) * (Math.abs(x + c[4]) - Math.abs(x - c[4])) +
        (m[4] - m[5]) * (Math.abs(x + c[5]) - Math.abs(x - c[5]))
    );

    return result;
}