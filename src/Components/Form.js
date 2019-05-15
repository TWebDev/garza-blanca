import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

import Icon from '../Elements/Icon'
import Button from '../Elements/Button'

const Form = (props) => {

  let { 
    formFieldSet,

    changeRadio,
    nameVal,
    lastVal,
    phoneVal,
    mailVal,

    handleOptionChange,
    updateFormName, 
    updateFormLast, 
    updateFormPhone,
    updateFormEmail,
    
  } 
    = props

  const validateForm = () => {

    if ( nameVal && lastVal && phoneVal && mailVal && changeRadio ) {

      return ('button is-secondary');

    } else {

      return ('button is-static');
      
    }
  }

  const labelStyle = 'label has-text-white'
  const controlIcon = 'control has-icons-left'

  return (
    <React.Fragment>
      <form action='https://formsapi.jabwn.com/key/rBovDyngk2LNyHUDpAzt' method='POST'>
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="field">
                <label className={labelStyle}>Please enter your name</label>
                <div className={controlIcon}>
                  <input className={nameVal ? ("input is-success") : ("input is-danger")} type="text" placeholder="Your name" name='name'
                    value={formFieldSet.nameValue || ''}
                    onChange={(e) => updateFormName(e)}
                  />
                  <Icon Style='fas fa-user'></Icon>
                </div>
              </div>
            </div>
            <div className="level-item">
              <div className="field">
                <label className={labelStyle}>Last Name</label>
                <div className={controlIcon}>
                  <input className={lastVal ? ("input is-success") : ("input is-danger")} type="text" placeholder="Your last name" name='last_name'
                    value={formFieldSet.lastValue || ''}
                    onChange={(e) => updateFormLast(e)}
                  />
                  <Icon Style='fas fa-user'></Icon>
                </div>
              </div>
            </div>
          </div>
          <div className="level-item is-flex">
            <div className="level-item padded-left">
              <div>
                <label className={labelStyle}>When are you planning to invest?</label>
              </div>
            </div>
            <div className="level">
              <div className="select">
               <select className='select' name='En cuanto tiempo planea invertir'>
                <option value='0 - 6 Months' name='En cuanto tiempo planea invertir'>0 - 6 Months</option>
                <option value='6 - 12 Months' name='En cuanto tiempo planea invertir'>6 - 12 Months</option>
                <option value='More than a year' name='En cuanto tiempo planea invertir'>More than a year</option>
               </select>
              </div>
            </div>
          </div>
        </div>
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="field">
                <label className={labelStyle}>Phone Number</label>
                <div className={controlIcon}>
                  <input className={phoneVal ? ("input is-success") : ("input is-danger")} type="text" placeholder="1 123 456 7890" name='phone_number'
                    value={formFieldSet.phoneValue || ''}
                    onChange={(e) => updateFormPhone(e)}
                  />
                  <Icon Style='fas fa-phone'></Icon>
                </div>
              </div>
            </div>
            <div className="level-item">
              <div className="field">
                <label className={labelStyle}>E-mail</label>
                <div className={controlIcon}>
                  <input className={mailVal ? ("input is-success") : ("input is-danger")} type="email" placeholder='your_email@mailme.com' name='email'
                    value={formFieldSet.emailValue || ''}
                    onChange={(e) => updateFormEmail (e)}   
                  />
                  <Icon Style='fas fa-at'></Icon>
                </div>
              </div>
            </div>
          </div>
          <div className="level-item is-flex">
            <div className="level-item padded-left">
              <div>
                <label className={labelStyle}>What is your budget?</label>
              </div>
            </div>
            <div className="level-item">
              <div className="select">
                <select className='select' name='Presupuesto'>
                  <option value='Up to $500,000' name='Presupuesto'>Up to $500,000</option>
                  <option value='$500,000 to $1 Million' name='Presupuesto'>$500,000 to $1 Million</option>
                  <option value='More than $1 Million' name='Presupuesto'>More than $1 Million</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="level">
          <div className="level-left">
            <div>
              <label className={labelStyle}>Have you ever been in Puerto Vallarta?</label>
            </div>
          </div>
          <div className="level-item">
            <div className='has-text-white is-flex'>
              <div className="label has-text-white padded-left is-marginless">
                <label className="radio">
                  <input className='padded' type="radio" name="been_inPV"
                    value={changeRadio}
                    onChange={handleOptionChange}
                  />
                  Yes
                </label>
              </div>
              <div className="label has-text-white padded-left">
                <label className="radio">
                  <input className='padded' type="radio" name="been_inPV"
                    value={changeRadio}
                    onChange={handleOptionChange}
                  />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="level">
          <div className="level-left">
            <div className="is-flex field">
              <div>
                <label className={labelStyle}>Do you know another destinations in Mexico? Which Ones?</label>
              </div>
            </div>
          </div>
          <div className="level-item">
            <div className="is-flex field has-text-white label">
              <div>
                <label className="checkbox padded">
                  <input className='padded' type="checkbox" name='Fue a Cancun'/>
                  Cancun
                </label>
              </div>
              <div>
                <label className="checkbox padded">
                  <input className='padded' type="checkbox" name='Fue a Los Cabos'/>
                  Los Cabos
                </label>
              </div>
              <div>
                <label className="checkbox padded">
                  <input className='padded' type="checkbox" name='Fue a Loreto'/>
                  Loreto
                </label>
              </div>
            </div>
          </div>
        </div>
        <hr className="is-divider"></hr>
        <div className="level">
          <div className="level-item">
            <footer className="modal-card-footis-radiusless">
              <div>
                <Button type='submit' value='Send' Style={validateForm()}>Submit</Button>
              </div>
            </footer>
          </div>
        </div>
      </form>
    </React.Fragment>
  )
}

const mapStateToProps = ({ landingActions }) => {
  const { 
    modalActive,
    changeRadio,
    nameVal,
    lastVal,
    phoneVal,
    mailVal,
    formFieldSet } 
      = landingActions
  return { 
    modalActive,
    changeRadio,
    nameVal, 
    lastVal,
    phoneVal,
    mailVal,
    formFieldSet }
}

export default connect(mapStateToProps, actions)(Form)