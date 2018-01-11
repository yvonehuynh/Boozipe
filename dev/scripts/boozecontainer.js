import React from 'react';

export default class Boozecontainer extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                
                <li>{this.props.item.name}</li>
            </div>
        )
    }
}