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
                    <a href='#' style={{}}>Shop Plants</a>
                    <a href='#' style={styles.bottomNavBar.pots}>Pots</a>
                    <a href='#' style={{}}>Accessories</a>
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
            textDecoration: 'none'
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

        pots: {
            padding: '0 1em 0 1em'
        }
    }
}

export default Navbar;