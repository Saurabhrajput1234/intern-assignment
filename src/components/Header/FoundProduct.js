import React from 'react'

const FoundProduct = (props) => {

   const product = props.product;

   
   
   
  return (
    <div className='SearchProduct' style={{height:"333px",width:"333px",background:"yellow"}}>
      <div className="cart-Item-header">
             your Cart
             <button className='cart-remove' onClick={props.onClose}>hvjhv×</button>
      </div> 

      <h3>Found Product</h3>
      <img src={product.images[3]} alt="" />
      
      <p>Name: {product.title}</p>
    </div>
  );
};
export default FoundProduct;
