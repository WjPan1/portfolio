import { useEffect, useState } from 'react';
// import Loading from '../components/Loading';

function Banner ( {restBase} ) {

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
    
    return (
        <>
        { isLoaded && (
            <section id="banner" className="banner-container">
                <p className="my-name">{restData.acf && restData.acf.my_name}</p>
                <p className="my-role">{restData.acf && restData.acf.brief_intro}</p>

            </section>

        )}
        </> 
    )
}

export default Banner;