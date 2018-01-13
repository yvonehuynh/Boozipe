import React from 'react';

export default class Recipecontainer extends React.Component {
    render(){
        const recipe = this.props.recipe;
        let recipeIngredients = recipe.ingredients;
        recipeIngredients = recipeIngredients.map((item, index) => <li key={index}>{item}</li>);
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