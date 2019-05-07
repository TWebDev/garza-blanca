import React from 'react';
import Gb1 from '../media/images/gb1.png';
import Gb2 from '../media/images/gb2.png';
import Hotel from '../media/graphics/hotel.png'
import { Parallax } from 'react-scroll-parallax';

const Content = () => {
  return (
    <React.Fragment>
      <div className='gap' >
        <Parallax className='custom-class' y={[-20, 20]} tagOuter='figure'>
          <img className='wrapper' src={Gb1} alt='garza-blanca-resort' />
          <img className='wrapper' src={Gb2} alt='garza-blanca-resort-2' />
        </Parallax>
      </div>
      <div className='columns first'>
        <div className='column box card is-transparent'>
          <p className='h1'>
            The easiest way to own a
              <br />
            PROPERTY IN PUERTO VALLARTA
            </p>
          <button className='button button-content'>
            FIND OUT HOW
          </button>
        </div>
      </div>
      <div className='columns'>
        <div className='column box card is-gold'>
          <div className='columns'>
            <div className='column'>
              <p className='title'>
                LOREM IPSUM
              </p>
              <p className='box-text'>
                Lorem ipsum dolor sit amet consectetur adipiscing elit commodo tempor massa volutpat mattis torquent risus, sed nisi diam sagittis ullamcorper venenatis mollis fringilla curabitur habitasse nam sapien posuere. Leo metus ligula curae ante magnis nec urna luctus commodo vivamus, montes risus quisque blandit dictum fames ullamcorper nostra eros potenti, cursus quam felis convallis scelerisque gravida ut maecenas ultricies. Fusce suspendisse velit ullamcorper aliquet quis nisi nec vivamus libero, integer primis orci facilisi scelerisque nam nulla euismod sociis tempus, ante laoreet feugiat ultrices penatibus malesuada eros torquent.
              </p>
              <button className='button button-content'>
                CONTACT US
              </button>
            </div>
            <div className='column'>
              <figure className='image'>
                <img src={Hotel} />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className='columns'>
        <div className='column box card is-transparent'>
          <p className='h1'>
            LOREM IPSUM
          </p>
          <p className='box-text'>
            Lorem ipsum dolor sit amet consectetur adipiscing
          </p>
          <button className='button button-content is-dblue'>
            HOW?
          </button>
        </div>
      </div>
      <div className='columns'>
        <div className='column box card with-bg'>
          <div className='columns'>
            <div className='column'>
              <div className='content'>
                <figure class="image is-3by2">
                  <img src="https://bulma.io/images/placeholders/480x320.png" />
                </figure>
                <p className='is-large fig-text'>
                  Lorem ipsum dolor sit amet consectetur adipiscing
                </p>
              </div>
            </div>
            <div className='column'>
              <div className='content'>
                <figure class="image is-3by2">
                  <img src="https://bulma.io/images/placeholders/480x320.png" />
                </figure>
                <p className='is-large fig-text'>
                  Lorem ipsum dolor sit amet consectetur adipiscing
                </p>
              </div>
            </div>
            <div className='column'>
              <div className='content'>
                <figure class="image is-3by2">
                  <img src="https://bulma.io/images/placeholders/480x320.png" />
                </figure>
                <p className='is-large fig-text'>
                  Lorem ipsum dolor sit amet consectetur adipiscing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Content;
