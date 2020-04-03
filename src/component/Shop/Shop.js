import React, { useState, useEffect } from 'react';
import './Shop.css'
import Product from '../Product/Product.js'
import Cart from '../Cart/Cart.js';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';


const Shop = () => {

 
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3100/product')
        .then(res => res.json())
        .then(data => 
            setProducts(data)
            )
    },[])

    const [cart, setCart] = useState([])

    useEffect(()=> {
        const saveData = getDatabaseCart();
        const productKey = Object.keys(saveData);

        if(products.length){
             const preCart = productKey.map(productKey => {
            let product = products.find(pdkey => pdkey.key === productKey )
            product.quantity = saveData[productKey]
            console.log(product);
            return product

        })
        setCart(preCart)
        }

    },[])


    const addProduct = (product) => {
        
        let count = 1;
        const sameProduct = cart.find(pd => pd.key === product.key)
        
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;

            const others = cart.filter(pd => pd.key !== product.key)
            const newCart = [...others,sameProduct]
            setCart(newCart)

        }else {
              product.quantity = 1;
               const newCart = [...cart,product];
               setCart(newCart)
        }
    
        addToDatabaseCart(product.key, count)
    }
    return (
        <div className="shop-container">
          <div className="product-area">
             {
                products.map(pd => <Product key={pd.key} showAddToCard = {true} addProduct ={addProduct} product={pd}></Product> )
             }  
             
          </div>  
          <div className="cart-area">
             <Cart cart={cart}>
             <Link to="/review"><button className="addToCard">Review</button></Link>

             </Cart>
          </div>

       
  
        </div>
    );
};

export default Shop;