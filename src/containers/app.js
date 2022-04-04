import React,{ Component } from "react";
import CardList from "../components/cardlist";
import SearchBox from "../components/searchbox";
import Scroll from "../components/scroll";
import ErrorBoundry from "../components/errorboundry";
import "./app.css";

// Smart Components with state
class App extends Component{
    constructor(){
        super();
        this.state = {
            //robots: robots,// Empty components
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users}))
    }
    onSearchChange = (event) => {
        // console.log(event.target.value);
        this.setState({searchfield: event.target.value})
    }
    render(){
        const {robots,searchfield} = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        return !robots.length ?
            (<h1 className="tl">Loading...!</h1>) :
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={ filterRobots }/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}

// const App = () => {
//     return(
//         <div className="tc">
//             <h1>RoboFriends</h1>
//             <SearchBox />
//             <CardList robots={ robots }/>
//         </div>
//     );
// }

export default App;