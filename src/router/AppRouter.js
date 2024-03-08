import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home.js";
import SingleProject from "../pages/SingleProject";

import Header from "../components/Header";
import Footer from "../components/Footer";
import App from "../pages/App.js";


function AppRouter () {

   const restBase = 'https://wjweb.works/wordpress-portfolio/wp-json/wp/v2/'

   return (
      <BrowserRouter>
            <div className="site-container">

               <Header />
               
               <Routes>
                  <Route path="/" element={<Home restBase={restBase} />} />

                  <Route path="/project/:slug" element={<SingleProject restBase={restBase} />} />


                  {/* to be deleted */}
                  <Route path="/app" element={<App />} />
               </Routes>
               
               <Footer />
            </div>
      </BrowserRouter>
   )
}

export default AppRouter;