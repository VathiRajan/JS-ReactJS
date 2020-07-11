import React from 'react';
import './Person.css'
//In old versions of React's functional component, it didnot support state. 
//But with Hooks, we could have state inside a functioanl component
const person = (props) => {

    return (

        <div className="Person">
            <p onClick={props.click}>I'am a Person and I am {props.name} and I am {props.age} years old working in CSS</p>
            <p >{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}></input>
        </div>)
}
export default person;