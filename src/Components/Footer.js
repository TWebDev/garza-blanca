import React from 'react'

const Footer = () => {
    return (
      <React.Fragment>
        <nav className="breadcrumb has-dot-separator is-centered footer" aria-label="breadcrumbs">
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Residences</a></li>
            <li><a href="#">Ownership</a></li>
            <li><a href="#">Future Developments</a></li>
            <li><a href='#'>Try & Buy</a></li>
            <li><a href='#'>Photos</a></li>
            <li><a href='#'>Rentals</a></li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
  
  export default Footer;