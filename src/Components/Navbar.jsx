import React, { Component } from 'react';

import '../CSS/Navbar.scss';

class Navbar extends Component {

    render() {
        return (
            <nav className='navbar'>

                <div className='topNavbar'>
                    <a className='brand' href='/'>DANK POTS</a>
                    <a className='name' href='https://github.com/kyblockstacking/' target='_blank' rel='noopener noreferrer'>
                        <i className='fas fa-shopping-cart cart'>&nbsp;(1)&nbsp;</i>
                        Kevin Yang
                    </a>
                </div>

                <div className='bottomNavbar'>
                    <a className='subShopLabel' href='/shop'>SHOP</a>
                    <a className='navbarLinks' href='/shop/plants'>Plants</a>
                    <a className='navbarLinks' href='/shop/pots'>Pots</a>
                    <a className='navbarLinks' href='/shop/accessories'>Accessories</a>
                </div>

            </nav>
        );
    };
};

export default Navbar;