import React from 'react';

export class NumericInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const regex = /^\d*\.?\d*$/;
    if (regex.test(e.target.value)) {
      console.log('regex test');
      this.props.onChange(e);
    }
  }

  render() {
    return (
      <input
        type="text"
        name={this.props.name}
        value={this.props.value}
        onChange={this.handleChange}
      />
    );
  }
}
