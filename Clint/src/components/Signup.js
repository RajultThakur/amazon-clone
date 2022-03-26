import React,{useState,useEffect} from 'react'
import image from './Images/amazon.png'
import {Link, useHistory} from 'react-router-dom'
const url="http://localhost:5000/auth"
function Signup() {
    const [user, setUser] = useState({name:"",email:"",password:""})
    const [fillOtp,setFillotp] = useState(0);
    const [OTP,setOTP] = useState("");
    const [myOTP,setmyOTP]= useState("");
    const [finalUserData,setUserData] = useState({});
    const history = useHistory();
    const fillOTP =(e) =>{
        setOTP(e.target.value);

    }
    const onchange = (e) => {
        setUser({...user,[e.target.name]:e.target.value});
    }
    const signup = async(e) => {
        e.preventDefault();

        const response = await fetch(`${url}/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({ name: user.name, email: user.email, password: user.password })
        }); 

        const data = await response.json();
        setUserData(data);

        if(data.success === false) {
            alert(data.mes);
            history.push('/login')
        }

        else{
            setFillotp(1); 
            const otp_from_server = await fetch(`${url}/getotp`, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify({ name: data.mes.name,to:data.mes.email})
            }); 

            const otp =await otp_from_server.json();
            setmyOTP(otp.otp);
        } 
        
    }
    const submitotp = async(e) =>{
        e.preventDefault();

        if(myOTP===parseFloat(OTP)){
            await fetch(`${url}/saveuser`, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify({ name: finalUserData.mes.name,email:finalUserData.mes.email,password:finalUserData.mes.password})
            }); 
            history.push("/login");
        }else{
            alert('wrong otp')
        }
    }

    useEffect(() => {
       if(localStorage.getItem('token')) history.push('/');
    }, [])

    return (
        <>
            <div style={{textAlign:'center',
                     width: "320px",
                    margin:"auto",
                    background:"#131921",
                    marginTop:"20px"
                    }} className="logo">
             <Link to="/">
            <img src={image} alt="" />
                        </Link>
        </div>
        <div className="login__card">
           <h2 style={{marginLeft:"30px" ,color:"#131921"}}>Login</h2>
           <form onSubmit={signup} className="login">
               <div className="username">
               <label htmlFor="username">Your name</label>
               <input type="text" name="name" required={true} id="username" value={user.name} onChange ={onchange} />
               </div>
               <div className="email">
               <label htmlFor="email">Enter your email address</label>
               <input type="email" name="email"  required={true} id="email" value={user.email} onChange ={onchange} />
               </div>
               <div className="password">
               <label htmlFor="password">Password</label>
               <input type="password" name='password' required={true} id="password" value={user.password} onChange ={onchange} />
               <p style={{fontSize:'10px'}}><i>i</i> password must contain 6 characters</p>
               </div>
               {/* <div className="email">
               {fillOtp===1 &&<>
               <label htmlFor="otp">Enter otp</label>
               <input type="number" name="otp"  required={true} id="otp" value={OTP} onChange ={fillOTP} />
               </>
               }
               </div> */}
               {fillOtp===0 && <button type='submit'>Sign-Up</button>}
           
           </form>
           <form onSubmit={submitotp} >
           {fillOtp===1 &&<><div className="email">
               <label htmlFor="otp">Enter otp</label>
               <input type="number" name="otp"  required={true} id="otp" value={OTP} onChange ={fillOTP} />
               </div>
               <button type='submit'>Submit</button></>
               }
           </form>
           
        </div>
        <div className="newuser">
            <label htmlFor="newuser"><span>____ </span> Already have an account <span> ____</span></label>
            <button>
            <Link style={{textDecoration:"none",
                          color:"black",
                          fontWeight:"500"}} id="newuser" to="/login" >Login</Link>
            </button>
        </div>
        </>
    )
}

export default Signup
