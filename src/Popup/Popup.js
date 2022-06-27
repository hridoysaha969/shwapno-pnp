import React, { Component } from 'react';
import classes from './popup.module.css';

class Popup extends Component {

    state = {
        description: '',
        category: '',
        expDate: '',
        nearExpDate: '',
        quantity: '',
        position: '',
        error: {}
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitForm = e => {
        /* ==== Preventing default behaviour of form ==== */
        e.preventDefault();

        const {errors, isValid} = this.validate()
        if(isValid) {
            /* ==== Sending the data to the local storage ==== */
            let productArr = JSON.parse(localStorage.getItem('productObj'));
            if(productArr == null) {
                let newArr = [this.state];
                localStorage.setItem('productObj', JSON.stringify(newArr));
            } else {
                productArr.push(this.state);
                localStorage.setItem('productObj', JSON.stringify(productArr));
            }

            /* ==== Resetting the form ==== */
            e.target.reset();
            this.setState({
                description: '',
                category: '',
                expDate: '',
                nearExpDate: '',
                quantity: '',
                position: '',
                error: {}
            })

            this.props.submitChange()
            this.props.visibility()
        } else {
            this.setState({error: errors})
        }

    }

    validate = () => {
        const errors = {}
        const {description, category, expDate, nearExpDate, quantity, position} = this.state

        if(!description) {
            errors.description = 'Please enter title'
        }
        if(!category) {
            errors.category = 'Please select a category'
        }
        if(!expDate) {
            errors.expDate = 'Please select date'
        }
        if(!nearExpDate) {
            errors.nearExpDate = 'Please select date'
        }
        if(!quantity) {
            errors.quantity = 'Please enter quantity'
        }
        if(!position) {
            errors.position = 'Please select product position'
        }
        return {
            errors,
            isValid: Object.keys(errors).length === 0
        }
    }

    render() {
        const {description, category, expDate, nearExpDate, quantity, error} = this.state
        return (
            <div className={classes.popup}>
                <span className={classes.times} onClick={this.props.visibility}>x</span>
                <form onSubmit={this.submitForm}>
                    <input 
                        type='text'
                        name='description' 
                        placeholder='Product Description'
                        className={error.description && classes.is_invalid}
                        value={description}
                        onChange={this.handleChange}
                    />
                    {error.description && <div className={classes.invalid_feadback}>{error.description}</div>}
                    <div className={classes.wrapper}>
                        <label>Category</label>
                        <div>
                            <select name='category' className={error.category && classes.is_invalid} value={category} onChange={this.handleChange}>
                                <option>Select</option>
                                <option value='Frozen'>Frozen</option>
                                <option value='Tea/Coffee'>Tea/Coffee</option>
                                <option value='Baby Care'>Baby Care</option>
                                <option value='Personal Care'>Personal Care</option>
                                <option value='Hand Wash and Sanitizer'>Hand Wash and Sanitizer</option>
                                <option value='Package Food'>Packageg Food</option>
                                <option value='Chocolate'>Chocolate</option>
                                <option value='Beverage'>Beverage</option>
                            </select>
                            {error.category && <div className={classes.invalid_feadback}>{error.category}</div>}
                        </div>
                        <label>Expire</label>
                        <div>
                            <input 
                                type='date'
                                name='expDate'
                                className={error.expDate && classes.is_invalid}
                                value={expDate}
                                onChange={this.handleChange}
                            />
                            {error.expDate && <div className={classes.invalid_feadback}>{error.expDate}</div>}
                        </div>
                        <label>Near Expire</label>
                        <div>
                            <input 
                                type='date'
                                name='nearExpDate'
                                className={error.nearExpDate && classes.is_invalid}
                                value={nearExpDate}
                                onChange={this.handleChange}
                            />
                            {error.nearExpDate && <div className={classes.invalid_feadback}>{error.nearExpDate}</div>}
                        </div>
                        <label>Quantity</label>
                        <div>
                            <input 
                                type='text'
                                name='quantity'
                                className={error.quantity && classes.is_invalid}
                                value={quantity}
                                onChange={this.handleChange}
                            />
                            {error.quantity && <div className={classes.invalid_feadback}>{error.quantity}</div>}
                        </div>
                    </div>
                    <div className={classes.positions}>
                        <label className={classes.container}>Back Store
                            <input
                                type='radio'
                                name='position'
                                value='Back store'
                                onChange={this.handleChange}
                            />
                            <span className={classes.checkmark}></span>
                        </label>
                        <label className={classes.container}>Floor
                            <input
                                type='radio'
                                name='position'
                                value='Floor'
                                onChange={this.handleChange}
                            />
                            <span className={classes.checkmark}></span>
                        </label>
                        {error.position && <div className={classes.invalid_feadback}>{error.position}</div>}
                    </div>
                    <div className={classes.btn_wrapper}>
                        <button className={classes.submit_btn}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Popup;
