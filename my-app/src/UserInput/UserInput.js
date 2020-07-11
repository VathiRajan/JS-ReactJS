import React from 'react';
import './UserInput.css';

const userinput = (props) => {
    return (
        <div className="user-input-text">
            <input type="text" onChange={props.changeName} value={props.name}></input>
        </div>

    );
}
export default userinput;