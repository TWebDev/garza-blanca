import React from "react";
import Logo from "../media/graphics/logo.png"

const Nav = () => {
    return (
        <React.Fragment>
            <nav className='navbar is-fixed-top' role='navigation' aria-label='main navigation'>
                <div className='navbar-menu container is-widescreen'>
                    <div className='navbar-start'>
                    <div className='navbar-brand'>
                        <a className='navbar-item' href='#'>
                            <img src={Logo} alt='garza-blanca-real-estate' />
                        </a>

                            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                    </div>
                    </div>
                    <div className='navbar-end'>
                        <a className='navbar-item'>
                            FEATURES
                        </a>
                        <a className='navbar-item'>
                            RESIDENCES
                        </a>
                        <a className='navbar-item'>
                            OWNERSHIP
                        </a>
                        <a className='navbar-item'>
                            FUTURE DEVELOPMENTS
                        </a>
                        <a className='navbar-item'>
                            TRY & BUY
                        </a>
                        <a className='navbar-item'>
                            PHOTOS
                        </a>
                        <a className='navbar-item'>
                            RENTALS
                        </a>
                        <a className="navbar-item">
                            <button className='button button-nav'>
                                CONTACT US
                            </button>
                        </a>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Nav;