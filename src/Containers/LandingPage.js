import React from 'react';
import { Parallax } from "react-parallax";
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

import Button from '../Elements/Button'
import Card from '../Elements/Card'
import Form from '../Components/Form'

import GB1 from '../Design/images/gb1.png'
import GB2 from '../Design/images/gb2.png'
import img1 from '../Design/images/gbprod1.png'
import img2 from '../Design/images/gbprod2.png'
import img3 from '../Design/images/gbprod3.png'
import Hotel from '../Design/icons/hotel.png'

const LandingPage = (props) => {

  let { toggleModal } = props
  return (
    <React.Fragment>
      <Parallax bgImage={GB1} strenght={500}>
        <div className="container is-first-hero insideStyles" style={{ height: 250 }}>
          <div className="content is-small">
            <h1 className="title">
              Buying a property in Mexico is possible
                <br />
                <br/>
              THE ONLY THING YOU NEED IS A BANK TRUST.
            </h1>
          </div>
        </div>
      </Parallax>
      <Card Style='box is-radiusless is-gold'>
        <div className="container revert">
          <div className="columns is-desktop">
            <div className="column is-vcentered">
              <div className="content">
                <h1 className="title is-pulled-left">
                  BANK TRUST?
                  </h1>
                <p className='is-pulled-left has-text-white'> 
                While a bank trust, also known as <strong className='has-text-white'>fideicomiso</strong>, may sound too complicated, we can assure the process is not as complex or time consuming as you may think. Although it is necessary to buy land in Mexico if you are not a citizen.
                </p>
                <Button Style='button is-secondary is-pulled-left has-shadow' clickHandler={toggleModal}>
                  Contact Us
                  </Button>
              </div>
            </div>
            <div className="column">
              <figure className="image">
                <img src={Hotel} alt='hotel-outlined' />
              </figure>
            </div>
          </div>
          <div className="section is-darken-gold box margin-bottom show-resolution has-inshadow">
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <h1 className="is-size-3 has-text-white">
                    Contact us to know more
                  </h1>
                </div>
              </div>
            </div>
            <Form>

            </Form>
          </div>
        </div>
      </Card>
      <Parallax bgImage={GB2} strenght={500} blur={{ min: -2, max: 10 }}>
        <div className="container insideStyles" style={{ height: 300 }}>
          <div className="column is-vcentered w-margin-v">
            <div className="content has-text-centered">
              <h1 className="title">
                STILL HAVE DOUBTS?
              </h1>
              <p className="has-text-white">
                Don’t worry we have a team of experts ready to help you out.
                <br/>
                <br/>
                Your real estate agent will work hand in hand with the Notario Publico, or notary, to smooth out your process. 
                <br/>
                <br/>
                Finally your dream of living in paradise can become reality, and we are here to help you make it happen.
              </p>
              <Button Style='button is-blue has-shadow'>
                HOW?
              </Button>
            </div>
          </div>
        </div>
      </Parallax>
      <Card Style='box is-radiusless plants-bg'>
        <div className="container">
          <div className="columns is-desktop">
            <div className="column is-vcentered">
              <div className="content has-text-white">
                <Card Styles='card'>
                  <div className="card-image">
                    <figure className='image is-5by3'>
                      <img className='hovered has-shadow' src={img1} alt='Gbroom1' />
                    </figure>
                  </div>
                </Card>
              </div>
            </div>
            <div className="column is-vcentered">
              <div className="content has-text-white">
                <Card Styles='card'>
                  <div className="card-image">
                    <figure className='image is-5by3'>
                      <img className='hovered has-shadow' src={img2} alt='Gbroom2' />
                    </figure>
                  </div>
                </Card>
              </div>
            </div>
            <div className="column is-vcentered">
              <div className="content has-text-white">
                <Card Styles='card'>
                  <div className="card-image">
                    <figure className='image is-5by3'>
                      <img className='hovered has-shadow' src={img3} alt='Gbroom3' />
                    </figure>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
}

const mapStateToProps = ({ landingActions }) => {
  const { modalActive } = landingActions
  return { modalActive }
}

export default connect(mapStateToProps, actions)(LandingPage)
