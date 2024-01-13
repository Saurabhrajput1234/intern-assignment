import React, { createContext, useEffect, useState } from "react";

export const Context = createContext({
  productList: [],
  fetching: false,
  setResponse:{},
  response :[]
});

const ContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [response,setResponse] = useState("")
  console.log("this responce",response)
  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductList(data.products);
        setFetching(false);
      });
  }, []);

  return (
    <>
      <Context.Provider value={{ productList, fetching,setResponse,response}}>
        {children}
      </Context.Provider>
    </>
  );
};

export default ContextProvider;
