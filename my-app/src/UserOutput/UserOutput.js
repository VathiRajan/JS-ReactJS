import React from 'react';
import './UserOutput.css';
const useroutput = (props) => {

    return (<div className="output">
        <p> Thanks for visiting the website</p>
        <p> Wish you Good Luck, {props.username}</p>

    </div>);
}
export default useroutput;