import React from 'react'

export class TShirtSizeInput extends React.Component {

    render() {

        return (
            <label>Size:
                <select
                    value={this.props.value}
                    name="tShirtSize"
                    onChange={this.props.onChange}>
                    <option value="w-s">W-S</option>
                    <option value="w-m">W-M</option>
                    <option value="w-l">W-L</option>
                    <option value="m-s">M-S</option>
                    <option value="m-m">M-M</option>
                    <option value="m-l">M-L</option>
                </select>
            </label>
        );

    }

}