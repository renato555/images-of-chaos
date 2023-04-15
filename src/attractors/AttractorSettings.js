import InputSlider from "react-input-slider";
import {useState} from "react";
import {AttractorFunctionSelector} from "./AttractorFunctionSelector";


export function AttractorSettings(props) {
    const [trailSlider, setTrailSlider] = useState(16.67);

    function numberOfPointsCallback(e) {
        let numberOfPoints = parseInt(e.target.value);
        if (!e.target.value) numberOfPoints = 0;
        if (numberOfPoints < 0 || numberOfPoints > 100) return;
        props.setRenderSettings({...props.renderSettings, numberOfPoints: numberOfPoints});
    }

    function speedCallback(level){
        let newTimeBetweenUpdates = 0.1;
        switch (level) {
            case 1: newTimeBetweenUpdates = 0.01; break;
            case 2: newTimeBetweenUpdates = 0.001; break;
            case 3: newTimeBetweenUpdates = 0.0001; break;
            case 4: newTimeBetweenUpdates = 0.00001; break;
            default: throw new Error("Invalid speed.")
        }
        props.setRenderSettings({...props.renderSettings, timeBetweenUpdates: newTimeBetweenUpdates});
    }

    function trailCallback(percentage) {
        percentage /= 100;
        const minTrailLength = 1;
        const maxTrailLength = 3000;
        const newTrailLength = (maxTrailLength - minTrailLength) * percentage + minTrailLength;
        setTrailSlider(percentage * 100);
        props.setRenderSettings({...props.renderSettings, trailLength: newTrailLength});
    }

    function resetCallback() {
        const currentNumberOfPoints = props.renderSettings.numberOfPoints;
        props.setRenderSettings({...props.renderSettings, numberOfPoints: 0});
        setTimeout(() =>
            props.setRenderSettings({...props.renderSettings, numberOfPoints: currentNumberOfPoints}), 0);
    }

    function attractorFunctionCallback(attractorGenerator) {
        props.setAttractorGenerator(() => attractorGenerator);
        resetCallback();
    }

    function pauseCallback() {
        const pause = !props.renderSettings.pause;
        props.setRenderSettings({...props.renderSettings, pause: pause})
    }

    return (
        <div className="attractor-settings">
            <h2>Settings</h2>
            <div className="settings-item">
                Number of points
                <input
                    type="number"
                    value={props.renderSettings.numberOfPoints === 0 ? '' : props.renderSettings.numberOfPoints}
                    onChange={numberOfPointsCallback}/>
            </div>
            <div className="settings-item">
                Speed
                <div className="speed-bar">
                    <button onClick={() => speedCallback(1)}>1</button>
                    <button onClick={() => speedCallback(2)}>2</button>
                    <button onClick={() => speedCallback(3)}>3</button>
                    <button onClick={() => speedCallback(4)}>4</button>
                </div>
            </div>
            <div className="settings-item">
                Trail Length
                <InputSlider
                    className="input-slider"
                    axis="x"
                    x={trailSlider}
                    onChange={(coords) => trailCallback(coords.x)}/>
            </div>
            <div className="settings-item">
                Attractor Function
                <AttractorFunctionSelector
                    attractorFunctionCallback={attractorFunctionCallback}/>
            </div>
            <div className="settings-item">
                <button onClick={pauseCallback}>{props.renderSettings.pause ? "Start" : "Pause"}</button>
                <button onClick={resetCallback}>Reset</button>
            </div>

        </div>
    );
}
