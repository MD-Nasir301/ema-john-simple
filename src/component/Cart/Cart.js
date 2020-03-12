import React from 'react';

const Cart = (props) => {
     const cart = props.cart

     const preTotal =cart.reduce((total, prd) => total+prd.price,0).toFixed(2)
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


    return (
        <div>

            <h5>Product Price: {total}</h5>
            <h5>Shipping Cost: {shipping}</h5>
            <h5>Tax : {tax}</h5>
            <h5>Total Price: {total+tax+shipping}</h5>
        </div>
    );
};

export default Cart;