import React, { Component } from "react";
import 'tachyons';


class Card extends Component {
    render(){
        return(
            <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <img src={this.props.image} alt="robots" />
                <div className="tc">
                    <h2>{this.props.urName}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
        );
    }
}

export default Card;
