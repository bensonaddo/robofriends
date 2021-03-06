import React from "react";
import "tachyons";
const Card = ({id,name,email,website}) => {
    return(
        <div className="bg-light-green dib br3 pa5 ma3 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="RobotFriends"/>
            <div className="tc">
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{website}</p>
            </div>
        </div>
    );
}

export default Card;