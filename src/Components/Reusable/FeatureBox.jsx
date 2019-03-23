import React, { Component } from 'react';
import '../../CSS/FeatureBox.scss';

class FeatureBox extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };


    render() {
        return (
            <div className='featureBox'>
                <img className='pot1' src={this.props.src} alt='pot1' />
                <h3 className='featureTitle'>Pot #1</h3>
            </div>
        );
    };
};

export default FeatureBox;