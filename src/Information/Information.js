import React, { Component } from 'react';
import classes from './information.module.css';

export default class Information extends Component {

    dateFormate = (spcDate) => {
        let inpDateDisplay = new Date(spcDate);
        let monthArr = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec']
        let newFormateDate = `${inpDateDisplay.getDate()} ${monthArr[inpDateDisplay.getMonth()]}, ${inpDateDisplay.getFullYear()}`
        return newFormateDate
    }

    delete = () => {
        this.props.deleteProduct(this.props.ind)
        this.props.callInfo()
    }

    render() {
        const {category, expDate, nearExpDate, position, quantity} = this.props
        // this.dateFormate()
        return (
            <div className={classes.container}>
                <div className={classes.info}>
                    <p>Product category : <span>{category}</span></p>
                    <p>Expire in : <span>{this.dateFormate(expDate)}</span></p>
                    <p>{position === 'Floor' ? 'Near expire : ' : 'Send to floor : '} <span className={classes.near_exp}>{this.dateFormate(nearExpDate)}</span></p>
                    <p>Product(s) available in <span>{position}</span></p>
                    <p>Current Stock: <span>{quantity}</span></p>
                    <div className={classes.wrapper}>
                        <button onClick={this.props.callInfo} className={classes.cancel_btn}>Cancel</button>
                        <button onClick={this.delete} className={classes.delete_btn}>{position === 'Floor' ? 'Sold/Out' : 'Delete'}</button>
                    </div>
                </div>
            </div>
        )
    }
}
