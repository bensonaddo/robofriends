import React, { Component } from "react";

class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    // This catches anything that errors out. This would run the life cycle hook
    componentDidCatch(error, info){
        this.setState({hasError: true}) // This would run if the constructor props has error which would then set this to true
    }

    render(){
        if (this.state.hasError){
            return <h1>Oooops. That is not good</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundry;