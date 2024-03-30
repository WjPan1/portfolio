import { NavLink, useLocation  } from "react-router-dom";
import Logo from "../images/logo.png";
import { HashLink } from 'react-router-hash-link';

import { BiSolidHomeHeart } from "react-icons/bi";
import { IoFileTrayFull } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";


function Header() {
    const { hash } = useLocation();
    const isActive = (iHash) => hash === iHash;

    return (
        <header className="header-container">


            <NavLink to="/#home" className="mobile-logo"><img src={Logo} alt="Site Logo" /></NavLink> 

            <nav className= "site-navigation">
                <ul>
                    <li><HashLink to="/#home" className={isActive("#home") ? "active-link" : ""}>
                        <div className="nav-icon"><BiSolidHomeHeart /></div>
                        <span>Home</span></HashLink></li>
                    <li><HashLink to="/#projects" smooth  className={isActive("#projects") ? "active-link" : ""} >
                        <div className="nav-icon"><IoFileTrayFull /></div>
                        <span>Projects</span></HashLink></li>
                    <li className="desktop-logo">
                        <NavLink to="/#home"><img src={Logo} alt="Site Logo" /></NavLink> 
                    </li>
                    <li><HashLink to="/#about"  smooth className={isActive("#about") ? "active-link" : ""} >
                        <div className="nav-icon"><IoPerson /></div>
                        <span>About</span></HashLink></li>
                    <li><HashLink to="/#contact" smooth className={isActive("#contact") ? "active-link" : ""} >
                        <div className="nav-icon"><MdEmail /></div>
                        <span>Contact</span></HashLink>
                    </li>
                </ul>
            </nav>

        </header>
    )



    // const [activeLink, setActiveLink] = useState('#home');

    // const handleScroll = (hash) => {
    //   const offset = 60; // 调整滚动偏移量
    //   const speed = 800;
    //   const target = document.querySelector(hash);
  
    //   document.querySelectorAll('nav .menu a').forEach(link => {
    //     link.classList.remove('active');
    //   });
  
    //   setActiveLink(hash);
  
    //   window.scrollTo({
    //     top: target.offsetTop - offset,
    //     behavior: 'smooth'
    //   });
    // };




    
  
//     const [activeLink, setActiveLink] = useState('#home');
//     const [clickedLink, setClickedLink] = useState(null);

//     useEffect(() => {
//         const handleScroll = () => {
//             const scroolPosition = window.scrollY;
//             const offset = 60;
//             const sections = document.querySelectorAll('section');

//             sections.forEach(section => {
//                 const sectionTop = section.offsetTop - offset;
//                 const sectionBottom = sectionTop + section.offsetHeight;

//                 if (scroolPosition >= sectionTop && scroolPosition < sectionBottom) {
//                     const id = '#' + section.id;
//                     setActiveLink(id);
//                     setClickedLink(null);
//                 }
//             });
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         }
//     }, []);

//     const handleNavClick = (hash) => {
//         const target = document.querySelector(hash);

//         if (target) {
//         setClickedLink(hash);
//         }
//     };

//   return (
//     <header>
//         <div className="logo">
//             <NavLink to="/"><img src={Logo} alt="Site Logo" /></NavLink>
//         </div>

//         <nav>
//             <div className="menu">
//                 <HashLink to="/#home" smooth 
//                     className={(activeLink === '#home' || clickedLink === '#home') ? 'scroll-page actived' : 'scroll-page'} onClick={() => handleNavClick('#home')}>
//                         <div className="nav-icon"><BiSolidHomeHeart /></div>
//                         <span>Home</span>
//                 </HashLink>
//                 <HashLink to="/#projects" smooth 
//                     className={(activeLink === '#projects' || clickedLink === '#projects') ? 'scroll-page actived' : 'scroll-page'} onClick={() => handleNavClick('#projects')}>
//                         <div className="nav-icon"><IoFileTrayFull /></div>
//                         <span>Projects</span>
//                 </HashLink>
//                 <HashLink to="/#about" smooth 
//                     className={(activeLink === '#about' || clickedLink === '#about') ? 'scroll-page actived' : 'scroll-page'} onClick={() => handleNavClick('#about')}>
//                         <div className="nav-icon"><IoPerson /></div>
//                         <span>About</span>
//                 </HashLink>
//                 <HashLink to="/#contact" smooth 
//                     className={(activeLink === '#contact' || clickedLink === '#contact') ? 'scroll-page actived' : 'scroll-page'} onClick={() => handleNavClick('#contact')}>
//                         <div className="nav-icon"><MdEmail /></div>
//                         <span>Contact</span>
//                 </HashLink>
//             </div>
//         </nav>
//     </header>
//   );
}

export default Header;