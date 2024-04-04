import { NavLink , Link } from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';
import { BiSolidHomeHeart } from "react-icons/bi";
import { IoFileTrayFull } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { ReactComponent as Logo } from "../images/logo.svg";


function Header() {
    
    return (
        <header className="header-container">

            <div className="site-logo-container">
                <NavLink to="/" className="site-logo"><Logo />
                </NavLink>
            </div> 

            <nav className= "site-navigation">
                <ul>
                    <li>
                        <Link to="/#banner" >
                        <div className="nav-icon"><BiSolidHomeHeart  role="img" aria-label="Home Icon"/></div>
                        <span>Home</span></Link>
                    </li>
                    <li>
                        <Link to="/#projects" >
                        <div className="nav-icon"><IoFileTrayFull  role="img" aria-label="Projects Icon"/></div>
                        <span>Projects</span></Link>
                    </li>
                    <li>
                        <Link to="/#about" >
                        <div className="nav-icon"><IoPerson  role="img" aria-label="About Icon"/></div>
                        <span>About</span></Link>
                    </li>
                    <li>
                        <Link to="/#contact" >
                        <div className="nav-icon"><MdEmail  role="img" aria-label="Contact Icon"/></div>
                        <span>Contact</span></Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header;