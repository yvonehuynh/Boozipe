import React from 'react';

export default class Recipecontainer extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const loop=()=>{
            this.props.recipe.ingredients.forEach(res=>{
                console.log(this.props.recipe.ingredients.toString())
            })
        }
        return (
            <div>
                <li>{this.props.recipe.recipeName}</li>
                 <li>{this.props.recipe.ingredients.toString()}</li>
              
                <div>
                    <img src={this.props.recipe.smallImageUrls} alt=""/>
                </div>
            </div>
        )
    }
}