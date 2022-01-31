import {Component} from "react";

class TestForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oddNumSelect: '',
            textInput: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleForm = this.handleForm.bind(this);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    handleChange(e) {
        const target = e.target;
        let value = null;
        switch (target.type) {
            case 'select-one':
            case 'text':
                value = target.value;
                break;
            case 'checkbox':
                value = target.checked;
                break;
        }
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleForm(e) {
        e.preventDefault();
        // console.log(e);
        console.log(this.state.oddNumSelect, this.state.textInput);
    }

    render() {
        return (
            <form onSubmit={this.handleForm}>
                <select
                    name="oddNumSelect"
                    onChange={this.handleChange}
                    value={this.state.oddNumSelect}>
                    <option value={24}>24</option>
                    <option value={12}>12</option>
                    <option value={6}>6</option>
                    <option value={3}>3</option>
                </select>
                <input
                    name="textInput"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.textInput} />
                <button type={"submit"}>Submit</button>
            </form>
        )
    }


}

export default TestForm;