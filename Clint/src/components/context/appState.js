import React,{useRef, useState} from 'react'
import AppContext from './appContext'
import Data from '../ProductData/Data'
const url ='http://localhost:5000/auth'
const url2 ='http://localhost:5000/product'
function AppState(props) {
    const [logedUser,setLogedUser] = useState({name:"",email:""})
    const [category, setCategory] = useState([]);
    const [productBycategory,setProduct] = useState([]);
    const [user,setUser] = useState({url:"",title:"",rating:"",count:"",price:"",discription:""})
    const [cartTotal,setCartTotal] = useState(0);
    const ref = useRef(null)
    const [cartProducts,setCartProducts] = useState([]);
    const [cartProduct,setCartProduct] = useState({url:'',price:0});
    const [total,setTotal] = useState(0);
    const categories = async() => {

      setCategory([
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
        ]);
            
    }
    const allProduct = () => {
      setProduct(Data);
    }

    const productByIntrest = (category) => {
      setProduct([]);
      const sortData = Data.filter((ele) => {
        return ele.category === category;
      })
      setProduct(sortData);
  }

  const getLogedUserDetails = async() => {
    const response = await fetch(`${url}/details`, {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json',
        "auth-token": localStorage.getItem("token")
        ,
      },
    })
    const data =await response.json();
    setLogedUser({name:data.mes.name,email:data.mes.email});
    localStorage.setItem("userInfo",JSON.stringify(data.mes));
    
  }

  const getCartProduct = async() => {
    const response = await fetch(`${url2}/addtocart`, {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json',
        "auth-token": localStorage.getItem("token")
        ,
      },
    })
    let data  = await response.json();
    setTotal(data.total);
    setCartTotal(data.totalProduct);
    data = data.mes;
    // console.log(data.length)
    setCartProducts(data);
  }

  const addToCart = async(url,title,price,flag) => {
    const response = await fetch(`${url2}/addtocart`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({url,title,price})
    })
    const data = await response.json();
    setCartProduct({url:data.mes.url,price:data.mes.price,count:data.mes.count});
    if(data.success === false)window.alert("item already in your cart")
    else{
      if(flag && data.mes!=="limitOver")
      ref.current.click();
      if(data.mes==='limitOver') window.alert("You can add max upto 5 item")
      getCartProduct();
    }
    }
  
  const deleteProduct = async(url) =>{ 
    const response = await fetch(`${url2}/addtocart`, {
      method: 'DELETE',
      headers: {
        "Content-Type": 'application/json',
        "auth-token": localStorage.getItem("token"),
      },
      body:JSON.stringify({url})
    })
    let data  = await response.json();
    data = data.mes;
    console.log(data.length)
    setCartTotal(data.length);
    localStorage.setItem("cartTotal",data.length);
    setCartProducts(data);
  }

  const removeOne = async(url) => {
    await fetch(`${url2}/removeone`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        "auth-token": localStorage.getItem("token"),
      },
      body:JSON.stringify({url})
    })
    getCartProduct();
  }

    return (
        <AppContext.Provider value={{total,removeOne,deleteProduct,setCartProducts,cartProducts,getCartProduct,ref,cartProduct,addToCart,user,setUser, logedUser, getLogedUserDetails,categories,category,productByIntrest,productBycategory,allProduct,cartTotal}}>
      {props.children}
    </AppContext.Provider>
    )
}

export default AppState
