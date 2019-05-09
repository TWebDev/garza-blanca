import React from 'react'

const Button = (props) => {

    let {children} = props

    return(
        <React.Fragment>
            <a className={"button is-primary"}>{children}</a>
        </React.Fragment>
    )
}

export default Button