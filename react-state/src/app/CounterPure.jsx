import React from 'react'

export class CounterPure extends React.PureComponent {


    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = { count: 0 };
    }

    onClick() {
        this.setState(s => {
            return {
                count: s.count + 1
            };
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