import React,{useEffect,useState,useContext} from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Data from '../ProductData/Data';
import poster from "../Images/poster.jpg"
import poster1 from "../Images/poster1.jpg"
import poster2 from "../Images/poster2.jpg"
import AppContext from '../context/appContext';
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Category from './Category';
import img1 from '../Images/img1.jpeg';
import img2 from '../Images/img5.jpg';
import img3 from '../Images/img2.jpeg';
import img4 from '../Images/img4.jpeg';
import AddressCard from '../Buying Process/AddressCard';
function Home() {
    const context = useContext(AppContext)
    const {getCartProduct,category,categories,allProduct,getLogedUserDetails} = context
    const arr = [img1,img2,img3,img4];
    const [counter,setCounter] = useState(0);
    // const [productData,setProductData] = useState(Data) ;
    let a =0;
    useEffect(() => {
        const fun = async() => {
             allProduct()
             await categories();
             if(localStorage.getItem('token')){
                 await getCartProduct();
                 await getLogedUserDetails();
             }
            }
            fun();
            
        }, [])
        const incDec = (t) => {
            if(t===0){
                if(counter===0) setCounter(2);
                else setCounter((counter-1));
            }else{
                if(counter===2) setCounter(0);
                else setCounter((counter+1));
            }
        }
    return (
        <div style = {{background:"#dfdfdf"}} className="hoemContainer">
            {/* <AddressCard/> */}
            <div className="poster">
                <img src={counter===0?poster1:(counter===1?poster2:poster)} alt="" />
            
            <ArrowBackIosIcon onClick = {()=>{incDec(0)}} style={{fontSize:"50px" ,left:"18px"}} className ="icon"/>
            <ArrowForwardIosIcon onClick = {()=>{incDec(1)}} style={{fontSize:"50px", right:"10px"}} className ="icon"/>
            </div>
            <div className="category__card">
              {category.map((ele) => {
                  return <Category key ={Math.random()} url={arr[a++]} type = {ele = ele==="women's clothing"?"women's fasion":ele}></Category>
              })}
            </div>
            {/* <ProductPage/> */}
        </div>
    )
}

export default Home
