import React from 'react'

function SavedAddress() {
    return (
        <div className='savedAddress' style={{width:"max-content"}}>
            <div className='addressDetails'>
            <div><h4>Rajul Thakur</h4></div>
            <div><p>simrol simran farm dis. indore</p></div>
            <div><p>Simrol khandwa road</p></div>
            <div><p style={{fontSize:"12px"}}>INDORE,MADHYA PRADESH 452020</p></div>
            </div>
            <div><p>India</p></div>
            <div>
                <button className='deliverBtn' style={{width:"100%"}}><p>Deliver to this address</p></button>
            </div>
            <div className='controls'>
                <div><button>Edit</button></div>
                <div style={{textAlign:"end"}}><button>Delete</button></div>
            </div>
        </div>
    )
}

export default SavedAddress
