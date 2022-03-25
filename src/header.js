import React, { Component } from "react";
import "./header.css";
// import logo from './logo.svg';

class Header extends Component {
    render(){
        return (
            <header className="yellow">
                <h1 className="f1 tc"> Welcome to my First React WebApp </h1>
                <p className="f1 tc black">{this.props.greeting}</p>
            </header>
        );
    }
}

export default Header;