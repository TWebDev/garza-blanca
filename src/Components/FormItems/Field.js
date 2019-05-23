import React from 'react';
import Icon from '../../Elements/Icon';

const Field = (props) => {
  let 
  {
    labelCSS, 
    InputCSS, 
    iconCSS, 
    
    _Id, 
    Name, 
    Type, 
    PlaceHolder, 
    
    children, 
    controlIcon,
  
    inputValue,
    inputHandler
  } = props;
  return(
    <React.Fragment>
      <div className='field mc-field-group'>
        <label for = { _Id } className = { labelCSS }>{ children }</label>
        <div className = { controlIcon }>
          <input 
            type = { Type } 
            name = { Name } 
            className = { InputCSS } 
            id = { _Id }
            placeholder = { PlaceHolder }
            value = { inputValue } 
            onChange = { inputHandler }
          />
          <Icon Style = { iconCSS }></Icon>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Field;