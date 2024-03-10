import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

function Projects ( {restBase, classname, title} ) {
    const restPath = restBase + 'posts?_embed&acf_format=standard'
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


    // Change the arrow svg in slider
    function SliderPrevArrow(props) {
        const { className, onClick } = props;
        return (
            <div
            className={className}
            style={{ display: "block" }}
            onClick={onClick}
            > <ArrowBackIosRoundedIcon />

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
            <ArrowForwardIosRoundedIcon />
            </div>
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true, // 启用自动轮播
        autoplaySpeed: 5000, // 自动轮播间隔时间，以毫秒为单位
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <SliderPrevArrow />,
        nextArrow: <SliderNextArrow />,
    };
    
    
    return (
        <section id="projects" className="projects-container">
            <h1>{title}</h1>


            {classname === "project-slide" &&
                <div className="slider-container">

                <Slider {...settings}>

                    {restData.map(post => 
                        <div className="project-card" key={post.id} id={`post-${post.id}`}>
                            <img src={post.acf.image_slide[0].one_slide} alt={post.title.rendered} />

                            <div className="card-content">
                                <h2>{post.title.rendered}</h2>
                                <p>{post.acf.brief_overview}</p>

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
                <div className="no-slider-container">

                {restData.map(post => 
                    <div className="project-card" key={post.id} id={`post-${post.id}`}>
                        <img src={post.acf.image_slide[0].one_slide} alt={post.title.rendered} min-width={300}/>

                        <div className="card-content">

                            <h2>{post.title.rendered}</h2>
                            <p>{post.acf.brief_overview}</p>

                            <p className='skill-container'>
                                {post.acf.skill_used_for_this_project.slice(0, 3).map((item, index) => (
                                    <span key={index}>{item.single_skill_name}</span>
                                ))}
                            </p>

                            <Link to={`/project/${post.slug}`}>More Info</Link>
                        </div>
                    </div>
                )}
                </div>
            }
  

        </section>
    )
}

export default Projects;