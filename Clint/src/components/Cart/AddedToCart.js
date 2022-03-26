import React,{useContext} from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import appContext from '../context/appContext'
function AddedToCart() {
    const context = useContext(appContext);
    const {cartProduct,ref} = context;
    return (
        <>
<button ref={ref} type="button" style={{display:"none"}} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Show</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Your item</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
          <div>
              <img style={{width:"140px",objectFit:'contain',height:'100px'}} src={cartProduct.url} alt="" />
          </div>
          <div style={{display:"flex",alignItems:"center",flexDirection:'column'}}>
              <h4 style={{fontWeight:'bold',display:"flex",alignItems:"center"}}>
                  <CheckCircleIcon style={{color:"#067D62"}}/> Added to cart!
              </h4>
              <p><span>Cost </span><span>INR {cartProduct.price/cartProduct.count} ✖ {cartProduct.count}</span></p>
              <p>Total {cartProduct.price}/</p>
          </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default AddedToCart
