import React, { Component } from 'react';
import '../CSS/FeaturedSection.scss';

import FeatureBox from './Reusable/FeatureBox.jsx';

import pot1 from '../Images/pot1.jpg';

class FeaturedSection extends Component {
    render() {
        return (
            <div className='featuredSection'>
                <h1 class='featuredTitle'>FEATURED</h1>
                <FeatureBox src={pot1} title='Pot #1' description="This is pot #1's description" />
                <FeatureBox src={pot1} title='Pot #2' description="This is pot #2's description" />
            </div>
        );
    };
};

export default FeaturedSection;