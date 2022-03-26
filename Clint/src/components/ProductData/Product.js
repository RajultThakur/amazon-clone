import React, { useContext } from 'react'
import AppContext from '../context/appContext';
import { Link } from 'react-router-dom';
function Product (props) {
    const context = useContext(AppContext)
    const { setUser } = context;
    const { url, title, description, rating, price, amount } = props
    const showproduct = () => {
        setUser({ url, title: title, rating: rating.rate, count: rating.count, price: price, discription: description })

        const productInfo = { url: url, title: title, rating: rating.rate, count: rating.count, price: price, description: description, amount: amount };
        localStorage.setItem("productInfo", JSON.stringify(productInfo));
    }
    return (
        <div className="products">
            <div className="product__image">
                <Link to={`/${title.substr(0, 15)}/seperateproduct`}><img onClick={showproduct} style={{ cursor: 'pointer' }} src={url} alt="" /></Link>

            </div>
            <div className='product__info'>
                <div className="details">
                    <div>
                    <Link style={{textDecoration:"none"}} to={`/${title.substr(0, 15)}/seperateproduct`}><p onClick={showproduct} style={{ fontWeight: '500' }} >{description.substr(0, 131)}</p></Link>
                        
                    </div>
                    <div style={{ display: 'flex', justifyContent: "space-between", paddingRight: "20px" }}>
                        <p title="show" style={{
                            
                            fontSize: "14px",
                            fontWeight: "800",
                            color: "#ff9f35"
                        }}><span style={{ fontSize: "22px" }}>{rating.rate}/5</span> (120)</p>
                        <p style={{ fontSize: "14px", marginLeft: "-10px" }}><span style={{ position: "relative", bottom: "10px" }}>INR</span><span style={{ fontSize: "23px", fontWeight: "bold" }}>{price}/</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
