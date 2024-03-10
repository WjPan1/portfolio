import Banner from "../components/Banner";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import { useEffect, useState } from "react";


function Home ( {restBase} ) {

    const restPath = restBase + 'pages/9'
    const [restData, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
                console.log("about found")
            } else {
                console.error('Failed to fetch data');
                console.log("not about found")
            }
        }
        fetchData()
    }, [restPath])
    
    return (
        <main className="home-container">
            <h1>Home Page</h1>
            <Banner restBase={restBase} restData={restData}/>
            <Projects restBase={restBase} 
                      classname={"all-project"} 
                      title={"All Projects"} />
            <About restBase={restBase} restData={restData}/>
            <Contact restBase={restBase} restData={restData}/>

        </main>
    )
}

export default Home;