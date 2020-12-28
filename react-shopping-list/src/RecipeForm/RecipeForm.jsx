import React from 'react';
import { IngredientFormPart } from './IngredientFormPart';

const createEmptyIngredient = () => {
    return {
        name: '',
        amount: undefined,
        unit: 'Stück'
    };
};


const emptyRecipe = {
    name: '',
    ingredients: [createEmptyIngredient()]
};

export class RecipeForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = emptyRecipe;
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddIngredientClick = this.handleAddIngredientClick.bind(this);
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleAddIngredientClick() {
        const ingredients = this.state.ingredients;
        this.setState({
            ingredients: [...ingredients, createEmptyIngredient()]
        });
    }

    render() {

        const ingredientsContent = this.state.ingredients.map(item => <IngredientFormPart key={item.name} />);

        return (
            <form>
                <label>
                    Name des Rezepts:
                    <input type="text"
                        value={this.state.name}
                        onChange={this.handleNameChange} />
                </label>
                <label>
                    Zutaten:
                    {ingredientsContent}
                </label>
                <article>
                    <button type="button" onClick={this.handleAddIngredientClick}>Zutat hinzufügen</button>
                </article>
                <button type="button">Speichern</button>

            </form>
        );
    }

}