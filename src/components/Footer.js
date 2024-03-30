import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png";

function Footer () {
    return (
        <footer className="footer-container">
            <div className="footer-logo-container">
                <NavLink to="/" className="footer-logo">
                    <img src={Logo} alt="Site Logo" />
                </NavLink> 
        </div>
        <p>&copy; 2024. All rights reserved.</p>
        </footer>
    )
}

export default Footer;