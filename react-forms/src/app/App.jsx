import React from 'react'
import { RegisterForm } from './RegisterForm'


export class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hier kommt ein Anmeldeformular:</h1>
                <RegisterForm />
            </div>
        );
    }
}

