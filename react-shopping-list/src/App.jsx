import './App.css';
import React from 'react';
import { ShoppingList } from './ShoppingList';
import recipesData from './mockRecipes.json';
import { sumRecipes } from './recipeStateService';
import { RecipeForm } from './RecipeForm/RecipeForm';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recipes: recipesData.recipes };
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(recipe) {
    this.setState((currentState) => ({
      ...currentState,
      recipes: [...currentState.recipes, recipe],
    }));
  }

  render() {
    return (
      <React.Fragment>
        Shopping List App
        <ShoppingList ingredients={sumRecipes(this.state.recipes)} />
        <RecipeForm onSave={this.handleSave} />
      </React.Fragment>
    );
  }
}
