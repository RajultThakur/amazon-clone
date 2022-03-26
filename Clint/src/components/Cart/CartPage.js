import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartProduct from './CartProduct'
import AppContext from '../context/appContext'
import { useState } from 'react'
import CheckOut from './CheckOut'
function CartPage () {
  const context = useContext(AppContext)
  const { cartProducts, getCartProduct, total,cartTotal } = context;
  const fun = async () => {
    if (localStorage.getItem('token')) {
      await getCartProduct();
    }
  }
  useEffect(() => {
    fun();
  }, [])
  return (
    <div className='cart__product'>
      <div>
        {cartProducts.length === 0 ? <h1>Your cart is empty! <Link to="/productpage" style={{ fontSize: "20px", textDecoration: "none" }}>Shop Now</Link> </h1> : cartProducts.map((ele) => {
          return <CartProduct key={Math.random()} price={ele.price} url={ele.url} title={ele.title} count={ele.count} />
        })}
        <div className='subtotal'>
          <h5>SubTotal({cartTotal} Items) : <span style={{ fontWeight: 'bolder' }}><span>&nbsp;&nbsp;</span><i style={{ color: 'black' }} className="fas fa-rupee-sign"></i>{total.toFixed(2)}</span></h5>
        </div>
      </div>
      <CheckOut/>

    </div>
  )
}

export default CartPage
