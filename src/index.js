/**
*Creating component with the data.
*@React Version 16.13.1
*@author sathiyavalli<sathiyavalli1991@gmail.com>
*/


import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Review from './Review';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import { fetchData } from './actions';

//store that dispatching data
const store = createStore(rootReducer,applyMiddleware(thunk));
store.dispatch(fetchData());

const routing = (
  <div>   
    <Router>
      <Provider store={store}>
        <Route path="/Review" component={Review} />
      </Provider>
    </Router>
  </div>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
