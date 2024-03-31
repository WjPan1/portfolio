import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";


// import Loading from '../components/Loading';



function Projects ( {restBase, classname, title} ) {
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


    // Change the arrow svg in slider
    function SliderPrevArrow(props) {
        const { className, onClick } = props;
        return (
            <div
            className={className}
            style={{ display: "block" }}
            onClick={onClick}
            > <IoIosArrowBack />

            </div>
        );
    }

    function SliderNextArrow(props) {
        const { className, onClick } = props;
        return (
            <div
            className={className}
            style={{ display: "block" }}
            onClick={onClick}
            >
            <IoIosArrowForward />
            </div>
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        // autoplay: true, 
        // autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <SliderPrevArrow />,
        nextArrow: <SliderNextArrow />,
    };

    function Excerpt({ text, maxLength }) {
        const excerpt = text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
      
        return <p>{excerpt}</p>;
      }
    
    
    return (
        <>
        { isLoaded && (
            <section id={classname !== "project-slide" ? "projects" : undefined} className="projects-container">
                {/* <h2>{title}</h2> */}

                {classname === "project-slide" &&

                    <div className="slider-container">
                        <h2>{title}</h2>

                    <Slider {...settings}>

                        {restData.map(post => 
                            <div className="project-card" key={post.id} id={`post-${post.id}`}>
                                <div className="image-container">

                                    <img src={post.acf.image_slide[0].one_slide} alt={post.title.rendered} />
                                </div>

                                <div className="card-content">
                                    <h3>{post.title.rendered}</h3>
                                    {/* <p>{post.acf.overview}</p> */}
                                    <Excerpt text={post.acf.overview} maxLength={50} />

                                    <p className='skill-container'>
                                        {post.acf.skill_used_for_this_project.slice(0, 3).map((item, index) => (
                                            <span key={index}>{item.single_skill_name}</span>
                                        ))}
                                    </p>

                                    <Link to={`/project/${post.slug}`}>More Info</Link>
                                </div>
                            </div>
                        )}

                    </Slider>
                    </div>

                }

                {classname !== "project-slide" && 
                    // <div className="no-slider-container">

                        <div className="home-project-container">
                            <h2>{title}</h2>
                            
                            <div className="card-container">

                            {restData.map(post => 
                                <div className="project-card" key={post.id} id={`post-${post.id}`}>
                                    <div className="card-content">

                                        <h3>{post.title.rendered}</h3>
                                        <Excerpt text={post.acf.overview} maxLength={50} />


                                        <div className='skill-container'>
                                            {post.acf.skill_used_for_this_project.slice(0, 3).map((item, index) => (
                                                <p key={index}>{item.single_skill_name}</p>
                                            ))}
                                        </div>

                                        <div className="link-to-project">
                                            <Link to={`/project/${post.slug}`}>
                                                <span>More Info</span>
                                                <FaLongArrowAltRight />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="image-container">
                                        <img src={post.acf.image_slide[0].one_slide} alt={post.title.rendered} />
                                    </div>
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