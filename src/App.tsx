import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './containers/Home/Home';
import Photos from './containers/Photos/Photos';
import Work from './containers/Work/Work';
import Contact from './containers/Contact/Contact';
import Login from './containers/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/photos' component={Photos} exact />
          <Route path='/work' component={Work} exact />
          <Route path='/contact' component={Contact} exact />
          <Route path='/login' component={Login} exact />
          <Route path='' component={Home} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
