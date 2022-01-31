import { Component } from "react";

class TemperatureState extends Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'}
    }

    handleCelsiusChange(temp) {
        this.setState({scale: 'c', temperature: temp});
    }

    handleFahrenheitChange(temp) {
        this.setState({scale: 'f', temperature: temp});
    }

    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature;

        return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={this.handleCelsiusChange} />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={this.handleFahrenheitChange} />
            <TempFeedback celsius={celsius} />
        </div>
        );
    }
}

export default TemperatureState;

function TempFeedback(props) {
    if (props.celsius > 100) {
        return <p>The water boils and boils!</p>
    } else {
        return <p>The water ain't doing much...</p>
    }
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature: '' };
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input value={temperature}
                onChange={this.handleChange}/>
        </fieldset>
    }
}