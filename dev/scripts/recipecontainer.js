import React from 'react';

export default class Recipecontainer extends React.Component {
    
    render(){
        const recipe = this.props.recipe;
        let recipeIngredients = recipe.ingredients;
        recipeIngredients = recipeIngredients.map((item, index) => <p key={index}>{item}</p>);
        return (
                <div className="recipe-container">
           

                <div className="food-img">
                    <img src={recipe.smallImageUrls} alt=""/>
                </div>
                <div className="contain" onClick={(e) => {
                    console.log(this.name.textContent, this.list.textContent.split(" "))
                }}>
                    <h3 className="recipe-name" ref={(ref => this.name = ref)}>{recipe.recipeName}</h3>
                    <div className="ingredient-list" ref={(ref => this.list = ref)}>{recipeIngredients}</div>
                </div>
            </div>
        )
    }
}