import React from 'react';
import Nav from './Nav';
import LandingPage from './LandingPage';
import Footer from './Footer'

import Button from '../Components/Button'

const App = () => {
  return (
    <React.Fragment>
      <div className="columns">
          <div className="column">
              <Button>Primary</Button>
          </div>
      </div>
    </React.Fragment>
  );
}

export default App;
