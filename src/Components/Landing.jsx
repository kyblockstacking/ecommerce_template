import React, { Component } from 'react';

import '../CSS/Landing.scss';

class Landing extends Component {

    render() {
        return (
            <div className='background'>
                <h1 className='landingHeader'>GET HIGH</h1>
                <h2 className='landingSubHeader'>quality pots and plants</h2>
                <a className='shopNowButton' href='/shop'>SHOP NOW</a>
            </div>
        );
    };
};

export default Landing;