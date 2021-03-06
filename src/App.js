// create your App component here
import React, {Component} from 'react' 

class App extends Component { 

   state = { 
        peopleInSpace: [] 
    } 

    render(){
        return ( 
            <div>
                {this.state.peopleInSpace.map(person => <li>{person.name}</li>)}
            </div>      
        )
    } 

    componentDidMount(){ 
        fetch("http://api.open-notify.org/astros.json") 
          .then(res => res.json()) 
          .then(data => { //console.log(data)
            this.setState({
                peopleInSpace: data.people
            })
        })
    }

} 
export default App; 
