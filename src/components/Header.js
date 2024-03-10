import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import { HashLink } from 'react-router-hash-link';


function Header() {

    return (
        <header className="header-container">


            <nav className= "site-navigation">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    {/* <li><NavLink to="/app">APP</NavLink></li> */}
                    <li><HashLink to="/#projects" smooth>Projects</HashLink></li>
                    <li className="header-logo">
                        <NavLink to="/"><img src={Logo} alt="Site Logo" width={50}/></NavLink> 
                    </li>
                    <li><HashLink to="/#about" smooth>About</HashLink></li>
                    <li><HashLink to="/#contact" smooth>Contact</HashLink></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header;