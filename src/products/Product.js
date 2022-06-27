import React, { Component } from 'react';
import Information from '../Information/Information';
import classes from './products.module.css';

class Product extends Component {

    state = {
        isCalled: false
    }

    callInfo = () => {
        this.setState({isCalled: !this.state.isCalled})
    }

    render() {
        const {item, ind, deleteProduct} = this.props
        return (
            <div>
                <div className={new Date(item.nearExpDate).getTime() <= new Date().getTime() ? classes.single_product_exp : classes.single_product} onClick={this.callInfo}>
                    <p>{ind + 1}</p>
                    <p>{item.description}</p>
                    <p>More</p>
                </div>
                {this.state.isCalled ? <Information category={item.category} expDate={item.expDate} nearExpDate={item.nearExpDate} position={item.position} quantity={item.quantity} callInfo={this.callInfo} ind={ind} deleteProduct={deleteProduct} /> : null}
            </div>
        )
    }
}

export default Product;
