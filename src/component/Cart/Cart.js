import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import {UserContext} from '../../App'
import {useAuth} from '../login/useAuth'

const Cart = (props) => {
     const cart = props.cart
    //  const user = useContext(UserContext)
    const auth = useAuth()
    console.log(auth);

     const preTotal =cart.reduce((total, prd) => total+prd.price*prd.quantity,0).toFixed(2)
     const total =Number(preTotal)
  

     let shipping = 0;
    
     if(total>35){
         shipping = 0
     }
     else if (total>15){
        shipping = 4.50
     }
     else if (total>0){
         shipping = 12.50
     }

        let preTax = (total/10).toFixed(2);
        let tax = Number(preTax)
    // let total = 0;
    // for(var i=0; i<cart.length; i++){
    //     const prd = cart[i];
    //      total = total + prd.price;
    // }

     const grandTotal = Number((total+tax+shipping).toFixed(2)) ;

    return (
        <div>
            <h5>Product item: {cart.length} </h5>
            <h5>Product Price: {total}</h5>
            <h5>Shipping Cost: {shipping}</h5>
            <h5>Tax : {tax}</h5>
            <h5>Total Price: {grandTotal}</h5>

            {
                props.children
            }     
            {/* <p> {user} </p>        */}
        </div>
    );
};

export default Cart;