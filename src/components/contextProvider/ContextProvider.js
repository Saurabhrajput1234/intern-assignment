
import React,{createContext, useEffect,useState} from 'react';


export const Context = createContext({
  productList:[],
  fetching: false,
});





const ContextProvider = ({children}) => {
  

  const[productList,setProductList]=useState([])
  const [fetching,setFetching]= useState(false);
  useEffect(()=>{
    setFetching(true);
    fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then( data =>{
    setProductList(data.products)
    setFetching(false);
  });
  },[])



  

console.log("this is product list",productList)

  return (
    <>
    <Context.Provider value={{productList,fetching}}>
    {children}

    </Context.Provider>
      
    </>
  )
}

export default ContextProvider
