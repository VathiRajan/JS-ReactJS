import React from 'react';

const useroutput = (props) => {

    return (<div>
        <p> Thanks for visiting the website</p>
        <p> Wish you Good Luck, {props.username}</p>

    </div>);
}
export default useroutput;