import React from 'react';

export class AttendeeList extends React.PureComponent {

    render() {
        
        const listElements = this.props.attendees.map((item) => { 
            return <li key={item.name}>{item.name}</li>; 
        });

        return (
            <ul>{listElements}</ul>
        );
    }

} 