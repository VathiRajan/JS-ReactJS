import React, { Component } from 'react';

const person = (props) => {

    return (

        <div>
            <p>I'am a Person and I am {props.name} and I am {props.age} years old working in CSS</p>
            <p>{props.children}</p>
        </div>)
}
export default person;