import React, { Component } from 'react';

import '../CSS/Navbar.scss';

class Navbar extends Component {

    render() {
        return (
            <nav className='navbar'>

                <div className='topNavbar'>
                    <a className='brand' href='/'>DANK POTS</a>
                    <a className='name' href='https://github.com/kyblockstacking/' target='_blank'>
                        <a className='fas fa-shopping-cart cart' href='#'>&nbsp;(1)&nbsp;</a>
                        Kevin Yang
                    </a>
                </div>

                <div className='bottomNavbar'>
                    <div className='subShopLabel'>SHOP</div>
                    <a className='navbarLinks' href='#'>Plants</a>
                    <a className='navbarLinks' href='#'>Pots</a>
                    <a className='navbarLinks' href='#'>Accessories</a>
                </div>

            </nav>
        );
    };
};

export default Navbar;