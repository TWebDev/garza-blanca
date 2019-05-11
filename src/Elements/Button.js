import React from 'react'

const Button = (props) => {

    let {children, Style} = props

    return(
        <React.Fragment>
            <button className={Style}>
            
                {children}
            </button>
        </React.Fragment>
    )
}

export default Button