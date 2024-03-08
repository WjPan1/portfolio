import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png";

function Footer () {
    return (
        <footer className="footer-container">
            <h1>Footer</h1>
            <div className="footer-logo">
            <NavLink to="/" className="logo-container">
                <img src={Logo} alt="Logo" />
            </NavLink> 
        </div>
        <p>&copy; 2024. All rights reserved.</p>
        </footer>
    )
}

export default Footer;