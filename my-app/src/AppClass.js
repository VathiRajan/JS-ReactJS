import React, { Component } from 'react';
import styled from 'styled-components';
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
            return p.id === i
        })
        const person = { ...this.state.persons[personIndex] }
        //alternative ; const person = Object.assign({}, this.state.persons[personIndex])
        person.name = event.target.value
        const persons = [...this.state.persons]
        persons[personIndex] = person

        this.setState(
            {
                persons: persons
            }
        )
    };


    assignmentNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        const style = {
            color: "white",
            backgroundColor: "green",
            cursor: "pointer",
            padding: "10px",
            border: "2px solid red",
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }

        }
        const classes = []
        if (this.state.persons.length <= 2) {
            classes.push('red')
        }
        if (this.state.persons.length <= 1) {

            classes.push(' bold')

        }

        let persons = null;
        if (this.state.showPerson) {
            style.backgroundColor = "red"
            style.border = "3px solid green"
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            }
            persons = (
                <div>
                    {
                        this.state.persons.map(
                            (a, i) => {

                                return (
                                    <Person
                                        key={i}
                                        age={a.age}
                                        id={a.id}
                                        changed={(event) => this.nameChangeHandler(event, a.id)}
                                        delete={() => this.deletePersonHandler(i)}
                                        name={a.name}> Alias Name
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
                <p className={classes}> Knowledge is Power. Golang + React</p>
                <button style={style} onClick={this.togglePersonHandler}>Toggle Person</button>
                {persons}
            </div>

        );
    }
}
export default AppClass;
