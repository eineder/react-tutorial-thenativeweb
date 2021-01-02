import React from 'react';
import { IngredientFormPart } from './IngredientFormPart';

const createEmptyIngredient = () => {
  return {
    name: '',
    amount: 0,
    unit: 'Stück',
  };
};

const emptyRecipe = {
  name: '',
  ingredients: [createEmptyIngredient()],
};

export class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = emptyRecipe;
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddIngredientClick = this.handleAddIngredientClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleSaveClick() {
    const finishedIngredients = this.state.ingredients.map((item) => ({
      ...item,
      amount: Number.parseFloat(item.amount),
    }));

    this.props.onSave({
      name: this.state.name,
      ingredients: finishedIngredients,
    });
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleAddIngredientClick() {
    const ingredients = this.state.ingredients;
    this.setState({
      ingredients: [...ingredients, createEmptyIngredient()],
    });
    this.onHandleIngredientChange = this.onHandleIngredientChange.bind(this);
  }

  onHandleIngredientChange(event, ingredientName) {
    const { value, name } = event.target;

    this.setState((currentState) => ({
      ...currentState,
      ingredients: currentState.ingredients.map((ingredient) => {
        if (ingredient.name === ingredientName) {
          return { ...ingredient, [name]: value };
        }

        return ingredient;
      }),
    }));
  }

  render() {
    const ingredientsContent = this.state.ingredients.map((item, index) => (
      <IngredientFormPart
        key={`ingredient-form-part-${index}`}
        ingredient={item}
        onChange={(e) => this.onHandleIngredientChange(e, item.name)}
      />
    ));

    return (
      <form>
        <label>
          Name des Rezepts:
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        <label>
          Zutaten:
          {ingredientsContent}
        </label>
        <article>
          <button type="button" onClick={this.handleAddIngredientClick}>
            Zutat hinzufügen
          </button>
        </article>
        <button type="button" onClick={this.handleSaveClick}>
          Speichern
        </button>
      </form>
    );
  }
}
