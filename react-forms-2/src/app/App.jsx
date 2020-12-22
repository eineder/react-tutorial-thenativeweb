import React from 'react'
import { RegisterForm } from './RegisterForm'


export class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Anmeldung zum React-Workshop:</h1>
                <RegisterForm />
            </div>
        );
    }
}

