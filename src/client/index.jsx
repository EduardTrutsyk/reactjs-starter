import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';

import Perf from 'react-addons-perf';

window.Perf = Perf;

import './styles/index.scss';

const store = configureStore();

ReactDom.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  window.document.getElementById('root')
);


window.runTest = () => {
  const N_OF_RUNS = 101;
  const start = performance.now();
  new Array(N_OF_RUNS).fill(0).forEach(() => {
    store.dispatch({ type: 'COMPLETE_TODO', id: 1 });
  });
  const end = performance.now();

  console.log('sum time', end - start);
  console.log('average time', (end - start) / N_OF_RUNS);
};

