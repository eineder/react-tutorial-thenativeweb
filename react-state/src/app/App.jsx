import React from 'react'
import { Counter } from './Counter'
import { CounterContainer } from './CounterContainer'
import { CounterPure } from './CounterPure'
import { ResetCounter } from './ResetCounter'


export class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Counter</h1>
                <Counter />
                <hr />
                <h1>Counter Pure</h1>
                <CounterPure />
                <hr />
                <h1>Counter Container</h1>
                <CounterContainer />
            </div>
        );
    }
}

