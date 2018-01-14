import React from 'react';
import { Link } from 'react-router-dom';

export default class Boozecontainer extends React.Component {
    render(){
        const item = this.props.item;
        return (
            <div className="alcohol-listing">
                <h3>{item.name}</h3>
                <div>
                    <img src={item.image_thumb_url} alt=""/>
                </div>
                <span 
                    className="category"
                    onClick={this.props.food}>
                    {item.secondary_category}
                </span>
                <button className="booze-select">Select</button>
            </div>
        )
    }
}