import {Component} from "react";

class TestForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleForm = this.handleForm.bind(this);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    handleForm(e) {
        e.preventDefault();
        alert("FORM SUBMITTED");
        console.log(e);
        console.log(this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.handleForm} value={this.state.value}>
                <select onChange={this.handleChange}>
                    <option value={24}>24</option>
                    <option value={12}>12</option>
                    <option value={6}>6</option>
                    <option value={3}>3</option>
                </select>
                <button type={"submit"}>Submit</button>
            </form>
        )
    }


}

export default TestForm;