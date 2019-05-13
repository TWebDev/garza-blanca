import React from 'react';

const Icon = (props) => {

    let { Style } = props
    return (
        <React.Fragment>
            <span className="icon is-small is-left">
                <i className={Style}></i>
            </span>
        </React.Fragment>
    )
}

export default Icon;