import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data';
const ProdcutContext = React.createContext();
const ProductConsumer = ProdcutContext.Consumer;

class ProductProvider extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            products: [],
            detailProduct: '',
            handleDetail : this.handleDetail,
            addToCart: this.addToCart
        }
    }

    componentDidMount(){
        this.setState({
            products : storeProducts
        })
    }

    getItem=(id)=>{
        const product = this.state.products.find((item)=>item.id===id);
        return product;
    }

    handleDetail=(id)=>{
        const product = this.getItem(id);
        this.setState(()=>{
           return {
               detailProduct: product
            }
        })
    }

    addToCart=(id)=>{
        console.log(`id is ${id}`);
    }

    render() {
        return (
            <ProdcutContext.Provider value={{...this.state,handleDetail:this.handleDetail}}>
                {this.props.children}
            </ProdcutContext.Provider>
        )
    }
}

export {ProductProvider,ProductConsumer};


