import './App.css';
import Clock from './Clock.js';
import TestForm from './TestForm.js';
import TemperatureState from "./TemperatureState";

function App() {
  return (
      <div>
        <Clock />
        <Clock />
        <Clock />

        <TestForm />

          <TemperatureState />
      </div>
  );
}

export default App;