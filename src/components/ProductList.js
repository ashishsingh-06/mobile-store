import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../Context';

class ProductList extends Component {

    render() {
        return (
            <>  
                <div>
                    <div className="container">
                        <Title title="Our Products"></Title>
                        <div className="product-row">
                            <ProductConsumer>
                                {
                                    (value)=>{
                                        return value.products.map((product)=>{
                                            return  <Product key={product.id} product={product}></Product>
                                        })
                                    }
                                }
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProductList 




