import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

import Card from '../Elements/Card'
import Icon from '../Elements/Icon'
import Button from '../Elements/Button'

const Modal = (props) => {
  
  let { 
    formFieldSet,

    toggleClass, 
    toggleModal,
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
      <div className={toggleClass}>
        <div className="modal-background" onClick={toggleModal}></div>
        <div className="modal-close" onClick={toggleModal}></div>
        <div className="modal-content">
          <form action='https://formsapi.jabwn.com/key/rBovDyngk2LNyHUDpAzt' method='POST'>
            <Card Style='box is-radiusless is-gold'>
              <section className="modal-card-body is-darken-gold">
                <div className="field">
                  <label className={labelStyle}>Name</label>
                  <div className={controlIcon}>
                    <input className={nameVal ? ("input is-success") : ("input is-danger")} type="text" placeholder="Your name" name='name'
                      value={formFieldSet.nameValue || ''}
                      onChange={(e) => updateFormName(e)}
                    />
                    <Icon Style='fas fa-user'></Icon>
                  </div>
                </div>
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
                <hr className="is-divider"></hr>
                <div className="control has-text-white is-flex is-size-5 field">
                  <div>
                    <label className={labelStyle}>Have you ever been in Puerto Vallarta?</label>
                  </div>
                  <div>
                    <div className="label has-text-white">
                      <label className="radio">
                        <input className='padded' type="radio" name="been_inPV"
                          value={changeRadio}
                          onChange={handleOptionChange}
                        />
                        Yes
                      </label>
                    </div>
                    <div className="label has-text-white">
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
                <div className="is-flex field">
                  <div>
                    <label className={labelStyle}>How far from now are you planning to invest?</label>
                  </div>
                  <div className="select">
                   <select className='select' name='En cuanto tiempo planea invertir'>
                    <option value='3 months' name='Planea invertir en 3 meses'>3 Months</option>
                    <option value='6 months' name='Planea invertir en 6 meses'>6 Months</option>
                    <option value='1 year' name='Planea invertir en 1 año'>1 Year</option>
                   </select>
                  </div>
                </div>
                <div className="is-flex field">
                  <div>
                    <label className={labelStyle}>What is your budget?</label>
                  </div>
                  <div className="select">
                    <select className='select' name='Califica por presupuesto'>
                      <option value='Non Qualifier' name='No Califica'>Below $499,999</option>
                      <option value='Qualifier' name='Califica'>Up $500,000</option>
                    </select>
                  </div>
                </div>
                <div className="is-flex field">
                  <div>
                    <label className={labelStyle}>Do you know another destinations in Mexico? Which Ones?</label>
                  </div>
                </div>
                <div className="is-flex field has-text-white label">
                  <div>
                    <label className="checkbox">
                      <input className='padded' type="checkbox" name='Fue a Cancun'/>
                      Cancun
                    </label>
                  </div>
                  <div>
                    <label className="checkbox">
                      <input className='padded' type="checkbox" name='Fue a Los Cabos'/>
                      Los Cabos
                    </label>
                  </div>
                  <div>
                    <label className="checkbox">
                      <input className='padded' type="checkbox" name='Fue a Loreto'/>
                      Loreto
                    </label>
                  </div>
                </div>
              </section>
              <hr className="is-divider"></hr>
              <footer className="modal-card-foot is-gold is-radiusless">
                <div>
                  <Button type='submit' value='Send' Style={validateForm()}>Submit</Button>
                </div>
              </footer>
            </Card>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
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

export default connect(mapStateToProps, actions)(Modal)
