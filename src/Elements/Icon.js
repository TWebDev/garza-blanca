import React from 'react';

const Icon = (props) => {

    let { style } = props
    return (
        <React.Fragment>
            <span className="icon">
                <i className={style}></i>
            </span>
        </React.Fragment>
    )
}

export default Icon;