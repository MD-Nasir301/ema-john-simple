import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import ReviewItems from '../ReviewItems/ReviewItems';
import happyImage from  '../../images/giphy.gif'
import Cart from '../Cart/Cart';
import  './Review.css'


const Review = () => {

    const [cart, setCart] = useState([])
    const [orderPlace, setOrderPlace] = useState(false)

    const handlePlaceOrder = ()=>{
        setCart([])
        setOrderPlace(true)
        processOrder()
    }

    const removeItem = (key) => {
        const newCart = cart.filter(pd => pd.key !== key )
        setCart(newCart)
        removeFromDatabaseCart(key)
    }

    useEffect(()=> {

        const saveCard = getDatabaseCart();
        const productKey = Object.keys(saveCard)

        fetch('http://localhost:3100/getProductsByKey',{
            method: 'post',
            body: JSON.stringify(productKey),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
          })
        .then(res => res.json())
        .then(data => {
            const cardProduct = productKey.map(key => {
            const product = data.find(pd => pd.key === key);
            product.quantity = saveCard[key]
            return product;
          });
            setCart(cardProduct)
        })
        

    },[])


    let thankyou  ;
      if(orderPlace){
        thankyou =  <img className='thankyouImg' src={happyImage} alt=""/>
    }

    return (
        <div className="shop-container">
        <div className='products' >
                {
                    cart.map(pd => <ReviewItems removeItem={removeItem} key={pd.key} cardProduct={pd}></ReviewItems> )

                }
                {
                    thankyou
                }
        </div>
        <div className="cart-area">
            <Cart cart={cart}>
           <button onClick={handlePlaceOrder} className="addToCard">Place Order</button>
            
            </Cart>
        </div>

        </div>

    );
};

export default Review;