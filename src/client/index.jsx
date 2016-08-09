import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';


import configureStore from './store/configureStore';
import routes from './routes';

import './styles/index.scss';

const store = configureStore();

ReactDom.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  window.document.getElementById('root')
);


window.runTest = function () {
  const N_OF_RUNS = 100;
  const start = performance.now();
  Array(N_OF_RUNS).fill(0).forEach(() => {
    const id = 1;
    //const oldText = store.getState().todos[id].text;
    // update redux store
    store.dispatch({ type: 'COMPLETE_TODO', id });
  });
  const end = performance.now();

  console.log('sum time', end - start);
  console.log('average time', (end - start) / N_OF_RUNS);
};

