import classes from './addproduct.module.css';
import React, { Component } from 'react';
import Popup from '../Popup/Popup';

class AddProduct extends Component {
    state = {
        isShow: false
    }

    visibility = () => {
        this.setState({isShow: !this.state.isShow})
    }

    render() {
        return (
            <div>
                {this.state.isShow ? <Popup submitChange={this.props.submitChange} visibility={this.visibility} /> : null}
                <div className={classes.add_btn} onClick={this.visibility}>
                    <span>+</span>
                </div>
            </div>
        )
    }
}



export default AddProduct;
