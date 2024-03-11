import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import { HashLink } from 'react-router-hash-link';

import { BiSolidHomeHeart } from "react-icons/bi";
import { IoFileTrayFull } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


function Header() {


    return (
        <header className="header-container">


            <nav className= "site-navigation">
                <ul>
                    <li><NavLink to="/">
                        <div className="nav-icon"><BiSolidHomeHeart /></div>
                        <span>Home</span></NavLink></li>
                    {/* <li><NavLink to="/app">APP</NavLink></li> */}
                    <li><HashLink to="/#projects" smooth>
                        <div className="nav-icon"><IoFileTrayFull /></div>
                        <span>Projects</span></HashLink></li>
                    <li className="header-logo">
                        <NavLink to="/"><img src={Logo} alt="Site Logo" width={50}/></NavLink> 
                    </li>
                    <li><HashLink to="/#about" smooth>
                        <div className="nav-icon"><IoPerson /></div>
                        <span>About</span></HashLink></li>
                    <li><HashLink to="/#contact" smooth>
                        <div className="nav-icon"><MdEmail /></div>
                        <span>Contact</span></HashLink></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header;