import React from 'react';

export class AttendeeList extends React.PureComponent {

    render() {

        const listElements = this.props.attendees.map((item) => {
            return (
                <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.tShirtSize}</td>
                    <td><input type="checkbox" checked={item.lunch}></input></td>
                </tr>);
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>T-Shirt-Größe</th>
                        <th>Bleibt zum Mittagessen</th>
                    </tr>
                </thead>
                <tbody>{listElements}</tbody>
            </table>
        );
    }

} 