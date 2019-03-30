import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class ShopItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { title, description, src } = this.props;

        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={src} />
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <button className='addToCartButton'>Add To Cart</button>
                </Card.Body>
            </Card>
        );
    };
};

export default ShopItem;