import React,{useContext,useEffect} from 'react'
import Product from './Product'
import Loder from "../Home/Loder"
import AppContext from '../context/appContext'
function ProductPage() {
    const context = useContext(AppContext)
    const {productBycategory,productByIntrest,allProduct} = context;
    useEffect(() => {
        if(productBycategory.length===0)
        allProduct();
    }, [])
    const amount = Math.floor((Math.random() * (25 - 0) + 0) * (Math.random() * (25 - 0) + 0));
    return (
        <>
        <div className="productCategary">
            <button onClick ={()=>{allProduct()}} className="category__btn">All</button>
            <button onClick ={() => {productByIntrest("electronics")}} className="category__btn">Electronics</button>
            <button onClick ={() => {productByIntrest("jewelery")}} className="category__btn">Jewelery</button>
            <button onClick ={() => {productByIntrest("men's clothing")}} className="category__btn">Men's fasion</button>
            <button onClick ={() => {productByIntrest("women's fasion")}} className="category__btn">Women's fasion</button>
        </div>
        <div className='productPage'>
            {productBycategory.length>0?productBycategory.map((ele) => {
             return <Product key = {Math.random()} url ={ele.image} title ={ele.title} description ={ele.description} rating ={ele.rating} price = {ele.price} amount = {amount+ele.price}/>
            }):<Loder/>}
        </div>
        </>
    )
}

export default ProductPage
