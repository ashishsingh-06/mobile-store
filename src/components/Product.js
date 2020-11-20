import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';
import PropTypes from 'prop-types';

class Product extends Component {
    render() {
        const {id,title,img,price,inCart} = this.props.product;
        return (
            <div className="card-wrapper">
                <ProductConsumer>
                    {(value)=>{

                        return (
                            <div className="card">    
                                <div className="img-container" onClick={()=>value.handleDetail(id)}>
                                    <Link to='/details'>
                                        <img src={img} alt="product" className="card-img"></img>
                                    </Link>
                                    <button className="cart-btn" disabled={inCart ? true : false} onClick={()=>{console.log('added to the cart')}}>
                                        {inCart ? (<p className="" disabled>inCart</p>):(<i className="fa fa-cart-plus cart-icon"></i>)}
                                    </button>
                                </div>
                                <div className="card-footer">
                                    <p className="title">{title}</p>
                                    <p className="price">${price*20}</p>
                                </div>
                            </div> 
                        )}
                    }
                </ProductConsumer>
            </div>
        )
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool,
    }).isRequired
}

export default Product

