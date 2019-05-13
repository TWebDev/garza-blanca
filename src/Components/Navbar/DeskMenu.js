import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

import Button from '../../Elements/Button'

const DeskMenu = (props) => {

  let { toggleModal } = props

  const btnClass = 'navbar-item button nav-button is-transparent'

  return (
    <React.Fragment>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to='/' className={btnClass}>
            Features
          </Link>
          <Link to='/' className={btnClass}>
            Residences
          </Link>
          <Link to='/' className={btnClass}>
            Ownership
          </Link>
          <Link to='/' className={btnClass}>
            Future Developments
          </Link>
          <Link to='/' className={btnClass}>
            Try & Buy
          </Link>
          <Link to='/' className={btnClass}>
            Photos
          </Link>
          <Link to='/' className={btnClass}>
            Rentals
          </Link>
          <Link to='/'>
            <Button Style='button is-secondary' clickHandler={toggleModal}>
              <p className='is-size-7'><strong>CONTACT US</strong></p>
            </Button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = ({ landingActions }) => {
  const { modalActive } = landingActions
  return { modalActive }
}

export default connect(mapStateToProps, actions)(DeskMenu)