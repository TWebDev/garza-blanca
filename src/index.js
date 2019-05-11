import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import '../node_modules/bulma/css/bulma.css';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers from './redux/reducers'
import { BrowserRouter } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
    <Provider 
    store={createStore(reducers)}>
        <BrowserRouter>
            <ParallaxProvider>
                <App />
            </ParallaxProvider>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);
