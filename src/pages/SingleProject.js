import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Projects from "../components/Projects";


import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

import BackToTopButton from "../components/BackToTopButton";

// for test, need to change later
// import { SiWoo } from "react-icons/si";
// import { FaShopify } from "react-icons/fa";
// import { FaBootstrap } from "react-icons/fa";


function SingleProject ( {restBase} ) {

    const { slug } = useParams();
    const restPath = restBase + `posts?slug=${slug}&_embed&acf_format=standard`
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
            {restData.acf && 
                <section className="project-detail">
                    {/* single project overview with image slide */}
                    <div className="banner">
                        <div className="image-container">
                            {restData.acf.image_slide.slice(0, 1).map((item, index) => (
                                <img key={index} src={item.one_slide} alt={restData.title.rendered} />
                            ))}
                        </div>
                    </div>

                    <div className="project-intro">
                        <h1 className="page-title">{restData.title.rendered}</h1>

                        <h2>Overview</h2>
                        <p className="project-overview">{restData.acf.overview}</p>

                        <div className='skill-image-container'>
                            {restData.acf.skill_used_for_this_project.map((item, index) => (
                                <img key={index} src={item.single_skill} alt={item.single_skill_name} width={50}/>
                            ))}
                            {/* <ul>
                                <li className="skill-container"><SiWoo /><span>WooCommerce</span></li>
                                <li className="skill-container"><FaShopify /><span>Shopify</span></li>
                                <li className="skill-container"><FaBootstrap /><span>Shopify</span></li>
                            </ul> */}
                        </div>
                        

                        <div className="btn-container"> 
                            <button className="button">Live Site</button>
                            <button className="button">GitHub</button>
                        </div>

                        <div className="project-highlight">
                        <h2>Project Details</h2>
                            {/* feature */}
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    >
                                Features
                                </AccordionSummary>

                                <AccordionDetails>
                                    {restData.acf.features.map((item, index) => (
                                        <div key={index} className="feature-container">

                                            <video src={item.video} type="video/mp4" 
                                                autoPlay
                                                loop
                                                playsInline>
                                                Sorry, your browser doesn't support this particular embedded video type.
                                            </video>
                                            
                                            <div className="feature-description" dangerouslySetInnerHTML={{__html: item.description}}></div>

                                        </div>
                                    ))}
                                </AccordionDetails>
                            </Accordion>

                            {/* Insight */}
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3-content"
                                    id="panel3-header"
                                    >
                                Insight
                                </AccordionSummary>

                                <AccordionDetails>
                                    <div className="insight" dangerouslySetInnerHTML={{__html: restData.acf.insight}}></div>
                                </AccordionDetails>

                                <AccordionActions>

                                    <Button>Cancel</Button>
                                    <Button>Agree</Button>

                                </AccordionActions>
                            </Accordion>
                        </div>

                    </div>
                </section>
                
            }

            {/* show other projects - CTA */}
            <Projects restBase={restBase}
                      classname={"project-slide"}
                      title={"Other Projects"} />

            <BackToTopButton />
        </main>
    )
}

export default SingleProject;