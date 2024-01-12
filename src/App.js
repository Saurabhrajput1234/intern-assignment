import React,{useState} from "react";
import Header from "./components/Header/Header";
import Routers from "./components/Routers/Routers";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Modal from "./components/modal/Modal";
import ContextProvider from "./components/contextProvider/ContextProvider";

// import "bootstrap/dist/css/bootstrap.min.css";




 




const App = (props)=>{

 
  
    
 const [show,setShow]= useState(false);
 const [show1,setShow1]= useState(false)

 const [cartItem,setCartItems] = useState([])
 

 const handleAddProduct = (product) =>{
  const productExist = cartItem.find((item)=> item.id === product.id);
  if(productExist){
    setCartItems(
      cartItem.map((item)=>
      item.id === product.id ? {...productExist,quantity:productExist.quantity+1}:item
      )
    );
  }else{
    setCartItems([...cartItem,{...product,quantity: 1}]);
  }
 }


const handleRemoveProduct =(product)=>{
  const productExist = cartItem.find((item)=> item.id === product.id);
  if(productExist.quantity ===1){
    setCartItems(cartItem.filter((item)=> item.id !== product.id));
  }
  else
  setCartItems(
    cartItem.map((item)=>
    item.id === product.id ? {...productExist,quantity:productExist.quantity-1}:item
    )
  );
}
const handleCartClear = ()=>{
  setCartItems([]);
}
console.log("thiese are",cartItem)
console.log("show1 app",show1)
console.log("show app",show)

  
  return (<>
  <div>
    <div id="signInDiv"></div>
    <ContextProvider>
    
    <Router>
      
    <Header cartItem ={cartItem} onShow = {()=> setShow(true)}  show = {show} onClose={()=> setShow(false)} onShow1 = {()=> setShow1(true)}  show1 = {show1} onClose1={()=> setShow1(false)} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClear={handleCartClear} />
    <Routers  show = {show}   cartItem={cartItem} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClear={handleCartClear}/>
    <Modal show1 = {show1} onClose1 = {()=> setShow1(false)}   cartItem = {cartItem} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClear={handleCartClear}> 
    </Modal>

    {/* <ModalProduct show = {show} onClose = {()=> setShow(false)} onShow = {()=> setShow(true)} > 
    </ModalProduct> */}


    <Footer/>
    

    {/* <SearchData/> */}
    
    </Router>
    </ContextProvider>
 
  </div>

  </> 
  );
}

export default App;
