import React,{ Component } from "react";
import CardList from "./cardlist";
import SearchBox from "./searchbox"
import { robots } from "./robots";


class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        // console.log(event.target.value);
        this.setState({searchfield: event.target.value})
    }
    render(){
        const filterRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });
        return(
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={ filterRobots }/>
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