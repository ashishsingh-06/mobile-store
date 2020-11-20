import React, { Component } from 'react'
import {Link} from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <Link to='/' className="nav-link">
                    <i className='fa fa-mobile navbar-brand'></i>
                    <span className="nav-brand">Mobile Store</span>
                </Link>
                <div className="navbar-row">
                    <Link to='/' className="nav-link">
                        <button className="navbar-btn">Prodcuts</button>
                    </Link>
                    <Link to='/Cart' className="nav-link">
                        <button className="navbar-btn"><i className="fa fa-cart-plus"></i> Cart</button>
                    </Link>
                </div>
            </nav>
        )
    }
}

export default Navbar;