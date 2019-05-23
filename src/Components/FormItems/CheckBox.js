import React from 'react';

const CheckBox = (props) => {
  let
  {
    _id,
    Type,

    Value,
    Name,

    children
  } = props;
  return(
    <React.Fragment>
      <div>
        <label className = { Type } for = { _id }>
          <input 
            className='padded'
            type = { Type } 
            value = { Value }
            name = { Name }
          />
          {children}
        </label>
      </div>
    </React.Fragment>
  )
}

export default CheckBox;