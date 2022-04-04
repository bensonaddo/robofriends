import React from "react";
import Card from "./card";


const CardList = ({ robots }) => {
    return (
        <div>
            {
            robots.map((user,i) => {
                return (
                    <Card 
                        key={i} 
                        id={robots[i].id} 
                        email={robots[i].email} 
                        name={robots[i].name}
                        website={robots[i].website}
                    />
                    )
                })
            }
        </div>
    );
    
}

export default CardList;