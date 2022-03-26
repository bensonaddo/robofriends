import React, { Component } from "react";
import 'tachyons';

class Card extends Component {
    render(){
        // Define variables to be used for card properties
        const { urName, image, email } = this.props
        return(
            <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <img src={image} alt="robots" />
                <div className="tc">
                    <h2>{urName}</h2>
                    <p>{email}</p>
                </div>
            </div>
        );
    }
}

export default Card;
