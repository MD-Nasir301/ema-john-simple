import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../Cart/Cart';
import  './Review.css'
import { Link } from 'react-router-dom';
import { useAuth } from '../login/useAuth';


const Review = () => {

    const [cart, setCart] = useState([])
    const auth = useAuth()



    const removeItem = (key) => {
        const newCart = cart.filter(pd => pd.key !== key )
        setCart(newCart)
        removeFromDatabaseCart(key)
    }

    useEffect(()=> {

        const saveCard = getDatabaseCart();
        const productKey = Object.keys(saveCard)

        fetch('https://blooming-thicket-11100.herokuapp.com/getProductsByKey',{
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




    return (
        <div className="shop-container">
        <div className='products' >
                {
                    cart.map(pd => <ReviewItems removeItem={removeItem} key={pd.key} cardProduct={pd}></ReviewItems> )

                }
                
                {
                    !cart.length && <h1>Add some product</h1>
                }
        </div>
        <div className="cart-area">
            <Cart cart={cart}> 
                <Link to="shipment">
                    {
                        auth.user ?
                        <button className="main-button">Proceed Checkout</button>
                        :
                        <button className="main-button">Login to Proceed</button>
                    }
                </Link>
            </Cart>
        </div>

        </div>

    );
};

export default Review;