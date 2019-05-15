import React from 'react';
import { Parallax } from "react-parallax";
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

import Button from '../Elements/Button'
import Card from '../Elements/Card'

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
              BUYING A PROPERTY IN MEXICO IS POSSIBLE
                <br />
              THE ONLY THINFG YOU NEED IS A BANK TRUST.
            </h1>
          </div>
          <div className="box is-transparent has-text-centered">
            <Button Style='button is-secondary'>
              Find out How
            </Button>
          </div>
        </div>
      </Parallax>
      <Card Style='box is-radiusless is-gold'>
        <div className="container">
          <div className="columns is-desktop">
            <div className="column is-vcentered">
              <div className="content">
                <h1 className="title is-pulled-left">
                  LOREM TITLE
                  </h1>
                <p className='is-pulled-left has-text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam similique dolorum necessitatibus! Facilis unde est enim obcaecati dolorum mollitia aliquid delectus, provident ratione corrupti quibusdam quisquam iusto cupiditate, recusandae quos! </p>
                <Button Style='button is-secondary is-pulled-left hovered' clickHandler={toggleModal}>
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
        </div>
      </Card>
      <Parallax bgImage={GB2} strenght={500} blur={{ min: -2, max: 10 }}>
        <div className="container insideStyles" style={{ height: 250 }}>
          <div className="column is-vcentered w-margin-v">
            <div className="content has-text-centered">
              <h1 className="title">
                LOREM IPSUM
              </h1>
              <p className="has-text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <Button Style='button is-blue'>
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
                      <img className='hovered' src={img1} alt='Gbroom1' />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content has-text-justified hovered">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deserunt recusandae praesentium eveniet facilis?
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <div className="column is-vcentered">
              <div className="content has-text-white">
                <Card Styles='card'>
                  <div className="card-image">
                    <figure className='image is-5by3'>
                      <img className='hovered' src={img2} alt='Gbroom2' />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content has-text-justified hovered">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deserunt recusandae praesentium eveniet facilis?
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <div className="column is-vcentered">
              <div className="content has-text-white">
                <Card Styles='card'>
                  <div className="card-image">
                    <figure className='image is-5by3'>
                      <img className='hovered' src={img3} alt='Gbroom3' />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content has-text-justified">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deserunt recusandae praesentium eveniet facilis?
                    </div>
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
