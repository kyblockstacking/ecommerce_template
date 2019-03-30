import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../CSS/HotDealsCarousel.scss';

import deal1 from '../Images/deal1.jpg';
import deal2 from '../Images/deal2.jpg';
import deal3 from '../Images/deal3.jpg';

class HotDealsCarousel extends Component {
    render() {
        return (
            <div class='shopPage'>
                <Carousel className='hotDealsCarousel'>
                    <Carousel.Item>
                        <img
                            className='d-block w-100 hotDealsImage'
                            src={deal1}
                            alt='First slide'
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-block w-100 hotDealsImage'
                            src={deal2}
                            alt='Second slide'
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-block w-100 hotDealsImage'
                            src={deal3}
                            alt='Third slide'
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div class='shopItems'>
                </div>

            </div>
        )
    }
}

export default HotDealsCarousel;