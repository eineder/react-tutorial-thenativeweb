import "./App.css";
import React from "react";
import { ShoppingList } from "./ShoppingList";
import recipesData from "./mockRecipes.json";
import { sumRecipes } from "./recipeStateService";
import { RecipeForm } from "./RecipeForm/RecipeForm";

export class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        Shopping List App
        <ShoppingList ingredients={sumRecipes(recipesData.recipes)} />
        <RecipeForm />
      </React.Fragment>
    );
  }
}
