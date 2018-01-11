import React from 'react';

export default class Boozecontainer extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <li className="alcohol-listing">
                    <p>{this.props.item.name}</p>
                    <div><img src={this.props.item.image_thumb_url} alt=""/></div>
                    <p ref={ref => this.category = ref} onClick={this.props.food} className="category">{this.props.item.secondary_category}</p>
                </li>
            </div>
        )
    }
}