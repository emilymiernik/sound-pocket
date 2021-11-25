import { ReactComponent as LogoSvg} from './logo.svg';
import React, { useState } from "react";
import Osc1 from "./components/Osc1";
import Filter from "./components/Filter";
import './App.scss';

//runs once, parent component- creates functions for updating it and pass them down to child components
let actx = new AudioContext();
let out = actx.destination;

//The createOscillator() method of the BaseAudioContext interface creates an OscillatorNode, 
//a source representing a periodic waveform. It basically generates a constant tone. 
let osc1 = actx.createOscillator();
//The createGain() method of the BaseAudioContext interface creates a GainNode, 
//which can be used to control the overall gain (or volume) of the audio graph. 
let gain1 = actx.createGain();
// The createBiquadFilter() method of the BaseAudioContext interface creates a BiquadFilterNode, 
// which represents a second order filter configurable as several different common filter types. 
let filter = actx.createBiquadFilter();

osc1.connect(gain1);
gain1.connect(filter);
filter.connect(out);

function App() {

  //useState declarations
  const [osc1Settings, setOsc1Settings] = useState({
    frequency: osc1.frequency.value,
    detune: osc1.detune.value,
    type: osc1.type,
  });

  const [filterSettings, setFilterSettings] = useState({
    frequency: filter.frequency.value,
    detune: filter.detune.value,
    Q: filter.Q.value,
    gain: filter.gain.value,
    type: filter.type,
  });

  const changeOsc1 = (e) => {
    let { value, id } = e.target;
    setOsc1Settings({ ...osc1Settings, [id]: value });
    osc1[id].value = value;
  };

  const changeOsc1Type = (e) => {
    let { id } = e.target;
    //spread in current oscillator settings and put a key of type
    setOsc1Settings({ ...osc1Settings, type: id });
    osc1.type = id;
  };
  //.type is not an object with a dot value
  const changeFilter = (e) => {
    let { value, id } = e.target;
    setFilterSettings({ ...filterSettings, [id]: value });
    filter[id].value = value;
  };

  const changeFilterType = (e) => {
    let {id} = e.target;
    setFilterSettings ({...filterSettings, type:[id]});
    filter.type = id;
    }

  return (
    <div className="App">
      <div className="logo"> 
        <LogoSvg/>
      </div>
      <div className="intro">
      <h1>Welcome to PocketSound!</h1>
      <h2>Sound exploration in your pocket.</h2>
      <div className="wrapper">
      <p>Waveforms are the starting point of synthesis—and of all sound. In a synthesizer, an oscillator creates a repeated signal of a waveform. 
        This waveform is what gets altered through synthesis. When you're ready, click start to initiate the oscillator. Please be mindful of your volume.</p>
        </div>
      <button onClick={() => osc1.start()}>Start</button>
      <button onClick={() => osc1.stop()}>Stop</button>
      </div>
      <Osc1
        change={changeOsc1}
        settings={osc1Settings}
        changeType={changeOsc1Type}
      />
      <Filter change={changeFilter} settings={filterSettings} changeType={changeFilterType} />
      <footer>
        <p>Created at Juno College 2021</p>
      </footer>
    </div>
  );
}

export default App;
