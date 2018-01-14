import React from "react";

export default class Header extends React.Component {
    render(){
        return (
            <div className="header">
                <h1 className="animated wobble">Boozipe</h1>
                <p className="main-description">
                <span className="coloured">
                    Booz
                </span>
                e + Rec
                <span className="coloured">
                    ipes
                </span>
                </p>
                <div className="description">
                    <p>Step 1: Choose Your Booze</p>
                    <p>Step 2: Select booze to find your new fav booze recipe</p>
                </div>
            </div>
        )
    }
}