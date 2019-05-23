import React from 'react';
import Nav from '../Components/Navbar/Nav';
import LandingPage from './LandingPage';
import Footer from '../Components/Footer'
import Modal from '../Components/Modal';

import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import ThankYou from '../Components/ThankYou';
import Number from '../Components/Number';


const App = (props) => {

  let { modalActive, thankYouActive, numberActive } = props
  return (
    <React.Fragment>
      <Nav>
      </Nav>
      <div className='show-ondesk'>
        <LandingPage> 
        </LandingPage>
        <Footer>
        </Footer>
        <Modal toggleClass={ modalActive ? ('modal is-active') : ('modal') }></Modal>
        <ThankYou toggleClass={ thankYouActive ? ('modal is-active') : ('modal') }></ThankYou>
        <Number toggleClass={ numberActive ? ('modal is-active') : ('modal') }></Number>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = ({ landingActions }) => {
  const { modalActive, thankYouActive, numberActive } = landingActions
  return { modalActive, thankYouActive, numberActive }
}

export default connect(mapStateToProps, actions)(App)
