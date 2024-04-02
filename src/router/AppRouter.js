import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home.js";
import SingleProject from "../pages/SingleProject";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";


function AppRouter () {

   const restBase = 'https://wjweb.works/wordpress-portfolio/wp-json/wp/v2/';

    // Create stars
    useEffect(() => {
        const createStars = () => {
            const starsContainer = document.querySelector('.stars');
            const numStars = 300;
            for (let i = 0; i < numStars; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                
                // random star position
                const x = Math.random() * 100;
                const y = Math.random() * 100;

                // set star position
                star.style.left = `${x}%`;
                star.style.top = `${y}%`;
                starsContainer.appendChild(star);
            }
        };
    
        createStars();
    
        // clear stars
        return () => {
            const starsContainer = document.querySelector('.stars');
            starsContainer.innerHTML = ''; 
        };

    }, []); 
    

   return (
        <BrowserRouter>
            <div className="site-container">
                <Header />

                <Routes>
                <Route path="/" element={<Home restBase={restBase} />} />
                <Route path="/project/:slug" element={<SingleProject restBase={restBase} />} />
                </Routes>
                
                <Footer />

                {/* Stars container */}
                <div className="stars"></div>

            </div>
        </BrowserRouter>
   )
}

export default AppRouter;