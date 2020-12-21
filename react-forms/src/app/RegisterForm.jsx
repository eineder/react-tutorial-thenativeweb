import React from 'react'

export class RegisterForm extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleTShirtSizeChange = this.handleTShirtSizeChange.bind(this);
        this.handleLunchChange = this.handleLunchChange.bind(this);
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
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>Size:
                    <select value={this.state.tShirtSize}
                        onChange={this.handleTShirtSizeChange}>
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
                        checked={this.state.lunch}
                        onChange={this.handleLunchChange}
                    />
                </label>
            </div>
        );
    }

    handleChange(event) {
        console.log(event.target.value);

        this.setState({
            name: event.target.value
        });
    }

    handleTShirtSizeChange(event) {
        this.setState({
            tShirtSize: event.target.value
        });
    }

    handleLunchChange(event) {
        this.setState({
            lunch: event.target.checked
        });
    }
}