import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

import Card from '../Elements/Card';

const ThankYou = (props) => {
  let 
  {
    toggleClass,
    toggleThankYou
  } = props;

  return(
    <React.Fragment>
      <div className={toggleClass}>
        <div className="modal-background" onClick={toggleThankYou}></div>
        <div className="modal-close" onClick={toggleThankYou}></div>
        <div className="modal-content">
          <Card Style='box is-radiusless is-gold'>
            <section className='modal-card-body is-darken-gold has-inshadow'>
              <h1 className="title">Thank you!</h1>
              <hr className="is-divider"></hr>
              <p className='has-text-white is-flex'>Shortly you will recieve more information in your email</p>
            </section>
          </Card>
        </div>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = ({ landingActions }) => {
  const {
    toggleThankYou
  } = landingActions
  return {
    toggleThankYou
  }
}

export default connect(mapStateToProps, actions)(ThankYou)