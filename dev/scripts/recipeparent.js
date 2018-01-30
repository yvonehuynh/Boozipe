import React from "react";;
import Recipecontainer from "./recipecontainer";

export default class RecipeParent extends React.Component {
    render(){
        return (
            <div className="recipe-parent-container">
                {this.props.recipes.map(res => {
                    return <Recipecontainer recipe={res} key={res.id} food={this.props.searchFood} save={this.props.save} recipeName={this.props.recipeName} load={this.props.loading} />
                })}
            </div>
        )
    }
}