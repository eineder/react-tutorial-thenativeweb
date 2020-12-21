import React from 'react'

export class RegisterForm extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            name: ''
        };

    }

    render() {
        return (
            <input type="text"
                value={this.state.name}
                onChange={this.handleChange}
            />
        );
    }

    handleChange(event) {
        console.log(event.target.value);

        this.setState({
            name: event.target.value
        });
    }

}