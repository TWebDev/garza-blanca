import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

import Card from '../Elements/Card';

const Number = (props) => {
  let 
  {
    toggleClass,
    toggleNumber
  } = props;

  return(
    <React.Fragment>
      <div className={toggleClass}>
        <div className="modal-background" onClick={toggleNumber}></div>
        <div className="modal-close" onClick={toggleNumber}></div>
        <div className="modal-content">
          <Card Style='box is-radiusless is-gold'>
            <section className='modal-card-body is-darken-gold has-inshadow'>
              <h1 className="title">+1 844 598 3564</h1>
              <hr className="is-divider"></hr>
              <p className='has-text-white is-flex'>Call toll free!</p>
            </section>
          </Card>
        </div>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = ({ landingActions }) => {
  const {
    toggleNumber
  } = landingActions
  return {
    toggleNumber
  }
}

export default connect(mapStateToProps, actions)(Number)