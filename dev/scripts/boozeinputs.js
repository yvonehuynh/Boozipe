import React from 'react';
import { Link } from 'react-router-dom';
import Loading from "./loading";

export default class Boozeinputs extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.load === true) {
            return <Loading />
        }
        return (
            <div className="input-container">
                <form action="" onSubmit={this.props.search}>
                    <label htmlFor="booze-search" className="visuallyhidden">Search Your Alcohol</label>
                    <input type="text" name="booze-search" placeholder="search your alcohol" id="booze-input" />
                    <button>Submit</button>
                </form>
                <div className="booze-icon">
                    <i className="fa fa-glass animated wobble" aria-hidden="true"></i>
                    <i className="fa fa-cutlery animated wobble" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}