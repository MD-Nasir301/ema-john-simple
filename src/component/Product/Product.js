import React from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {

    const {name ,seller,price,img,stock,key} = props.product


    return (
        <div className="SingleProduct">
            <div className="img">
                  <img src={img} alt=""/>  
            </div>
              
            <div className="productDetails">
                <h4><Link to={"/product/"+key}>{name}</Link></h4>
                <p>by: {seller} </p>
                <br/>
                <h4>Price: ${price} </h4>
                <p> <small> only {stock} left in stock-order soon </small> </p>

                {props.showAddToCard && <button onClick={ () => props.addProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} />  add to cart</button>}

            </div>
                
        </div>
    );
};

export default Product;