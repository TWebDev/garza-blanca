import React from 'react';

const Radio = (props) => {
  let 
  {
    labelStyle,

    _idOpt1,
    Val1,
    _idOpt2,
    Val2,
    Name,

    children,

    handleRadio
  } = props;
  return (
    <React.Fragment>
      <div className="mc-field-group input-group control field">
        <label className = { labelStyle }>{ children }</label>
        <label for = { _idOpt1 } className = { labelStyle }>
          <input 
            type="radio" 
            value = { Val1 } 
            name = { Name } 
            id = { _idOpt1 } 
            onClick = { handleRadio }
            className = 'padded'
          />
          { Val1 }
        </label>
        <label for = { _idOpt2 } className = { labelStyle }>
          <input 
            type="radio" 
            value = { Val2 } 
            name = { Name } 
            id = { _idOpt2 } 
            onClick = { handleRadio }
            className = 'padded'
          />
          { Val2 }
        </label>
      </div>
    </React.Fragment>
  )
}

export default Radio