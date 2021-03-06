import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import { useState } from 'react';

const ProductDetails = () => {
    const {productKey} = useParams()
    const [product,setProduct] = useState(null);

    useEffect(()=>{
        fetch('https://blooming-thicket-11100.herokuapp.com/product/'+productKey)
        .then(res=> res.json())
        .then(data => 
            setProduct(data)
            )
        },[])
    

    return (
        <div>
            {
                product && <Product showAddToCard ={false} product={product}></Product>
                            
            }
        </div>
    );
};

export default ProductDetails;
