import React from 'react';
import Loading from "./loading";

export default class Recipecontainer extends React.Component {
    render(){
        const recipe = this.props.recipe;
        let recipeIngredients = recipe.ingredients;
        recipeIngredients = recipeIngredients.map((item, index) => <li key={index}>{item}</li>);

        if (this.props.load === true) {
            return <Loading />
        }
        return (
            <div className="recipe-container">
                <h3 className="recipe-name" ref={(ref => this.name = ref)}>{recipe.recipeName}</h3>
                <div className="food-img">
                    <img src={recipe.smallImageUrls} alt=""/>
                </div>
                <h3>ingredients:</h3>
                    <ul className="ingredient-list" ref={(ref => this.list = ref)}>{recipeIngredients}</ul>
            </div>
        )
    }
}