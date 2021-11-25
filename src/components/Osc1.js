import React from "react"

const Osc1 = ({ change, settings, changeType }) => {
    // destructure type freq and detune from settings
    const { type, frequency, detune } = settings;
    
    return (
        <div className="control">
            <h2>Oscillator 1</h2>

            <div className="param">
                {/* if range went from 0-100, the human ear wouldn't be able to hear it. The sub bass would be hard to hear to sub bass that's barely high enough. */}
                <h3>Frequency</h3>
                <input
                    value={frequency}
                    onChange={change}
                    max="5000"
                    type="range"
                    id="frequency"
                />
            </div>

            <div className="param">
                <h3>Detune</h3>
                <input
                    value={detune}
                    onChange={change}
                    type="range"
                    id="detune"
                />
            </div>

            {/* check if ie. type is === sine, and if it is, include the class of active */}
            <div className="param">
                <h3>Wave</h3>
                <button onClick={changeType} id="sine"className={`${type === "sine" && "active"}`}>Sine</button>
                <button onClick={changeType} id="triangle" className={`${type === "triangle" && "active"}`}>Triangle</button>
                <button onClick={changeType} id="square" className={`${type === "square" && "active"}`}>Square</button>
                <button onClick={changeType} id="sawtooth" className={`${type === "sawtooth" && "active"}`}>Sawtooth</button>
            </div>
        </div>
    );
};

export default Osc1;