import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Style.scss";
import logo from "../../assets/Union.png";
import banner from "../../assets/lendsqr.png";
import welcomImage from "../../assets/pablo-sign-in 1.png";



const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [inputError, setInputError] = useState("")

    const handleSubmit= (e) => {
      e.preventDefault();
      if (!email || !password){
        setInputError('This Field is required')
      }else if(email !== 'oshinbolubrian@gmail.com'){
        setInputError('Use the demo email: oshinbolubrian@gmail.com and any password');
      }else if(email === 'oshinbolubrian@gmail.com'){
      navigate("/dashboard");
      }
    }
  
    return(
        <div className="login-page">
      <div className="container">
        <div className="banner">
          {/* ===logo=== */}
          <div className="logo-wrapper">
            <img className="logo" src={logo} alt="logo" />
            <img className="brand-name" src={banner} alt="brand name" />
          </div>

          <div className="welcomeImage">
            <img src={welcomImage} alt="welcome image" />
          </div>
        </div>

        <div className="login">
            <div className="login-details">
                <div>
                    <h1>Welcome ! </h1>
                    <h2>Enter Details to login</h2>
               </div>
                <form className="login-form" onSubmit={handleSubmit}>
                    <p className='error'>{inputError}</p>
                    {/* Enter Email */}
                    <input 
                      className= {(inputError && !email) ? 'border-red' : '' }
                      type="text" 
                      id="email" 
                      placeholder="Email" 
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      />

                    {/* Enter Password */}
                    <input 
                      className= {(inputError && !password) ? 'border-red' : '' }
                      type="password" 
                      id="email" 
                      placeholder="Password"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                      />

                    <p>Forget Password</p>

                    {/* Login */}
                    <button type="submit">LOG IN</button>
                </form>
            </div>
        </div>
      </div>
      {/* <Link to="/main-dashboard">
        <button>Login</button>
      </Link> */}
    </div>
    )
}


export default LoginPage;