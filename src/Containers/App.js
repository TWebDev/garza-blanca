import React from 'react';
import Nav from '../Components/Navbar/Nav';
import LandingPage from './LandingPage';
import Footer from '../Components/Footer'
import Modal from '../Components/Modal';

import { connect } from 'react-redux'
import * as actions from '../redux/actions'


const App = (props) => {

  let { modalActive } = props
  return (
    <React.Fragment>
      <Nav>
      </Nav>
      <div className='show-ondesk'>
        <LandingPage> 
        </LandingPage>
        <Footer>
        </Footer>
        <Modal toggleClass={modalActive ? ('modal is-active') : ('modal')}></Modal>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = ({ landingActions }) => {
  const { modalActive } = landingActions
  return { modalActive }
}

export default connect(mapStateToProps, actions)(App)
