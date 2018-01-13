import React from 'react';

export default class Recipecontainer extends React.Component {
    render(){
        const recipe = this.props.recipe;
        const recipeIngredients = recipe.ingredients.toString();
        return (
            <div>
                <li>{recipe.recipeName}</li>
                <ul>{recipeIngredients}</ul>
              
                <div>
                    <img src={recipe.smallImageUrls} alt=""/>
                </div>
            </div>
        )
    }
}