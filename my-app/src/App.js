import React, { useState } from 'react';

import './App.css';
import Person from './Person/Person';

const App = props => {



  //useState always returns exactly two elements
  //first element : current state, an object, whose state needs to be changed
  //second element : is a function which he helps us to update the state 
  const [personState, setPersonState] = useState({
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

  });
  const [otherState, setOtherState] = useState("Other state")

  const switchNameHandler = (newName) => {
    console.log(personState, otherState)
    //When using setState you have to manually override all. 
    //Instead we have multiple individual states so other states are untouched
    //Eg -  const [otherState, setOtherState] = useState("Other state")
    setPersonState(
      {
        persons: [
          {
            name: newName,
            age: 25
          },
          {
            name: " Stephen Nolan Daaw ",
            age: 29
          },
          {
            name: " Thupaaki Daaw ",
            age: 34
          }
        ],

      }
    )
  }

  const nameChangeHandler = (event) => {
    setPersonState(
      {
        persons: [
          {
            name: "Man",
            age: 25
          },
          {
            name: event.target.value,
            age: 29
          },
          {
            name: " Thupaaki Daaw ",
            age: 34
          }
        ],

      }
    )
  };

  return (
    <div className="App" >
      <h1>Hello React Developer</h1>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
        click={switchNameHandler.bind(this, "Simran")}> Alice Name</Person>
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
        change={nameChangeHandler} />
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
        click={switchNameHandler.bind(this, "Zira")} />

      <button onClick={() => switchNameHandler("ZIra **")}>Corrupt Name</button>
    </div>
  );
}

export default App;
