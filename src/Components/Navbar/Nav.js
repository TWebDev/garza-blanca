import React from "react";
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
import GBlogo from '../../Design/icons/logo.png';

import MobileNav from './MobileNav'
import DeskMenu from "./DeskMenu";


const Nav = (props) => {

    let { toggleBurger, burgerActive } = props


    return (
        <React.Fragment>
            <nav className="navbar is-main is-spaced is-fixed-top is-expanded" role='navigation' aria-label='main navigation'>
                <div className="navbar-brand">
                    <Link to='/' className='navbar-item'>
                        <img src={GBlogo} alt="GB-logo" />
                    </Link>
                    <button onClick={toggleBurger} className={burgerActive ? ('navbar-burger is-active') : ('navbar-burger')} aria-label='menu' aria-expanded='false' data-target='navMenu'>
                        <span aria-hidden='false'></span>
                        <span aria-hidden='false'></span>
                        <span aria-hidden='false'></span>
                    </button>
                </div>
                <MobileNav validationHandler={burgerActive ? ('navbar-menu is-active') : ('navbar-menu is-hidden')} id='navMenu'>
                </MobileNav>
                <DeskMenu>
                </DeskMenu>
            </nav>
        </React.Fragment>
    );
}

const mapStateToProps = ({ landingActions }) => {
    const { burgerActive } = landingActions
    return { burgerActive }
}

export default connect(mapStateToProps, actions)(Nav)