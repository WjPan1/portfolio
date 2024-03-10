import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTopButton() {
    const [showButton, setShowButton] = useState(false);
  
    useEffect(() => {
        
        // 监测是否屏幕有滚动，来决定是否显示button
        function handleScroll() {
            if (window.scrollY > 0) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        }
  
        window.addEventListener('scroll', handleScroll);

        // 清除监听器以避免内存泄漏
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);
  

    // 当点击back to top button时就返回页面顶部
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`back-to-top ${showButton ? 'show' : 'none' }`} onClick={handleClick}><FaArrowUp /></div>

    )

}
export default BackToTopButton;
