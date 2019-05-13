import React from 'react'
import { Link, Route } from 'react-router-dom'

const Footer = () => {

  const btnClass = 'navbar-item button nav-button is-transparent'

    return (
      <React.Fragment>
        <footer className="footer is-blue">
            <nav className="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
              <ul>
                <li><Link to='/' className={btnClass}>Features</Link></li>
                <li><Link to='/' className={btnClass}>Residences</Link></li>
                <li><Link to='/' className={btnClass}>Ownership</Link></li>
                <li><Link to='/' className={btnClass}>Future Developments</Link></li>
                <li><Link to='/' className={btnClass}>Try & Buy</Link></li>
                <li><Link to='/' className={btnClass}>Photos</Link></li>
                <li><Link to='/' className={btnClass}>Rentals</Link></li>
              </ul>
            </nav>
        </footer>
      </React.Fragment>
    );
  }
  
  export default Footer;