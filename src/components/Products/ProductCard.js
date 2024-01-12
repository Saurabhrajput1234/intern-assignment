import React from 'react'
import "./Products.css";

const ProductCard = (props) => {
  const product = props.product;
  return (
    <>
    <div key={product.id} className="card">
                <div>
                <img className="card-image" src={product.images[3]} alt={product.title} />
                </div>
                <div>
                  <h3 className='product-name'>{product.title}</h3>
                </div>
                <div>
                  <h3 className='product-price'>${product.price}</h3>
                </div>
                <div>
                  <button className='product-add-button'onClick={()=> props.handleAddProduct(product)}>add to Cart</button>
                </div>
            </div>

      
    </>
  )
}

export default ProductCard
