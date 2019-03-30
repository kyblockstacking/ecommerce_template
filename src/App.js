import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar.jsx';
import Landing from './Components/Landing.jsx';
import FeaturedSection from './Components/FeaturedSection.jsx';

import Shop from './Components/Shop.jsx';
import ShopPots from './Components/ShopPots.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>

          <Route path='/' component={Navbar} />

          <Route exact path='/' component={Landing} />
          <Route exact path='/' component={FeaturedSection} />

          <Route exact path='/shop' component={Shop} />
          <Route exact path='/shop/pots' component={ShopPots} />
          <Route exact path='/shop/plants' component={Shop} />
          <Route exact path='/shop/accessories' component={Shop} />
        </div>
      </Router >
    );
  };
};

export default App;