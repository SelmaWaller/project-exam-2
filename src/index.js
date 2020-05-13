import React from 'react';
import './index.css';

import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import HotelSpecific from './pages/HotelSpecific';
import Contact from './pages/Contact';

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/hotel-specific/:id" exact component={HotelSpecific} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root')
);
