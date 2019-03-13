import React, { Component } from 'react';

import backgroundImage from '../Images/landing_page_background.jpg';

class Landing extends Component {

    render() {
        return (
            <div style={styles.background}>

            </div>
        );
    };
};

const styles = {
    background: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'fill',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        backgroundColor: '#E8E7E3',
        height: '100vh'
    }
}

export default Landing;