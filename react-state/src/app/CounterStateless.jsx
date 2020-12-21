import React from 'react'

export class CounterStateless extends React.PureComponent {

    render() {
        return (
            <div>
                <div>Button {this.props.counterValue} times clicked.</div>
                <button onClick={() => this.props.onClick()}>Click to increment!</button>
            </div>);
    }

}