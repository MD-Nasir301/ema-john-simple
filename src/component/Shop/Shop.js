import React, { useState } from 'react';
import fakedata from '../../fakeData'
import './Shop.css'
import Product from '../Product/Product.js'
import Cart from '../Cart/Cart.js';


const Shop = () => {

    const first15 = fakedata.slice(0,15);
    const [products, setProducts] = useState(first15);

    const [cart, setCart] = useState([])
    
    const addProduct = (product) => {
        
        const newCart = [...cart,product];
        setCart(newCart)
    }
    return (
        <div className="shop-container">
          <div className="product-area">
             {
                products.map(pd => <Product addProduct ={addProduct} product={pd}></Product> )
             }  
             
          </div>  
          <div className="cart-area">
             <Cart cart={cart}></Cart>
          </div>

       
  
        </div>
    );
};

export default Shop;