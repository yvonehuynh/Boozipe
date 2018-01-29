import React from "react";

export default class Loading extends React.Component {
    render(){
        return (
            <div className="loader">
                <div className="loading">
                    <div className="letter">
                        <div>L</div>
                        <div className="back">L</div>
                    </div>
                    <div className="letter">
                        <div>o</div>
                        <div className="back">o</div>
                    </div>
                    <div className="letter">
                        <div>a</div>
                        <div className="back">a</div>
                    </div>
                    <div className="letter">
                        <div>d</div>
                        <div className="back">d</div>
                    </div>
                    <div className="letter">
                        <div>i</div>
                        <div className="back">i</div>
                    </div>
                    <div className="letter">
                        <div>n</div>
                        <div className="back">n</div>
                    </div>
                    <div className="letter">
                        <div>g</div>
                        <div className="back">g</div>
                    </div>
                    <div className="letter">
                        <div>.</div>
                        <div className="back">.</div>
                    </div>
                    <div className="letter">
                        <div>.</div>
                        <div className="back">.</div>
                    </div>
                    <div className="letter">
                        <div>.</div>
                        <div className="back">.</div>
                    </div>
                </div>
            </div>
        )
    }
}

// loading screen code taken courtesy of https://codepen.io/AMKohn/pen/LzCrk?page=7