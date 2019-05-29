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

  let { toggleModal, toggleNumber } = props
  return (
    <React.Fragment>
      <Parallax bgImage={GB1} strenght={100}>
        <div className="container is-first-hero insideStyles" style={{ height: 300 }}>
          <div className="content is-small">
            <h1 className="title">
              Purchasing a property in México is very easy.
                <br />
                <br/>
              THE ONLY THING YOU NEED IS A TRUST DEED.
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
                  TRUST DEED?
                  </h1>
                <p className='is-pulled-left has-text-white'> 
                As a foreign, you will need a Trust Deed only when you purchase a property within 50km (aprox 31 miles) from the beach. We can assure the process is not as complex or time consuming as you may think.
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
          <div className="section is-darken-gold box margin-bottom show-resolution has-shadow is-radiusless">
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
      <Parallax bgImage={GB2} strenght={100} blur={{ min: -2, max: 10 }}>
        <div className="container insideStyles" style={{ height: 300 }}>
          <div className="column is-vcentered w-margin-v">
            <div className="content has-text-centered">
              <h1 className="title">
                WOULD YOU LIKE MORE INFORMATION ABOUT OWNERSHIP?
              </h1>
              <p className="has-text-white">
                We have a team of specialists ready to help you out.
                <br/>
                <br/>
                Your real estate agent will work hand in hand with the <strong className='has-text-white'>Notary</strong> (Notario Público).
                <br/>
                <br/>
                Finally your dream of living in paradise can become reality, and we are here to help you make it happen.
              </p>
              <Button Style='button is-blue has-shadow' clickHandler={toggleNumber}>
                Call an Expert
              </Button>
            </div>
          </div>
        </div>
      </Parallax>
      <Card Style='box is-radiusless plants-bg has-shadow'>
        <div className="container">
          <div className="columns is-desktop">
            <div className="column is-vcentered">
              <div className="content has-text-white">
                <Card Styles='card'>
                  <div className="card-image">
                    <figure className='image is-5by3'>
                      <img className='hovered has-shadow' src={img1} alt='Gbroom1' />
                      <div className="overlay"><a href="https://www.garzablancarealestate.com/"><Button Style='button is-secondary has-shadow i-onhover'>View More</Button></a></div>
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
                      <div className="overlay"><a href="https://www.garzablancarealestate.com/"><Button Style='button is-secondary has-shadow i-onhover'>View More</Button></a></div>
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
                      <div className="overlay"><a href='https://www.garzablancarealestate.com/'><Button Style='button is-secondary has-shadow i-onhover'>View More</Button></a></div>                
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
  const { modalActive, numberActive } = landingActions
  return { modalActive, numberActive }
}

export default connect(mapStateToProps, actions)(LandingPage)
