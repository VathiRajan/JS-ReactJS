import React from 'react';
import styled from 'styled-components';

//import './Person.css'
//In old versions of React's functional component, it didnot support state. 
//But with Hooks, we could have state inside a functioanl component

const Styleddiv = styled.div`width : 60%;
margin:16px auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 15px;
text-align:center;
@media(min-width : 500px)': {
    width: '450px'
}`

const person = (props) => {

    return (

        <Styleddiv>
            < p onClick={props.delete} > I'am a Person and I am {props.name} and I am {props.age} years old working in CSS</p>
            < p > {props.children}</p >
            <input type="text" onChange={props.changed} value={props.name} />

            <button onClick={props.delete}>Delete</button>
        </Styleddiv>

    )
}
export default person;