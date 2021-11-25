import React from "react"

const Osc1 = ({ change, settings, changeType }) => {

    return (
        <div className="control">
            <h2>osc 1</h2>

            <div className="param">
                {/* if range went from 0-100, the human ear wouldn't be able to hear it. The sub bass would be hard to hear to sub bass that's barely high enough. */}
                <h3>Frequency</h3>
                <input
                    value={settings.frequency}
                    onChange={change}
                    max="5000"
                    type="range"
                    id="frequency"
                />
            </div>

            <div className="param">
                <h3>Detune</h3>
                <input
                    value={settings.detune}
                    onChange={change}
                    type="range"
                    id="detune"
                />
            </div>


            <div className="param">
                <h3>Wave</h3>
                <button id="sine" onClick={changeType} className={``}>Sine</button>
                <button id="triangle" onClick={changeType} className={``}>Triangle</button>
                <button id="square" onClick={changeType} className={``}>Square</button>
                <button id="sawtooth" onClick={changeType} className={``}>Sawtooth</button>
            </div>




        </div>
    );
};

export default Osc1;