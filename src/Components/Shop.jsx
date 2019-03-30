import React, { Component } from 'react';
import HotDealsCarousel from '../Components/HotDealsCarousel.jsx'
import '../CSS/Shop.scss';
import ShopItem from '../Components/Reusable/ShopItem.jsx';

import pot1 from '../Images/pot1.jpg';

class Shop extends Component {
    render() {
        return (
            <div className='shop'>
                <h1 class='shopTitle'>DANK POT'S SHOP</h1>
                <h2>Smokin' Hot Deals</h2>
                <HotDealsCarousel />
                <h2>Pots</h2>
                <ShopItem title='pot1' description='description' src={pot1} />
            </div>
        );
    };
};

export default Shop;