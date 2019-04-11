import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name: 'A', age: 1},
      {name: 'B', age: 2, aditional: 'Aditional information...'},
      {name: 'C', age: 3},
    ],
    personsIndex: 0
  }

  switchNameHandler = () => {
    let personsIndex = this.state.personsIndex;
    if (++personsIndex >= this.state.persons.length)
      personsIndex = 0;
    this.setState({
      personsIndex: personsIndex
    });
  }

  changeNameHandler = (event) => {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <input type="text" onChange={this.changeNameHandler}/>
        <Person name={this.state.persons[this.state.personsIndex].name} 
                age={this.state.persons[this.state.personsIndex].age}
                click={this.switchNameHandler}>
                {this.state.persons[this.state.personsIndex].aditional}
        </Person>
      </div>
    );
  }
}

export default App;
