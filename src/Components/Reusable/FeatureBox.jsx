import React, { Component } from 'react';
import '../../CSS/FeatureBox.scss';

import pot1 from '../../Images/pot1.jpg';

class FeatureBox extends Component {
    render() {
        return (
            <div className='featureBox'>
                <img className='pot1' src={pot1} alt='pot1' />
                <h3 className='featureTitle'>Pot #1</h3>
            </div>
        );
    };
};

export default FeatureBox;