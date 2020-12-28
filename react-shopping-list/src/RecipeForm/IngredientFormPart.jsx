import React from 'react';
import './RecipeForm.css';

export class IngredientFormPart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className="ingredient-form">
                <label>
                    Name: <input type="text" />
                </label>
                <label>Menge: <input type="number" />
                </label>
                <label>
                <select >
                        <option>Stück</option>
                        <option>Gramm</option>
                        <option>Liter</option>
                    </select>
                </label>
        </div>);
    }
}
