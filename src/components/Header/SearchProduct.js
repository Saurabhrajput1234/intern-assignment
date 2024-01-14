import React, { useContext, useState } from 'react'
import { Context } from '../contextProvider/ContextProvider';
import ModalProduct from '../modal/ModalProduct';

const SearchProduct = () => {
  const { productList,SetShow,show } = useContext(Context);

  const [searchProduct, setSearchProduct] = useState("");
  const [foundProduct, setFoundProduct] = useState('');
   
  const handleInput = (e)=>{
    setSearchProduct(e.target.value)
  }


  const handleSearch = (e) => {
    e.preventDefault();
    const lowerCaseSearchProduct = searchProduct.toLowerCase();

    const foundProduct = productList.find(product => product.title.toLowerCase() === lowerCaseSearchProduct);
    setFoundProduct(foundProduct || null);
    SetShow(true)
  }

  
 
  return (
    <>
    <div>
      <form className="searchBox" role="search" style={{ display: "flex", "padding-right": "264px" }} onSubmit={handleSearch} >
        <div style={{ width: "45px", display: "flex" }} >
          <input className="searchInput" style={{ width: "300px" }} name='SearchName' type="search" placeholder="Search" onChange={handleInput} aria-label="Search" />
          <button className="button1" type="submit" style={{ width: "67px", height: "45px" }}  >Search</button></div>
      </form>
      {foundProduct  ? (
        
       
       
        <ModalProduct product={foundProduct} show={show} setShow={SetShow}/>
        
      ) : (
        ""
      )}

    </div>
    </>
  )
}

export default SearchProduct
