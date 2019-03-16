import React, { Component } from 'react';

import backgroundImage from '../Images/landing_page_background.jpg';

class Landing extends Component {

    render() {
        return (
            <div style={styles.background}>
                <h1 style={styles.heading}>GET HIGH</h1>
                <h2 style={styles.subheading}>quality pots and plants</h2>
                <a href='#' style={styles.shopNow}>SHOP NOW</a>
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
        height: '95vh'
    },
    heading: {
        margin: '0',
        padding: '25vh 0 0 10vw',
        fontSize: '3em',
        color: '#1C572F',
        fontStyle: 'italic'
    },
    subheading: {
        margin: '0 0 5vh 12vw',
        color: '#906137',
        fontStyle: 'italic'
    },
    shopNow: {
        margin: '0 0 0 14vw',
        padding: '15px 50px 15px 50px',
        background: '#599C01',
        color: '#fff',
        borderRadius: '30px',
        textDecoration: 'none',
        fontWeight: '700',
    }
}

export default Landing;