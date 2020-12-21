import React from 'react'

export class Counter extends React.Component {


    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = { count: 0 };
    }

    onClick() {
        this.setState(s => {
            s.count++;
            return s;
        });
    }

    render() {
        return (
            <div>
                <div>Button {this.state.count} times clicked.</div>
                <button onClick={this.onClick}>Click to increment!</button>
            </div>);
    }
}