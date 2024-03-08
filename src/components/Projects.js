import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Projects ( {restBase} ) {
    const restPath = restBase + 'posts?_embed'
    const [restData, setData] = useState([])
    // const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
                // setLoadStatus(true)
            } else {
                // setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath])  
    
    return (
        <section id="projects" className="projects-container">
            <h1>Projects section</h1>
            {restData.map(post => 
                <article key={post.id} id={`post-${post.id}`}>
                    <h2>{post.title.rendered}</h2>

                    <p>{post.acf.brief_overview}</p>
                    {post.acf.skill_used_for_this_project.slice(0, 3).map((item, index) => (
                        <p key={index}>{item.single_skill_name}</p>
                    ))}
                    {/* {post.featured_media !== 0 && post._embedded &&
                        <figure className="featured-image" dangerouslySetInnerHTML={featuredImage(post._embedded['wp:featuredmedia'][0])}></figure>
                    } */}
                    <button><Link to={`/project/${post.slug}`}>More Info</Link></button>
                </article>
            )}

        </section>
    )
}

export default Projects;