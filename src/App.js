import React, { Component } from 'react';

import Navbar from './Components/Navbar.jsx';
import Landing from './Components/Landing.jsx';

import FeatureBox from './Components/Reusable/FeatureBox.jsx';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Landing />
        <FeatureBox />
      </div>
    );
  };
};

export default App;