
export function AttractorInstructions(props) {
    return (
        <div className="attractor-instructions">
            <h2>Instructions</h2>
            <ol>
                <li>Drag the mouse to rotate the coordinate system</li>
                <li>Scroll up to zoom in or scroll down to zoom out</li>
                <li>Pick a different Attractor Function for a different graph</li>
                <li>Adjust the number of points [0 - 100]</li>
                <li>Choose one of the four provided speeds for the points</li>
                <li>Use the Trail Length slider to adjust the trail which points leave behind them</li>
                <li>Use the Pause and Reset buttons to stop the points or reset them to the initial position</li>
            </ol>
        </div>
    )
}
