import React from 'react';

export default class Recipecontainer extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <li>{this.props.recipe.recipeName}</li>
            </div>
        )
    }
}