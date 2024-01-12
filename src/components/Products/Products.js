import React,{useContext} from 'react';
import "./Products.css";
import { Context } from '../contextProvider/ContextProvider';
import LoadingSpinner from './LoadingSpinner';
import ProductCard from './ProductCard';



const Products = (props) => {

    const {productList,fetching}= useContext(Context)
   
    
  return (<>
  {fetching && <LoadingSpinner/>} 


  {!fetching && <div className='products'>
        {productList.map((productItem) =>(
          <ProductCard key={productItem.id} product = {productItem} handleAddProduct={props.handleAddProduct} />
            
        ))}
        </div>
  }
        
        </> 
  )
      }
    export default Products;




