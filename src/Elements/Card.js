import React from 'react';

const Card = (props) => {

    let { children, Style } = props;

    return(
        <React.Fragment>
            <div className={Style}>

                {children}
            </div>
        </React.Fragment>
    )
}

export default Card;