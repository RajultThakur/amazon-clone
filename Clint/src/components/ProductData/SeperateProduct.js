import React,{useContext,useState} from 'react'
import appContext from '../context/appContext'
import LockOutlinedIcon from '@material-ui/icons/Lock';
import PersonPinCircleOutlinedIcon from '@material-ui/icons/PersonPinCircleOutlined';
import AddedToCart from '../Cart/AddedToCart';
function SeperateProduct () {
    let data = JSON.parse(localStorage.getItem("productInfo"));
    const context  = useContext(appContext)
    const {addToCart,cartProduct} = context
    return (
        <div className='product__container'>
            <div className="product_image">
                <img src={data.url} alt="not available" />
            </div>
            <div className="product__information">
                <div className="title">
                    <h2>{data.title}</h2>
                </div>
                <div className="rating title">
                    <p style={{
                        fontSize: "18px",
                        fontWeight: "800",
                        color: "#ff9f35"
                    }}>{data.rating}/5 <span style={{
                        fontSize: "15px",
                        fontWeight: "500",
                        marginLeft: "20px",
                        color: "#007185"

                    }}>{data.count}+ ratings</span></p>
                    <hr style={{ margin: "2px" }} />
                </div>
                <div className=" title product__pricing">
                    <div className="final__price">

                        <p><span className='cb' style={{ fontSize: "14px" }}>List Price : </span><span style={{ textDecoration: "line-through" }}>INR {(data.amount).toFixed(2)}/</span></p>
                        <p><span className='cb' style={{ fontSize: "14px", marginLeft: "26px" }}>Price : </span><span style={{ fontSize: "19px", color: "#B12704" }}>INR {data.price}/</span></p>
                        <p><span className='cb' style={{ fontSize: "14px" }}>You save : </span><span style={{ fontSize: "15px", color: "#B12704" }}>INR {((data.amount) - (data.price)).toFixed(2)}/ ({((data.amount-data.price)/(data.amount/100)).toFixed(2)}%)</span></p>
                    </div>
                    <p className='cb' style={{ fontSize: "14px" }}><i>i</i> Shiping charges may not be applied if amount of purches is more than <span style={{ color: "#B12704" }}>INR-499/</span> otherwise shiping charge may be <span style={{ color: "#B12704" }}>INR-40/</span></p>
                    <hr style={{ margin: "2px" }} />
                </div>
                <div className=" title product__discription">
                    <h4>About the product</h4>
                    <p >{data.description}</p>
                </div>
            </div>
            <div className="buying__details">
                <div className="buying__info">
                    <div style={{ marginBottom: "30px" }}>
                        <span style={{ color: "#B12704", fontSize: "21px" }}>INR {data.price}</span>
                        <p style={{ fontSize: "13px", color: 'gray' }}><i>i</i>{data.price>=499?"Hurre":"Ohh"} you are {data.price<499&& "not"} eligible for free shiping {data.price>=499 ? "all over india":<span> add <span style={{fontWeight:"bold",color:"#B12704"}}>{499-data.price}</span> more to got free shiping</span>}</p>
                    </div>
                    <div className="delivery">
                        <p style={{ fontSize: "14px", fontWeight: 'bold' }}><span style={{
                            color: "rgb(0, 113, 133)", fontWeight: "lighter"
                        }}>Delivery </span>Estimate time around 5-8 Days</p>
                    </div>
                    <div className="india">
                        <p style={{ fontSize: "12px", marginBlock: "12px" }}><PersonPinCircleOutlinedIcon style={{ fontSize: '20px', color: "gray" }} />Delivery to india</p>
                    </div>
                    <div className="purches">
                        <div className="add_to_cart">
                            <button disabled={cartProduct.count>4} onClick={()=>{addToCart(data.url,data.description,data.price,1)}} style={{ background: "#F7CA00" }} className="cart cart_btn">
                                Add to cart
                            </button>
                            <button className="cart ">
                                Buy now
                            </button>
                        </div>
                        <div style={{ marginBlock: '15px' }}>
                            <h5 style={{ fontSize: "15px" }}><LockOutlinedIcon className='lock' />Secure transaction</h5>
                            <p style={{ fontSize: "12px" }}><span style={{ color: "gray" }}>Ships by </span><span style={{ marginLeft: "4px" }}>Amazon.com</span></p>
                            <p style={{ fontSize: "12px" }}><span style={{ color: "gray" }}>Sold by </span><span style={{ marginLeft: "10px" }}>Amazon.com</span></p>
                        </div>
                        <div>
                            <p style={{ fontSize: "14px" }}><span style={{ marginRight: "4px", fontSize: "14.5px" }}>Return policy:</span><span style={{ color: "rgb(0, 113, 133)" }}>Return within 15 after delivered.</span></p>
                            <p style={{ fontSize: "14px" }}><span style={{ marginRight: "4px", fontSize: "14.5px" }}>Support:</span><span style={{ color: "rgb(0, 113, 133)" }}>Free Amazon product support included</span></p>
                        </div>
                    </div>
                </div>
            </div>
           <AddedToCart/>
        </div>
    )
}

export default SeperateProduct
