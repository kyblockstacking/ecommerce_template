import React, { Component } from 'react';

import '../CSS/Navbar.scss';

class Navbar extends Component {

    render() {
        return (
            <nav className='navbar' style={styles.navbar}>

                <div className='topNavbar' style={styles.topNavbar}>
                    <a className='brand' href='/' style={styles.topNavbar.brand}>DANK POTS</a>
                    <a className='name' href='https://github.com/kyblockstacking/' target='_blank' style={styles.topNavbar.name}>
                        <a className='cart' href='#' className='fas fa-shopping-cart' style={styles.cart}>&nbsp;(1)&nbsp;</a>
                        Kevin Yang
                    </a>
                </div>

                <div className='bottomNavbar' style={styles.bottomNavBar}>
                    <div className='subShopLabel' style={styles.bottomNavBar.subShopLabel}>SHOP</div>
                    <a className='navbarLinks' href='#'>Plants</a>
                    <a className='navbarLinks' href='#'>Pots</a>
                    <a className='navbarLinks' href='#'>Accessories</a>
                </div>

            </nav>
        );
    };
};

const styles = {
    navbar: {
        position: 'fixed',
        marginLeft: '5vw'
    },
    topNavbar: {
        margin: '0 auto',
        width: '90vw',
        borderBottom: '1px solid black',
        height: '10vh',
        display: 'flex',
        alignItems: ' center',

        brand: {
            textDecoration: 'none',
            color: '#1C572F'
        },
        name: {
            marginLeft: 'auto',
            textAlign: 'right',
            justifyContent: 'flex-end',
            textDecoration: 'none'
        }
    },
    bottomNavBar: {
        display: 'flex',
        flexDirection: 'row',
        margin: '0 auto',
        width: '90vw',
        subShopLabel: {
            margin: '0 1.5em 0 0',
            padding: '0 10px 0 10px',
            borderBottom: '1px solid black',
            borderRight: '1px solid black',
            borderLeft: '1px solid black',
        }
    },
    cart: {
        textDecoration: 'none'
    }
}

export default Navbar;