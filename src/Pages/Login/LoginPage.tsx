import { Link } from "react-router-dom";
import "./Style.scss";
import logo from "../../assets/Union.png";
import banner from "../../assets/lendsqr.png";
import welcomImage from "../../assets/pablo-sign-in 1.png";


const LoginPage = () => {
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
                <form className="login-form">
                    {/* Enter Email */}
                    <input type="text" id="email" placeholder="Email" />

                    {/* Enter Password */}
                    <input type="password" id="email" placeholder="Password" />
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


export default LoginPage