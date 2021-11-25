import React, { useState } from "react";
import Osc1 from "./components/Osc1";
import './App.scss';

//runs once, parent component- creates functions for updating it and pass them down to child components
let actx = new AudioContext();
let out = actx.destination;

let osc1 = actx.createOscillator();
let gain1 = actx.createGain();

osc1.connect(gain1);
gain1.connect(out);


function App() {
  const [osc1Settings, setOsc1Settings] = useState({
    frequency: osc1.frequency.value,
    detune: osc1.detune.value,
    type: osc1.type
  });

  const changeOsc1 = e => {
    let { value, id } = e.target;
    setOsc1Settings({ ...osc1Settings, [id]: value });
    osc1[id].value = value;
  };

  const changeOsc1Type = e => {
    let { id } = e.target;
    setOsc1Settings({ ...osc1Settings, type: id })
    osc1.type = id;
  };

  return (
    <div className="App">
      <h1>sliders</h1>
      <button onClick={() => osc1.start()}>Start</button>
      <button onClick={() => osc1.stop()}>Stop</button>
      <Osc1
        change={changeOsc1}
        settings={osc1Settings}
        chaneType={changeOsc1Type}
      />
    </div>
  );
}

export default App;
