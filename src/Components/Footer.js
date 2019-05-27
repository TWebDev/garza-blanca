import React from 'react';
import { Link, Route } from 'react-router-dom';

const Footer = () => {
  const btnClass = 'navbar-item button nav-button is-transparent'

    return (
      <React.Fragment>
        <footer className="footer is-darken-gold">
            <nav className="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
              <ul>
                <li><a className={btnClass} onClick={() => { window.scrollTo(0,0) }}>Go Up</a></li>
              </ul>
            </nav>
        </footer>
      </React.Fragment>
    );
  }
  
  export default Footer;