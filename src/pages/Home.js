import Banner from "../components/Banner";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import { useEffect, useState } from "react";
import Loading from '../utilities/Loading';
import { APP_NAME } from '../utilities/globalVariables';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
                setTimeout(() => {
                    setLoadStatus(true);
                }, 800);
            } else {
                console.error('Failed to fetch data');
                setLoadStatus(false)
            }
        }
        fetchData()

    }, [restPath])
    

    return (

        <HelmetProvider>

        
        <main id="site-main" className="home-container">
            { isLoaded ?
                <>
                <Helmet>
                    <title>{APP_NAME}</title>
                    <meta name="description" content={`${restData.acf.brief_intro} ${restData.acf.mission}`} />
                    {/* Other meta tags, link tags, etc. */}
                </Helmet>
                    {/* <Helmet>
                        <title>{APP_NAME}</title>
                        <meta name="description" content={`${restData.acf.brief_intro} ${restData.acf.mission}`} />
                    </Helmet> */}

                    <Banner restBase={restBase} restData={restData}/>
                    <Projects restBase={restBase} 
                            classname={"all-project"} 
                            title={"Projects"} />
                    <About restBase={restBase} restData={restData}/>
                    <Contact restBase={restBase} restData={restData}/>
                </>  
                : 
                <Loading /> 
            }
        </main>
    </HelmetProvider>
    )
}


export default Home;