import { NavLink } from "react-router-dom";
import { ReactComponent as LogoWhite } from "../images/logo-white.svg";

function Footer () {
    return (
        <footer className="footer-container">
            <div className="footer-logo-container">
                <NavLink to="/" className="footer-logo">
                    <LogoWhite />
                </NavLink> 
            </div>
        <p>&copy; 2024. All rights reserved.</p>
        </footer>
    )
}

export default Footer;