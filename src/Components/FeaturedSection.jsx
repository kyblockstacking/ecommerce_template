import React, { Component } from 'react';
import '../CSS/FeaturedSection.scss';

import FeatureBox from './Reusable/FeatureBox.jsx';

import pot1 from '../Images/pot1.jpg';

class FeaturedSection extends Component {
    render() {
        return (
            <div className='featuredSection'>
                <h1 class='featuredTitle'>FEATURED</h1>
                <FeatureBox src={pot1} />
                <FeatureBox src={pot1} />
            </div>
        );
    };
};

export default FeaturedSection;