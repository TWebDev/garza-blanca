import React from 'react';

const DropDown = (props) => {
  let
  {
    Name,
    _id,

    val1,
    val2,
    val3,

    labelStyle,

    children
  } = props;
  return(
    <React.Fragment>
      <div className="field mc-field-group">
        <label className={labelStyle} for = { _id }>{ children }</label>
        <div className="select">
          <select className='select' name = { Name } id={ _id }>
            <option value={val1}>{val1}</option>
            <option value={val2}>{val2}</option>
            <option value={val3}>{val3}</option>
          </select>
        </div>
      </div>
    </React.Fragment>
  )
}

export default DropDown;