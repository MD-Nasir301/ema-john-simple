import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {

    const handleAddInventory = ()=>{
        const product = fakeData
        console.log("before post",product.length,product);
        fetch('http://localhost:3100/addProduct',{
            method: 'post',
            body: JSON.stringify(product),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
          }).then((res)=> {
            return res.json();
          }).then((data) => {
           console.log('After success post', data);
          });
        }
        
    
    return (
        <div>
            <h1>This is Inventory New</h1>
            <button onClick= {handleAddInventory} >add Inventory</button>
        </div>
    );
};

export default Inventory;