import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import 'bulma/css/bulma.css';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <Provider 
    store={createStore(reducers)}>
        <BrowserRouter>
                <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);
