import React ,{Component}from 'react';
import CardList from './CardList';
import {robots} from './robots'
import SearchBox from './SearchBox.js';
import './App.css'
import Scroll from './Scroll'
import ErrorBoundry from './ErrorBoundry'


 
class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ""
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        console.log(event.target.value)
        
    }
   render(){
    const filteredRobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    if(this.state.robots.length ===0){
        return <h1>Loading</h1>
    }else{return (
        <div className='tc'>
            <h1 className='f2'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
           <Scroll>
               <ErrorBoundry> 
               <CardList robots={filteredRobots}/>
               </ErrorBoundry>
               </Scroll>
            
        </div>
        
    );}
    
   }
    
}

export default App