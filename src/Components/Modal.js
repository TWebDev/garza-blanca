import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

import Card from '../Elements/Card'
import Icon from '../Elements/Icon'
import Button from '../Elements/Button'

const Modal = (props) => {
  
  let { toggleClass, toggleModal } = props

  let labelStyle = 'label has-text-white'
  let controlIcon = 'control has-icons-left'
  return (
    <React.Fragment>
      <div className={toggleClass}>
        <div className="modal-background" onClick={toggleModal}></div>
        <div className="modal-close" onClick={toggleModal}></div>
        <div className="modal-content">
          <Card Style='box is-radiusless is-gold'>
            <section className="modal-card-body is-darken-gold">
              <div className="field">
                <label className={labelStyle}>Name</label>
                <div className={controlIcon}>
                  <input className="input" type="text" placeholder="Your name"/>
                  <Icon Style='fas fa-user'></Icon>
                </div>
              </div>
              <div className="field">
                <label className={labelStyle}>Last Name</label>
                <div className={controlIcon}>
                  <input className="input" type="text" placeholder="Your last name"/>
                  <Icon Style='fas fa-user'></Icon>
                </div>
              </div>
              <div className="field">
                <label className={labelStyle}>Phone Number</label>
                <div className={controlIcon}>
                  <input className="input" type="text" placeholder="1 123 456 7890"/>
                  <Icon Style='fas fa-phone'></Icon>
                </div>
              </div>
              <div className="field">
                <label className={labelStyle}>E-mail</label>
                <div className={controlIcon}>
                  <input className="input" type="email" placeholder='your_email@mailme.com'/>
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
                      <input className='padded' type="radio" name="beenPV"/>
                      Yes
                    </label>
                  </div>
                  <div className="label has-text-white">
                    <label className="radio">
                      <input className='padded' type="radio" name="beenPV"/>
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
                 <select>
                   <option value="default">Select one</option>
                   <option value='3 months'>3 Months</option>
                   <option value='6 months'>6 Months</option>
                   <option value='1 year'>1 Year</option>
                 </select>
                </div>
              </div>
              <div className="is-flex field">
                <div>
                  <label className={labelStyle}>What is your budget?</label>
                </div>
                <div className="select">
                  <select className='select'>
                    <option value='default'>Select one</option>
                    <option value='Non Qualifier'>Below $499,999</option>
                    <option value='Qualifier'>Up $500,000</option>
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
                    <input className='padded' type="checkbox" name='Cancun'/>
                    Cancun
                  </label>
                </div>
                <div>
                  <label className="checkbox">
                    <input className='padded' type="checkbox" name='Los Cabos'/>
                    Los Cabos
                  </label>
                </div>
                <div>
                  <label className="checkbox">
                    <input className='padded' type="checkbox" name='Loreto'/>
                    Loreto
                  </label>
                </div>
              </div>
            </section>
            <hr className="is-divider"></hr>
            <footer className="modal-card-foot is-gold is-radiusless">
              <div>
                <Button Style="button is-secondary" clickHandler={toggleModal}>Cancel</Button>
                <Button Style="button is-secondary">Submit</Button>
              </div>
            </footer>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = ({ landingActions }) => {
  const { modalActive } = landingActions
  return { modalActive }
}

export default connect(mapStateToProps, actions)(Modal)
