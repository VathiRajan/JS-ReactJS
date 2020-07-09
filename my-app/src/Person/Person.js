import React, { Component } from 'react';
//In old versions of React's functional component, it didnot support state. 
//But with Hooks, we could have state inside a functioanl component
const person = (props) => {

    return (

        <div>
            <p>I'am a Person and I am {props.name} and I am {props.age} years old working in CSS</p>
            <p>{props.children}</p>
        </div>)
}
export default person;