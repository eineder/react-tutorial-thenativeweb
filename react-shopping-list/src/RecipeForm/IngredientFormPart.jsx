import React from 'react';
import './RecipeForm.css';

export class IngredientFormPart extends React.Component {
  constructor(props) {
    super(props);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onHandleChange(event) {
    this.props.onChange(event);
  }

  render() {
    return (
      <div className="ingredient-form">
        <label>
          Name:
          <input
            type="text"
            value={this.props.ingredient.name}
            name="name"
            onChange={(e) => this.onHandleChange(e)}
          />
        </label>
        <label>
          Menge:{' '}
          <input
            type="number"
            value={this.props.ingredient.amount}
            name="amount"
            onChange={(e) => this.onHandleChange(e)}
          />
        </label>
        <label>
          <select
            value={this.props.ingredient.unit}
            onChange={(e) => this.onHandleChange(e)}
            name="unit"
          >
            <option>Stück</option>
            <option>Gramm</option>
            <option>Liter</option>
          </select>
        </label>
      </div>
    );
  }
}
