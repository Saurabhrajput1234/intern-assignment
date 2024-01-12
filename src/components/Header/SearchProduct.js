import React, { useContext, useState } from 'react'
import { Context } from '../contextProvider/ContextProvider';
import ModalProduct from '../modal/ModalProduct';

const SearchProduct = (props) => {
  const {productList}= useContext(Context);
  console.log("saurabh",productList);

  const [searchProduct,setSearchProduct]= useState("");
  const [foundProduct, setFoundProduct] = useState('');

  const handleSearch = (e) =>{
    e.preventDefault();
    const lowerCaseSearchProduct = searchProduct.toLowerCase();
    const foundProduct = productList.find(product =>product.title.toLowerCase()=== lowerCaseSearchProduct);
    console.log("this is yor product name",productList[0].title.toLowerCase())
   setFoundProduct(foundProduct || null);
   
  }



 

    console.log("this is your search product",foundProduct);
  
  return (
    <div>
    <form className="searchBox" role="search" style={{display:"flex"}} onSubmit={handleSearch} >
        <input className="searchInput" name='SearchName' type="search" placeholder="Search" onChange={(e)=> setSearchProduct(e.target.value)} aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit"   >Search</button>
      </form>
      {foundProduct ? (
        props.onShow(),
        
        <ModalProduct product={foundProduct} show={props.show} onClose={props.onClose}/>
        
      ) : (
        ""
      )}
      
    </div>
  )
}

export default SearchProduct
