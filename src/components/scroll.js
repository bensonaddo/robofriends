import React from "react";

const Scroll = (props) => {
    // Use props.children to render Items from another element
    // return props.children;
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;