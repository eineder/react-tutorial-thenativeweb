import React from 'react'
import { CounterStateless } from './CounterStateless'
import { ResetCounter } from './ResetCounter'

export class CounterContainer extends React.PureComponent {


    constructor(props) {
        super(props);
        this.state = { counterValue: 0 };
    }

    onIncrement() {
        this.setState(s => {
            return {
                counterValue: s.counterValue + 1
            };
        });
    }

    onReset() {
        this.setState(s => {
            return {
                counterValue: 0
            }
        });
    }

    render() {
        return (
            <div>
                <CounterStateless counterValue={this.state.counterValue} onClick={() => this.onIncrement()}>Click to increment!</CounterStateless>
                <ResetCounter counterValue={this.state.counterValue} onClick={() => this.onReset()} />
            </div>);
    }
}