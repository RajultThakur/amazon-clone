import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import AppContext from '../context/appContext';
function Category(props) {
    const {type,url} = props;
    const context = useContext(AppContext);
    const {productByIntrest} = context;
    return (
        <div className = 'category-card'>
            <div className ='heading'>
            <h2 style={{color:'#131921',fontWeight:'bold',fontSize:'20px',padding:'5px'}}>{type}</h2>
            </div>
            <div className="category__image">
                <Link to ="/productpage" onClick ={()=>{productByIntrest(type)}}>
                <img src={url} alt="not available" />
                </Link>
            </div>
            <div className="shopNow">
                <Link to="/productpage" className="link" onClick ={()=>{productByIntrest(type)}} >Shop now</Link>
            </div>
        </div>
    )
}

export default Category
