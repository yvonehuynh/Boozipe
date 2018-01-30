import React from "react";
import Boozecontainer from "./boozecontainer";

export default class BoozeParent extends React.Component {
    render(){
        return (
            <div className="booze-parent-container">
                {this.props.booze.map(res => {
                    return <Boozecontainer search={this.props.search} item={res} booze={this.props.booze} key={res.id} food={this.props.food} load={this.props.load}/>
                }
                )}
            </div>
        )
    }
}