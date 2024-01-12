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

  
  return (
    <div>
    <form className="searchBox" role="search" style={{display:"flex","padding-right":"264px"}} onSubmit={handleSearch} >
    <div style={{width:"45px",display:"flex"}} >
        <input className="searchInput" style={{width:"300px"}}  name='SearchName' type="search" placeholder="Search" onChange={(e)=> setSearchProduct(e.target.value)} aria-label="Search"/>
        <button className="button1" type="submit"  style={{width:"67px",height: "45px" }}  >Search</button></div>
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
