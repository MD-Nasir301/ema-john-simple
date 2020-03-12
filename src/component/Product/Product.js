import React from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {

    const {name ,seller,price,img,stock} = props.product


    return (
        <div className="SingleProduct">
            <div className="img">
                  <img src={img} alt=""/>  
            </div>
              
            <div className="productDetails">
                <h4><a href="">{name}</a></h4>
                <p>by: {seller} </p>
                <br/>
                <h4>Price: {price} </h4>
                <p> <small> only {stock} left in stock-order soon </small> </p>
                <button onClick={ () => props.addProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} />  add to cart</button>
            </div>
                
        </div>
    );
};

export default Product;