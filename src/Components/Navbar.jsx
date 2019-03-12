import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar'>

                <div className='topNavbar' style={{ margin: '0 auto', width: '90vw', borderBottom: '1px solid black', height: '10vh', display: 'flex', alignItems: ' center' }}>
                    <a href='/' style={{ marginRight: '20%', width: '40%', textDecoration: 'none', }}>DANK POTS</a>
                    <a href='https://github.com/kyblockstacking/' target='_blank' style={{ width: '40%', textAlign: 'right', justifyContent: 'flex-end', textDecoration: 'none' }}>Kevin Yang</a>
                </div>

                <div className='bottomNavbar' style={{ display: 'flex', flexDirection: 'row', margin: '0 auto', width: '90vw' }}>
                    <a href='#' style={{}}>Shop Plants</a>
                    <a href='#' style={{ padding: '0 1em 0 1em' }}>Pots</a>
                    <a href='#' style={{}}>Accessories</a>
                </div>

            </nav>
        );
    };
};

export default Navbar;