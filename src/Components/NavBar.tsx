
import './style.scss';
import logo from "../assets/logo.png"

const NavBar = (props) => {
    return (
        <div className='Nav'>
        <div className="container">
            <div className="logo-wrapper">
                <img src={logo} alt="logo" />
            </div>
            <div className='search-bar'>
                <input className='search-box' type="text" placeholder='Search'/>
                <img className='search-icon' src="" alt="search icon" />
            </div>
            <div className='user'>
                <p>
                    <u>Doc</u>
                </p>
                <img src="" alt="bell" />
                <img src="" alt="userImg" />
                <div>
                    Username
                </div>
            </div>
            
        </div>
            {props.children}
        </div>
    );
}

export default NavBar;