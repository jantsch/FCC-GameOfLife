import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.css';
import App from './js/App';
import {Provider} from 'react-redux'
import storeFactory from './js/store'

const store = storeFactory()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

