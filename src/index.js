import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import '../node_modules/bulma/css/bulma.css';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers from './redux/reducers'

ReactDOM.render(
    <Provider 
    store={createStore(reducers)}>
        <App />
    </Provider>
    , document.getElementById('root')
);
