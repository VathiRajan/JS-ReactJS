import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class AppClass extends Component {


    //useState always returns exactly two elements
    //first element : current state, an object, whose state needs to be changed
    //second element : is a function which he helps us to update the state 
    state = ({
        persons: [
            {
                id: 0,
                name: "Vathi",
                age: 25
            },
            {
                id: 1,
                name: "Stephen",
                age: 29
            },
            {
                id: 2,
                name: "Karthik",
                age: 34
            }
        ],
        showPerson: false
    });
    //In order to avoid using individual states, use class based component as the 
    //states are not overridden





    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1)

        this.setState({
            persons: persons
        })

    }
    togglePersonHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({
            showPerson: !doesShow
        })
    }


    nameChangeHandler = (event, i) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.i === i
        })
        const person = { ...this.state.persons[personIndex] }
        //alternative ; const person = Object.assign({}, this.state.persons[personIndex])
        person.name = event.target.value
        this.setState(
            {
                persons: person

            }
        )
    };


    assignmentNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        let persons = null;
        if (this.state.showPerson) {
            persons = (
                <div>
                    {
                        this.state.persons.map(
                            (a, i) => {

                                return (
                                    <Person
                                        key={i}
                                        name={a.name}
                                        age={a.age}
                                        id={a.id}
                                        change={(event) => this.nameChangeHandler(event, a.id)}
                                        delete={() => this.deletePersonHandler(i)}> Alias Name
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
                <button onClick={this.togglePersonHandler}>Toggle Person</button>

                {persons}




            </div>
        );
    }
}
export default AppClass;
