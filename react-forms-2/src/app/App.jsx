import React from 'react';
import { RegisterForm } from './RegisterForm';
import { AttendeeList } from './AttendeeList';
import { Tab } from './Tab';


const mockAttendees = [
    {
        name: 'Selina Kyle',
        tShirtSize: 'W-M',
        lunch: true
    },
    {
        name: 'Bruce Wayne',
        tShirtSize: 'M-L',
        lunch: true
    },
    {
        name: 'Diana Prince',
        tShirtSize: 'W-S',
        lunch: false
    }
];

export class App extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            attendees: mockAttendees
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(newAttendee) {
        this.setState(prevState => {
            return {
                ...prevState,
                attendees: [
                    ...prevState.attendees,
                    newAttendee
                ]
            };
        });
    }

    render() {
        return (
            <div>
                <Tab headline="Registrierung"><RegisterForm onSubmit={this.handleSubmit} /></Tab>
                <Tab headline="Teilnehmendenliste" ><AttendeeList attendees={this.state.attendees} /></Tab>
            </div>
        );
    }
}

