import React, { Component } from 'react';
import '../CSS/ShopPots.scss';
import ShopItem from '../Components/Reusable/ShopItem.jsx';

import pot1 from '../Images/pot1.jpg';

class ShopPots extends Component {
    render() {
        return (
            <div className='ShopPots'>
                <h2 className='potsTitle'>Pots</h2>
                <div className='potsItemSection'>
                    <ShopItem title='pot1' description='description' src={pot1} />
                    <ShopItem title='pot2' description='description' src={pot1} />
                    <ShopItem title='pot3' description='description' src={pot1} />
                    <ShopItem title='pot1' description='description' src={pot1} />
                    <ShopItem title='pot2' description='description' src={pot1} />
                    <ShopItem title='pot3' description='description' src={pot1} />
                    <ShopItem title='pot1' description='description' src={pot1} />
                    <ShopItem title='pot2' description='description' src={pot1} />
                    <ShopItem title='pot3' description='description' src={pot1} />
                    <ShopItem title='pot1' description='description' src={pot1} />
                    <ShopItem title='pot2' description='description' src={pot1} />
                    <ShopItem title='pot3' description='description' src={pot1} />
                    <ShopItem title='pot1' description='description' src={pot1} />
                    <ShopItem title='pot2' description='description' src={pot1} />
                    <ShopItem title='pot3' description='description' src={pot1} />
                </div>
            </div>

        );
    };
};

export default ShopPots;