import React, { Component } from 'react';
import classes from './body.module.css';
import Product from '../products/Product';
import Message from '../Message/Message';

class Body extends Component {

    render() {
        const {product, deleteProduct} = this.props
        return (
            <div className='container'>
                <div className={classes.product_list}>
                    {product === null && <Message />}
                    {product && product.length === 0 && <Message />}
                    {product && product.map((item, ind) => <Product key={ind} item={item} ind={ind} deleteProduct={deleteProduct} />)}
                </div>
            </div>
        )
    }
}

export default  Body;