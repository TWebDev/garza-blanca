import React from 'react'

const Button = (props) => {

    let {children, Style, clickHandler} = props

    return(
        <React.Fragment>
            <button className={Style} onClick={clickHandler}>
            
                {children}
            </button>
        </React.Fragment>
    )
}

export default Button