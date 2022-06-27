import React, { Component } from 'react'
import classes from './header.module.css';
import logo from '../img/shwapno-logo.jpg'

class Header extends Component {
    render() {
        return (
            <header className={classes.top_header}>
                <div className='container'>
                    <div className={classes.wrapper}>
                        <div className={classes.logo}>
                            <img src={logo} alt='Shwapno Logo' />
                        </div>
                        <div className={classes.credit}>
                            <h3>Developed by</h3>
                            <span>Hridoy Saha</span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;