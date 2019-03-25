import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar.jsx';
import Landing from './Components/Landing.jsx';

import FeaturedSection from './Components/FeaturedSection.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          {/* HOME PAGE START */}
          <Route exact path='/' component={Navbar} />
          <Route exact path='/' component={Landing} />
          <Route exact path='/' component={FeaturedSection} />
          {/* HOME PAGE END */}
        </div>
      </Router >
    );
  };
};

export default App;