import Counter from './Counter/Counter';
import Greeter from './Greeter/Greeter';
import React from 'react';

import './app.scss';

const App = () => (
  <div className="app">
    <h1>React App Test!</h1>
    <Greeter/>
    <Counter/>
  </div>
);

export default App;
