import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';

class Details extends Component {
    render() {
        return (
            <div className="container">
                <ProductConsumer>
                    {
                        (value)=>{
                            const {id,title,company,img,price,info,inCart} = value.detailProduct

                            return (
                                <div className="detail-row">
                                    <div className="detail-img">
                                        <img src={img}></img>
                                    </div>
                                    <div className="detail-description">
                                        <h2>{title}</h2>
                                        <h3>Made By - {company}</h3>
                                        <h4>Price - ${price*20}</h4>
                                        <h5>Some info about the product</h5>
                                        <p>{info}</p>
                                        <div className="btn-wrapper">
                                            <Link to='/'>
                                                <button className="btn-back">Back To Products</button>
                                            </Link>
                                            <button className="btn-cartBtn" disabled={inCart?true:false} onClick={()=>{value.addToCart(id)}}>
                                                {inCart?"inCart":'Add To Cart'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                </ProductConsumer>
            </div>
        )
    }
    
}

export default Details
