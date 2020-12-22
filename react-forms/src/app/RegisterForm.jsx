import React from 'react'
import { NameInput } from './NameInput'
import { TShirtSizeInput } from './TShirtSizeInput'
import { LunchInput } from './LunchInput'


const emptyForm = {
    name: '',
    tShirtSize: 'm-l',
    lunch: true,
    formSubmitted: false
};

export class RegisterForm extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleResetForm = this.handleResetForm.bind(this);
        this.state = emptyForm;
    }

    render() {
        if (!this.state.formSubmitted) {
            return (
                <div>
                    <NameInput value={this.state.name} onChange={this.handleChange} />
                    <TShirtSizeInput value={this.state.tShirtSize} onChange={this.handleChange} />
                    <LunchInput value={this.state.lunch} onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>Anmelden</button>
                </div>
            );
        }

        return (
            <div>
                <h2>Du hast dich erfolgreich angemeldet!</h2>
                <button onClick={this.handleResetForm}>Weitere Teilnehmer anmelden</button>
            </div>
        );
    }

    handleChange(event) {
        const theTarget = event.target;
        this.setState((state) => {
            return { [theTarget.name]: theTarget.type === 'checkbox' ? theTarget.checked : theTarget.value };
        });
    }

    handleResetForm() {
        this.setState(emptyForm);
    }

    handleSubmit() {
        this.setState((state) => { return { formSubmitted: true }; });
    }
}