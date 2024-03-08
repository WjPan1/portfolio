import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png";

function Header() {

    return (
        <header className="header-container">
            <div className="header-logo">
                <NavLink to="/"><img src={Logo} alt="Site Logo" /></NavLink> 
            </div>

            <nav className= "site-navigation">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/app">APP</NavLink></li>
                    <li><a href="/#projects">Projects</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header;