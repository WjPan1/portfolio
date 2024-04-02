import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Excerpt, settings } from "../utilities/toolbelt";
import { FaLongArrowAltRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Projects ( {restBase, classname, title, slug} ) {
    const restPath = restBase + 'posts?_embed&acf_format=standard'
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
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath])  


    // Iterates through all posts until matching current post's slug
    const currentProjectIndex = restData.findIndex(post => post.slug === slug);


    return (
        <>
        { isLoaded && (
            <section id={ classname === "all-project" ? "projects" : undefined } className="projects-container">

                {classname === "project-slide" &&
                    <div className="slider-container">
                        <h2>{title}</h2>
                        <Slider {...settings}>
                        {restData.map((post, index) =>
                                index !== currentProjectIndex &&
                                <div className="project-card" key={post.id} id={`post-${post.id}`}>
                                    <div className="image-container">
                                        <img src={post.acf.project_image} alt={post.title.rendered} loading="lazy"/>
                                    </div>

                                    <div className="card-content">
                                        <h3>{post.title.rendered}</h3>
                                        <Link to={`/project/${post.slug}`}>
                                            <span>More Info</span>
                                            <FaLongArrowAltRight />
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </Slider>
                    </div>
                }

                {classname === "all-project" && 
                    <div className="home-project-container">
                        <h2>{title}</h2>
                        
                        <div className="card-container">

                        {restData.map(post => 
                            <div className="project-card" key={post.id} id={`post-${post.id}`}>
                                <Link to={`/project/${post.slug}`}>

                                    <div className="card-content">
                                        <h3>{post.title.rendered}</h3>
                                        <Excerpt text={post.acf.overview} maxLength={50} />

                                        <div className='skill-container'>
                                            {post.acf.used_skill.slice(0, 3).map((item, index) => (
                                                <p key={index}>{item.each_skill_name}</p>
                                            ))}
                                        </div>

                                        <div className="link-to-project">
                                            <span>More Info</span>
                                            <FaLongArrowAltRight />
                                        </div>
                                    </div>

                                    <div className="image-container">
                                        <img src={post.acf.project_image} alt={post.title.rendered} loading="lazy"/>
                                    </div>
                                </Link>
                            </div>
                        )}
                        </div>
                    </div>
                }
            </section>
        )}
        </> 
    )
}

export default Projects;