import React, { Component } from 'react';
import HotDealsCarousel from '../Components/HotDealsCarousel.jsx'
import '../CSS/Shop.scss';
import ShopItem from '../Components/Reusable/ShopItem.jsx';

import pot1 from '../Images/pot1.jpg';

class Shop extends Component {

    render() {
        return (
            <div className='shop'>
                {/* <h2>Smokin' Hot Deals</h2> */}
                <HotDealsCarousel />
                <h2 className='plantsTitle'>Plants</h2>
                <div className='plantsItemSection'>
                    <ShopItem title='plant1' description='description' src={pot1} />
                    <ShopItem title='plant2' description='description' src={pot1} />
                    <ShopItem title='plant3' description='description' src={pot1} />
                    <ShopItem title='plant4' description='description' src={pot1} />
                </div>
                <h2 className='potsTitle'>Pots</h2>
                <div className='potsItemSection'>
                    <ShopItem title='pot1' description='description' src={pot1} />
                    <ShopItem title='pot2' description='description' src={pot1} />
                    <ShopItem title='pot3' description='description' src={pot1} />
                    <ShopItem title='pot4' description='description' src={pot1} />
                </div>
            </div>
        );
    };
};

export default Shop;