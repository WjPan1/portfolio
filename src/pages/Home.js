import Banner from "../components/Banner";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import { useEffect, useState } from "react";
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
                setLoadStatus(true)
            } else {
                console.error('Failed to fetch data');
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath])

    return (
        <>
        { isLoaded ?
            <main id="home" className="home-container">
                <Banner restBase={restBase} restData={restData}/>
                <Projects restBase={restBase} 
                          classname={"all-project"} 
                          title={"Projects"} />
                <About restBase={restBase} restData={restData}/>
                <Contact restBase={restBase} restData={restData}/>
            </main>
            : 
            <Loading /> 
        }
        </>  
    )
}


export default Home;