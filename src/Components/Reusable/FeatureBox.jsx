import React, { Component } from 'react';
import '../../CSS/FeatureBox.scss';

class FeatureBox extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {

        const { src, title, description } = this.props; // destructure incoming props for readability

        return (
            <div className='featureBox'>
                <img className='pot1' src={src} alt='pot1' />
                <h3 className='featureTitle'>{title}</h3>
                <p className='featureDescription'>{description}</p>
            </div>
        );
    };
};

export default FeatureBox;