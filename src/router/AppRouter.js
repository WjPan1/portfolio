import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home.js";
import SingleProject from "../pages/SingleProject";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";


function AppRouter () {

   const restBase = 'https://wjweb.works/wordpress-portfolio/wp-json/wp/v2/';

   // scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}


      useEffect(() => {
         const createStars = () => {
           const starsContainer = document.querySelector('.stars');
           const numStars = 300; // 星星数量
           for (let i = 0; i < numStars; i++) {
             const star = document.createElement('div');
             star.className = 'star';
             const x = Math.random() < 0.5 ? Math.random() * 50 : Math.random() * 50 + 50;
             const y = Math.random() * 100;
             star.style.left = `${x}%`;
             star.style.top = `${y}%`;
             starsContainer.appendChild(star);
           }
         };
     
         createStars();
     
         // 清理函数，在组件卸载时清除星星
         return () => {
            // window.removeEventListener('scroll', handleScroll);

           const starsContainer = document.querySelector('.stars');
           starsContainer.innerHTML = ''; // 清空星星
         };
       }, []); // 仅在组件挂载和卸载时运行
    

   return (
      <BrowserRouter>
         <div className="site-container">
            <Header />

            <Routes>
               <Route path="/" element={<Home restBase={restBase} />} />
               <Route path="/project/:slug" element={<SingleProject restBase={restBase} />} />
            </Routes>
            
            <Footer />

            <div className="stars"></div> {/* 星空容器 */}

         </div>
      </BrowserRouter>
   )
}

export default AppRouter;