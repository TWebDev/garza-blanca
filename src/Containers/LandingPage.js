import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import Button from '../Elements/Button'

import GB1 from '../Design/images/gb1.png'
import GB2 from '../Design/images/gb2.png'

const LandingPage = () => {
  return (
    <React.Fragment>
      <Parallax y={[-20,20]} className='is-absolute'>
        <img src={GB1} alt="GB-Hotel"/>
        <img src={GB2} alt="GB-View"/>
      </Parallax>
      <section className="hero is-first-hero">
        <div className="hero-body">
          <div className="container center-container">
            <div className="content is-small">
              <h1 className="title">
                  The easiest way to
                  <br/>
                  OWN A PROPERTY IN PUERTO VALLARTA
              </h1>
            </div>
                <Button Style='button is-secondary center-button'>
                  Find out How
                </Button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default LandingPage;
