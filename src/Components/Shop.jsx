import React, { Component } from 'react';
import HotDealsCarousel from '../Components/HotDealsCarousel.jsx'
import '../CSS/Shop.scss';

class Shop extends Component {
    render() {
        return (
            <div className='shop'>
                <h1 class='shopTitle'>DANK POT'S SHOP</h1>
                <h2>Smokin' Hot Deals</h2>
                <HotDealsCarousel />
            </div>
        );
    };
};

export default Shop;