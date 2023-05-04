
import './style.scss';
import logo from "../assets/logo.png"
import {ReactComponent as SearchIcon} from "../assets/svg/search.svg";
import {ReactComponent as Avatar} from "../assets/svg/avatar.svg";
import {ReactComponent as Vector} from "../assets/svg/Vector.svg";

const NavBar = (props) => {
    return (
        <div className='Nav'>
        <div className="container">
            <div className="logo-wrapper">
                <img src={logo} alt="logo" />
            </div>
            <div className='search-bar'>
                <input className='search-box' type="text" placeholder='Search'/>
                <button className='search-icon'><SearchIcon /></button>
            </div>
            <div className='user'>
                
                <p>
                    <u>Doc</u>
                </p>
                <p>
                <Vector />
                </p>
                <Avatar />
                <div>
                    <h3>Brian</h3>
                </div>
            </div>
            
        </div>
            {props.children}
        </div>
    );
}

export default NavBar;