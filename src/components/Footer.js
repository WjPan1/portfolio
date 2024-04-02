import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";


function Footer () {
    return (
        <footer className="footer-container">
            <div className="footer-logo-container">
                <a href="https://www.linkedin.com/in/wenjing-pan01/" target="_blank" rel="noreferrer"><FaLinkedin role="img" aria-label="LinkedIn Icon"/></a>
                <a href="https://www.google.com/" target="_blank" rel="noreferrer"><FaGithubAlt role="img" aria-label="Github Icon"/></a>              
            </div>
            <p>&copy; 2024. All rights reserved.</p>
        </footer>
    )
}

export default Footer;