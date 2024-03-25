import Banner from "../components/Banner";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import { useEffect, useState } from "react";

import BackToTopButton from "../components/BackToTopButton";


import Loading from '../components/Loading';

function Home ( {restBase} ) {



    const restPath = restBase + 'pages/9'
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
                console.log("about found")
                setLoadStatus(true)
            } else {
                console.error('Failed to fetch data');
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath])


    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash) {
                const element = document.querySelector(hash);
                if (element) {
                    setTimeout(() => {
                        element.scrollIntoView();
                    }, 1000); // 添加一个小的延迟以确保元素已经正确渲染
                }
            } else {
                window.scrollTo({ top: 0 });
            }

        };

        // 在组件挂载时执行一次滚动操作
        handleHashChange();

        // 监听 hashchange 事件
        window.addEventListener('hashchange', handleHashChange);

        // 在组件卸载时移除事件监听器
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);
    
    return (
        <>
        { isLoaded ?
        <main id="home" className="home-container">
            <Banner restBase={restBase} restData={restData}/>
                <div className="content-container">
                <Projects restBase={restBase} 
                        classname={"all-project"} 
                        title={"All Projects"} />
                <About restBase={restBase} restData={restData}/>
                <Contact restBase={restBase} restData={restData}/>

            </div>
            <BackToTopButton />

        </main>
                : 
                <Loading /> 
            }
            </>  
    )
}


export default Home;