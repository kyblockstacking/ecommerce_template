import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar'>

                <div className='topNavbar' style={{ margin: '0 auto', width: '90vw', borderBottom: '1px solid black', height: '10vh', display: 'flex', alignItems: ' center' }}>
                    <h1 style={{ marginRight: '20%', width: '40%' }}>DANK POTS</h1>
                    <h1 style={{ width: '40%', textAlign: 'right', justifyContent: 'flex-end' }}>Kevin Yang</h1>
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