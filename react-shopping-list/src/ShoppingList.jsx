import React, { Component } from 'react';

export class ShoppingList extends Component {

    render() {
        const content = this.props.ingredients.map((item, index) => {
            const key = `li-${index}`;
            return (<li key={key}>{item.name}: {item.amount} {item.unit}</li>);
        });

        return (<React.Fragment>
                    <div>Zutaten:</div>
                    <ul>{content}</ul>
                </React.Fragment>);
    }

}
