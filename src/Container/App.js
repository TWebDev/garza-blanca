import React from 'react';
import Nav from '../Components/Nav';
import Content from '../Components/Content';
import Footer from '../Components/Footer'
import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => {
  return (
    <React.Fragment>
        <Nav>
        </Nav>
      <ParallaxProvider>
        <Content>
        </Content>
      </ParallaxProvider>
      <Footer>
      </Footer>
    </React.Fragment>
  );
}

export default App;
