import React from 'react';
import Button from '../../Elements/Button';

const MobileNav = (props) => {

  let { validationHandler } = props

  const btnClass = 'button is-block is-transparent'

  return (
    <React.Fragment>
      <div className={ validationHandler } id='navMenu'>
        <Button Style={ btnClass }>
          <a href="https://www.garzablancarealestate.com" className='has-text-white'>Go to our site</a>
        </Button>
        <Button Style='button is-block is-primary'>
          <a href="tel: +1 844 598 3564" className='has-text-white'>Contact us</a>
        </Button>
      </div>
    </React.Fragment>
  )
}

export default MobileNav;