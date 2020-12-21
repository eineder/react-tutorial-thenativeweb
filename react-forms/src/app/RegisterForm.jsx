import React from 'react'
import { NameInput } from './NameInput'
import { TShirtSizeInput } from './TShirtSizeInput'
import { LunchInput } from './LunchInput'

export class RegisterForm extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: '',
            tShirtSize: 'm-l',
            lunch: true
        };
    }

    render() {
        return (
            <div>
                <NameInput value={this.state.name} onChange={this.handleChange} />
                <br />
                <TShirtSizeInput value={this.state.tShirtSize} onChange={this.handleChange} />
                <br />
                <LunchInput value={this.state.lunch} onChange={this.handleChange} />
                <br />
                <button onClick={this.handleSubmit}>Anmelden</button>
            </div>
        );
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
        });
    }

    handleSubmit() {
        console.log(this.state);
    }
}