import React from 'react';

const Select = (props) => {
  let 
  {
    labelStyle,

    children
  } = props;
  return(
    <React.Fragment>
      <div className="field mc-field-group">
          <label className={labelStyle}>{ children }</label>
      </div>
    </React.Fragment>
  )
}

export default Select