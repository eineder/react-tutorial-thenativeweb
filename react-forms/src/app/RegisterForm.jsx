import React from 'react'

export class RegisterForm extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            name: '',
            tShirtSize: 'm-l',
            lunch: true
        };
    }

    render() {
        return (
            <div>
                <label>Name:
                <input type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>Size:
                    <select value={this.state.tShirtSize}
                        name="tShirtSize"
                        onChange={this.handleChange}>
                        <option value="w-s">W-S</option>
                        <option value="w-m">W-M</option>
                        <option value="w-l">W-L</option>
                        <option value="m-s">M-S</option>
                        <option value="m-m">M-M</option>
                        <option value="m-l">M-L</option>
                    </select>
                </label>
                <br />

                <label>Lunch:
                    <input type="checkbox"
                        name="lunch"
                        checked={this.state.lunch}
                        onChange={this.handleChange}
                    />
                </label>
            </div>
        );
    }

    handleChange(event) {
        console.log(event.target.name);

        this.setState({
            [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
        });
    }

}