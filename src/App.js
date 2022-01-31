import './App.css';
// import React
import {Component} from "react";
//
// .Component from "react";

function App() {
  return (
      <Clock />
  );
}

export default App;

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
        <div>
          <h1>It is now { this.state.date.toLocaleTimeString() }</h1>
        </div>
    );
  }
}