import React from 'react';
import { Link } from 'react-router-dom';

export default class Boozecontainer extends React.Component {
    render(){
        const item = this.props.item;
        return (
            <div>
                <li className="alcohol-listing">
                    <p>{item.name}</p>
                    <div>
                        <img src={item.image_thumb_url} alt=""/>
                    </div>
                    <p 
                    onClick={this.props.food} 
                    className="category">
                    {item.secondary_category}
                    </p>
                </li>
            </div>
        )
    }
}