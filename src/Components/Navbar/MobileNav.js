import React from 'react';
import Button from '../../Elements/Button';

const MobileNav = (props) => {

  let { validationHandler } = props

  const btnClass = 'button is-block is-transparent'

  return (
    <React.Fragment>
      <div className={ validationHandler } id='navMenu'>
        <Button Style={ btnClass }>
          Features
        </Button>
        <Button Style={ btnClass }>
          Residences
        </Button>
        <Button Style={ btnClass }>
          Ownership
        </Button>
        <Button Style={ btnClass }>
          Future Developments
        </Button>
        <Button Style={ btnClass }>
          Try & Buy
        </Button>
        <Button Style={ btnClass }>
          Photos
        </Button>
        <Button Style={ btnClass }>
          Rentals
        </Button>
        <Button Style='button is-block is-primary'>
          Contact Us
        </Button>
      </div>
    </React.Fragment>
  )
}

export default MobileNav;