import './App.css';
import Clock from './Clock.js';
import TestForm from './TestForm.js';
import TemperatureState from "./TemperatureState";
import {Button} from "./Button";

function App() {
  return (
      <div>
          <Clock/>
          <Clock/>
          <Clock/>

          <TestForm/>
          <TemperatureState/>

          <Button/>
      </div>
  );
}

export default App;