import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';

// import Perf from 'react-addons-perf';
//
// window.Perf = Perf;

import './styles/index.scss';

const store = configureStore();

ReactDom.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  window.document.getElementById('root')
);
