import React from 'react'
import "./Modal.css"
import FoundProduct from '../Header/FoundProduct';



const ModalProduct= (props) => {
  
  if(!props.show){
    return null;
  }
 

  return (
    <> <div 
    className="modal">

     <FoundProduct product={props.product} show = {props.show} onClose={props.onClose} />
    </div>
      
    </>
  )
}

export default ModalProduct;
