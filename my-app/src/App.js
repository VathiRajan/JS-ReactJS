import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: "Vathi",
        age: 25
      },
      {
        name: "Stephen",
        age: 29
      },
      {
        name: "Karthik",
        age: 34
      }
    ],

  }

  switchNameHandler = () => {
    this.setState(
      {
        persons: [
          {
            name: "Mangathaa Daaw",
            age: 25
          },
          {
            name: "Stephen Nolan Daaw",
            age: 29
          },
          {
            name: "Thupaaki Daaw",
            age: 34
          }
        ],
        otherState: "NA"
      }
    )
  }
  render() {
    return (
      <div className="App" >
        <h1>Hello React Developer</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} > Alice Name</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

        <button onClick={this.switchNameHandler}>Switch Name</button>
      </div>
    );
  }
}

export default App;
