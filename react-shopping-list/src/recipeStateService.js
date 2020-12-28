export function sumRecipes(recipes) {

    return recipes.reduce((list, recipe) => {
        return [...list, ...recipe.ingredients];
    }, []).reduce((list, ingredient) => {
        const existingIngredient = list.find(item => item.name === ingredient.name);

        if (existingIngredient) {
            const index = list.indexOf(existingIngredient);
            if (index > -1) {
                list.splice(index, 1);
            }

            return [...list, { ...ingredient, amount: existingIngredient.amount + ingredient.amount }];
        } else {
            return [...list, ingredient];
        }

    }, []);
}