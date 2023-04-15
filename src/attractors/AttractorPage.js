import React, {useState} from "react";
import {AttractorGraph} from "./AttractorGraph";
import {AttractorSettings} from "./AttractorSettings";
import {sprottLinzBGenerator} from "./generators/_20SprottLinzBGenerator";
import {AttractorInstructions} from "./AttractorInstructions";

export function AttractorPage() {
    const [attractorGenerator, setAttractorGenerator] = useState(() => sprottLinzBGenerator);
    const [renderSettings, setRenderSettings] = useState({
        numberOfPoints: 10,
        timeBetweenUpdates: 0.01,
        trailLength: 500,
        pause: false
    })

    return (
        <div className="attractor-page">
            <AttractorGraph
                renderSettings={renderSettings}
                attractorGenerator={attractorGenerator}
            />

            <div className="attractor-menu">
                <AttractorSettings
                    renderSettings={renderSettings}
                    setRenderSettings={setRenderSettings}
                    setAttractorGenerator={setAttractorGenerator}
                />
                <AttractorInstructions>

                </AttractorInstructions>
            </div>
        </div>
    )
}
