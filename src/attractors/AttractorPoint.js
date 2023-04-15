import React, {useRef, useState} from "react";
import {BufferAttribute} from "three";
import {useFrame} from "@react-three/fiber";

export function AttractorPoint(props) {
    const [positions, setPositions] = useState([props.startingPoint]);
    const startingTime = useRef(performance.now());
    const maxNumberOfNewPoints = 10000;

    const timeBetweenUpdates = props.renderSettings.timeBetweenUpdates;
    const trailLength = props.renderSettings.trailLength;
    const pause = props.renderSettings.pause;
    const attractorGenerator = props.attractorGenerator;

    useFrame((state, delta) => {
        if (pause) return;

        let currentRenderTime = performance.now();
        let numberOfPointsToGenerate = Math.floor((currentRenderTime - startingTime.current) / timeBetweenUpdates) -
                                        Math.floor((currentRenderTime - delta - startingTime.current) / timeBetweenUpdates);
        numberOfPointsToGenerate = Math.min(numberOfPointsToGenerate, maxNumberOfNewPoints)
        let lastPoint = positions[positions.length - 1];
        for (let i = 0; i < numberOfPointsToGenerate; ++i) {
            lastPoint = attractorGenerator(lastPoint)
            positions.push(lastPoint);
        }

        const tailCutoff = Math.max(0, positions.length - trailLength);
        setPositions(positions.slice(tailCutoff));
    });

    const positionAttribute = new BufferAttribute(new Float32Array(
        positions.flatMap(point => point.toArray())), 3);
    return (
        <>
            <mesh position={positions[positions.length - 1]}>
                <sphereGeometry args={[0.05, 11, 11]} />
                <meshBasicMaterial color={'#0ff'} />
            </mesh>
            <line>
                <bufferGeometry
                    attach="geometry"
                    attributes={{ position: positionAttribute }}/>
                <lineBasicMaterial color={'#0cf'} linewidth={3}/>
            </line>
        </>
    );
}
