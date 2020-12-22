import React from 'react'

export class LunchInput extends React.Component {

    render() {
        return (
            <div>
                <label>Lunch:
                    <input type="checkbox"
                        name="lunch"
                        checked={this.props.value}
                        onChange={this.props.onChange}
                    />
                </label>
            </div>);
    }
}