import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar' style={styles.navbar}>

                <div className='topNavbar' style={styles.topNavbar}>
                    <a href='/' style={styles.topNavbar.brand}>DANK POTS</a>
                    <a href='https://github.com/kyblockstacking/' target='_blank' style={styles.topNavbar.name}>Kevin Yang</a>
                </div>

                <div className='bottomNavbar' style={styles.bottomNavBar}>
                    <div style={styles.bottomNavBar.subShopLabel}>SHOP</div>
                    <a href='#' style={styles.bottomNavBar.links}>Plants</a>
                    <a href='#' style={styles.bottomNavBar.links}>Pots</a>
                    <a href='#' style={styles.bottomNavBar.links}>Accessories</a>
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
            marginRight: '20%',
            width: '40%',
            textDecoration: 'none',
            color: '#1C572F'
        },
        name: {
            width: '40%',
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
        links: {
            padding: '0 1.5em 0 0',
            color: '#1C572F',
            textDecoration: 'none'
        },
        subShopLabel: {
            margin: '0 1.5em 0 0',
            padding: '0 10px 0 10px',
            borderBottom: '1px solid black',
            borderRight: '1px solid black',
            borderLeft: '1px solid black',
        }
    }
}

export default Navbar;