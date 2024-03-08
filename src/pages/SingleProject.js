import { useEffect, useState } from "react";
import { useParams } from "react-router";

function SingleProject ( {restBase} ) {

    const { slug } = useParams();
    const restPath = restBase + `posts?slug=${slug}&_embed`
    const [restData, setData] = useState([])
    // const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data[0])
                // setLoadStatus(true)
            } else {
                console.error('Failed to fetch data');
                // setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath])
        

    return (
        <main className="single-project-container">
            <h1>Portfolio</h1>
            {restData.acf && 
                <div className="project-intro">
                    <h2>{restData.title.rendered}</h2>
                    <p>{restData.acf.overview}</p>
                    {restData.acf.skill_used_for_this_project.slice(0, 3).map((item, index) => (
                        <p key={index}>{item.single_skill_name}</p>
                    ))}
                </div>
            }

        </main>
    )
}

export default SingleProject;