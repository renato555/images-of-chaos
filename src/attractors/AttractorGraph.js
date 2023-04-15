import {Vector3} from "three";
import {AttractorPoint} from "./AttractorPoint";
import React from "react";
import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

export function AttractorGraph(props) {
    const startingCenter = new Vector3(0, 0, 0);

    const attractorPoints = [...Array(props.renderSettings.numberOfPoints).keys()].map(index => {
        let startingPoint = new Vector3(
            addGaussianNoise(startingCenter.x),
            addGaussianNoise(startingCenter.y),
            addGaussianNoise(startingCenter.z)
        )
        return <AttractorPoint
                    key={index}
                    startingPoint={startingPoint}
                    renderSettings={props.renderSettings}
                    attractorGenerator={props.attractorGenerator}
        />
    });

    return (
        <div className="attractor-graph">
            <Canvas>
                <OrbitControls/>
                {attractorPoints}
            </Canvas>
        </div>
    );
}

function addGaussianNoise(coord, mean= 0, stdev= 0.005) {
    const u = 1 - Math.random();
    const v = Math.random();
    const z = Math.sqrt(-2.0 * Math.log( u ) ) * Math.cos(2.0 * Math.PI * v );
    return coord + z * stdev + mean;
}
