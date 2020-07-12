import React, { useState } from 'react';

import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

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
  //In order to avoid using individual states, use class based component as the 
  //states are not overridden
  const [showPersonObj, setShowPersonObj] = useState({
    showPerson: false
  })

  const [otherState, setOtherState] = useState("Other state")

  const switchNameHandler = (newName) => {
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

  const deletePersonHandler = (personIndex) => {
    const persons = personState.persons;
    persons.slice(personIndex, 1)
    console.log("deleting " + persons)

    setPersonState({
      persons: persons
    })

  }
  const togglePersonHandler = () => {
    const doesShow = showPersonObj.showPerson;
    setShowPersonObj({
      showPerson: !doesShow
    })
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

  const [nameState, setnameState] = useState({
    name: "Max"
  });

  const assignmentNameChange = (event) => {
    setnameState({
      name: event.target.value
    })
  }
  let persons = null;
  if (showPersonObj.showPerson) {
    persons = (
      <div>
        {
          personState.persons.map(
            (a, i) => {

              return (
                <Person
                  name={a.name}
                  age={a.age}
                  delete={() => deletePersonHandler(i)}> Alias Name
                </Person>)
            }
          )
        }

      </div>
    );

  }

  //
  return (

    <div className="App" >
      <h1>Hello React Developer</h1>
      <button onClick={togglePersonHandler}>Toggle Person</button>

      {persons}


      <UserInput changeName={assignmentNameChange} name={nameState.name}></UserInput>
      <UserOutput username={nameState.name}></UserOutput>
      <UserOutput username="Vathirajan"></UserOutput>
      <UserOutput username="Vathirajan"></UserOutput>

    </div>
  );
}

export default App;
