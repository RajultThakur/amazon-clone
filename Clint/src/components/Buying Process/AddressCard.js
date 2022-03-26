import React from 'react'
import { useState } from 'react'
import SavedAddress from './SavedAddress';

function AddressCard () {
    const [address,setAddress] = useState({name:'',mobile:'',pincode:'',house:'',area:'',landmark:'',town:'',state:''})
    const onchange = (e) => {
        setAddress({...address,[e.target.name]:e.target.value});
        console.log(e.target.value);
    }
    const onclick = async(e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/address/addaddress`, {
            method: 'POST',
            headers: {
              "Content-Type": 'application/json',
              "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({name:address.name,pincode:address.pincode,flat:address.house,area:address.area,landmark:address.landmark,town:address.town ,state:address.state})
          })
          const data = await response.json();
        console.log(address);
    }
    
    return (
        <div className='address__container'>
            <SavedAddress/>
            <form className='address__form'>
                <h2>Add new address</h2>
                <div>
                    <label htmlFor="country">Country/Region</label>
                    <input type="text" id='country' disabled={true} value="India"/></div>
                <div>
                    <label htmlFor="name">Full name</label>
                    <input type="text" id='name' name="name" onChange={onchange} /></div>
                <div>
                    <label htmlFor="number">Mobile number</label>
                    <input type="number" id='number' name="mobile" onChange={onchange} /></div>
                <div>
                    <label htmlFor="pincode">Pincode</label>
                    <input type="number" id='pincode' name="pincode" onChange={onchange} /></div>
                <div>
                    <label htmlFor="area">Flat, House no., Building, Company, Apartment</label>
                    <input type="text" id='area' name="house" onChange={onchange} /></div>
                <div>
                    <label htmlFor="house">Area, Street, Sector, Village
</label>
                    <input type="text" id='house' name="area" onChange={onchange} /></div>
                <div>
                    <label htmlFor="landmark">Landmark</label>
                    <input type="text" id='landmark' name="landmark" onChange={onchange} /></div>
                    <div style={{flexDirection: "row",
    justifyContent: "space-between"
}}>
                <div>
                    <label htmlFor="town">Town/City</label>
                    <input type="text" id='town' name="town" onChange={onchange} /></div>
                <div>
                    <label htmlFor="town">State</label>
                    <input type="text" id='town' name="state" onChange={onchange} /></div>
                    </div>
            <div style={{marginBottom:"10px",display:'flex',alignItems:"center",flexDirection:'row'}}>
                <input style={{marginRight:"5px",marginBottom:"0px"}} type="checkbox" />
                <label style={{fontSize:"14px",fontWeight:700}} htmlFor="checbox">Mark as defaut address</label>
            </div>
                    <div><button className='address' onClick={onclick}>Use this address</button></div>
            </form>
        </div>
    )
}

export default AddressCard
