import React,{useContext} from 'react'
import appContext from '../context/appContext'
function CheckOut () {
    const context = useContext(appContext)
    const {total} = context
    return (
        <div className='checkout'>
            <div style={{marginBottom:"20px"}}><p style={{color:'#42818D',fontSize:"13px"}}>{total>=499?<p>You are eligible for FREE Delivery</p>:<p>Add {(499-total).toFixed(2)} to get Free Delivery</p>}</p>
            <p style={{fontSize:'13px'}}>select this option to checkout</p></div>
            <div className="total">
                <h5>Subtotal (5 Items):<i style={{ color: 'black' }} className="fas fa-rupee-sign"></i>{total}</h5>
            </div>
            <div>
                <button className='cart_btn cart' style={{paddingInline:'80px',background: "#F7CA00" }} >Proced to Buy</button>
            </div>
            <div style={{marginTop:'10px'}}>
            <details style={{border: "1px solid #dfdfdf",
    width: "248px",
    paddingInline: "10px",
    paddingBlock:"5px"}}>  
<summary>EMI Available</summary>  
<p>Your order qualifies for EMI with valid credit cards (not available on purchase of Gold, Jewelry, Gift cards and Amazon pay balance top up).</p>  
</details>  
            </div>
        </div>
    )
}

export default CheckOut
