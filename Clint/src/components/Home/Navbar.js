import React, { useContext, useEffect } from 'react'
import logo from '../Images/amazon.png'
import appContext from '../context/appContext';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useHistory } from 'react-router-dom';
import Cart from '@material-ui/icons/ShoppingCart';
function Navbar () {
    const context = useContext(appContext);
    const { cartTotal, cartProducts, setCartProducts } = context;
    let userData = JSON.parse(localStorage.getItem("userInfo"));
    const history = useHistory();
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("cartTotal");
        setCartProducts([]);
        // history.push('/cartpage')
        history.push('/')
        setTimeout(() => {
            history.push('/')
        }, 100);
    }
    useEffect(() => {
        console.log(cartProducts)
    }, [])

    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="not found" />
                </Link>
            </div>
            <div className="pincode">
                <form>
                    i
                </form>
            </div>
            <div className="searchbox">
                <input type="text" />
                <div className='searchIcon'><span><SearchIcon /></span></div>
            </div>
            <div className='AccDetails'>
                {/* {localStorage.getItem("token") ? <><p>Hello,{userData.name} <button className="logout" onClick={logout}>Log-Out</button></p>
                    <p>{userData.email}</p></> :
                    <>
                        <p>Hello,<Link style={{
                            marginInline: "31px",
                            fontSize: "14px"
                        }} to="/login">Login</Link></p>
                        <p>Account & Details</p> </>} */}
            </div>

            <div className='AddDetails'>
                <p>Address</p>
                <p>Damoh, 470661</p>
            </div>

            {/* <div className='AddDetails'>
            <p>Returns </p>
            <p>& Orders</p>
            </div> */}

            <div className='Cart' style={{ paddingInline: "8px" }}>
                <Link to="/cartpage">
                    <Cart style={{ fontSize: "42px", color: "white" }} />
                    <p style={{ color: 'black' }}>{cartTotal ? cartTotal : localStorage.getItem('cartTotal')}</p>
                </Link>
            </div>
            {/* <Link to = "/login">login</Link> */}
        </div>
    )
}

export default Navbar
