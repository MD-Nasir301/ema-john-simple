import React from 'react';
import './ReviewItems.css'

const ReviewItems = (props) => {
    const {name,quantity,img,key ,price} = props.cardProduct
    return (

        <div className='SingleProduct'>
                <div className="img">
                    <img src={img} alt=""/>
                </div>
                <div className="productDetails">
                    <h4> Name: {name} </h4>
                    <h4> Price: {price} </h4>
                    <h4> Quantity: {quantity} </h4>
                    <button onClick={() => props.removeItem(key)} className='addToCard'>Remove Item</button>
                </div>
        </div>
        

    );
};

export default ReviewItems;