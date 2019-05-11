import React from 'react';

const Input = (props) => {

    let { inputType, holder } = props;
    return(
        <React.Fragment>
            <input className="input" type={inputType} placeholder={holder}></input>
        </React.Fragment>
    )
}

export default Input;