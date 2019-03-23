import React, { Component } from 'react';

import Navbar from './Components/Navbar.jsx';
import Landing from './Components/Landing.jsx';

import FeaturedSection from './Components/FeaturedSection.jsx';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Landing />
        <FeaturedSection />
      </div>
    );
  };
};

export default App;