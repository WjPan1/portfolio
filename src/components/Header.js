import { NavLink  } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
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
                        <HashLink to="/#home" >
                        <div className="nav-icon"><BiSolidHomeHeart /></div>
                        <span>Home</span></HashLink>
                    </li>
                    <li>
                        <HashLink to="/#projects" >
                        <div className="nav-icon"><IoFileTrayFull /></div>
                        <span>Projects</span></HashLink>
                    </li>
                    <li>
                        <HashLink to="/#about" >
                        <div className="nav-icon"><IoPerson /></div>
                        <span>About</span></HashLink>
                    </li>
                    <li>
                        <HashLink to="/#contact" >
                        <div className="nav-icon"><MdEmail /></div>
                        <span>Contact</span></HashLink>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header;