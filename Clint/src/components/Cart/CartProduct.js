import React from 'react'
import data from '../ProductData/Data'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../context/appContext'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
function CartProduct (props) {
    const context = useContext(AppContext);
    const { deleteProduct, setUser, addToCart, removeOne } = context
    const { title, url, price, count } = props
    const amount = Math.floor((Math.random() * (25 - 0) + 0) * (Math.random() * (25 - 0) + 0));
    const showproduct = () => {
        let Data = data.filter((ele) => {
            return ele.image === url;
        })
        Data = Data[0];
        setUser({ url, title: title, rating: Data.rating.rate, count: Data.rating.count, price: Data.price, discription: Data.description })

        const productInfo = { url: url, title: title, rating: Data.rating.rate, count: Data.rating.count, price: price, description: Data.description, amount: amount + price };
        localStorage.removeItem("productInfo");
        localStorage.setItem("productInfo", JSON.stringify(productInfo));
    }
    return (
        <>
            <div className="product">
                <div className="cart_product_image">
                    <Link to={`/${title.substr(0, 15)}/seperateproduct`}><img style={{ width: "200px", height: '162px', objectFit: "contain" }} onClick={showproduct} src={url} alt="not found" /></Link>
                </div>
                <div className="cart_product_info">
                    <div>
                        <h5>{title.substr(0, 130)}...</h5>
                        <p style={{ color: "#007600" }}>In stock</p>
                    </div>
                    {/* <div className='quantity'> */}
                        <div className='quantity'>
                            <div>
                                <button onClick={() => { removeOne(url) }} style={{ cursor: "pointer" }}><RemoveIcon/></button>
                            </div>
                            <div style={{paddingInline:'8px',
                        marginLeft: "-10px",
                        marginRight: "-10px",
                        paddingBlock: "0.7px",
                        borderLeft:"none",
                        borderRight:"none"}}>
                                <span  >{count}</span>
                            </div>
                            <div>
                                <button disabled={count>4} style={{ cursor: "pointer" }} onClick={() => { addToCart(url, title, price, 0) }}><AddIcon/></button>
                            </div>
                            <div style={{border:"none"}}>
                            <button  onClick={() => { deleteProduct(url) }}><DeleteIcon/></button>
                            </div>
                                </div>
                        
                    {/* </div> */}
                </div>
                <div className="price">
                    <h5 style={{
                        marginTop: "10px",
                        fontWeight: "bolder"
                    }}><i style={{color:'black'}} className="fas fa-rupee-sign"></i>{price}/</h5>
                </div>
            </div>
            {/* <hr /> */}

        </>
    )
}

export default CartProduct
