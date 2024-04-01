import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Projects from "../components/Projects";
import Loading from '../components/Loading';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function SingleProject ( {restBase} ) {

    const { slug } = useParams();
    const restPath = restBase + `posts?slug=${slug}&_embed&acf_format=standard`
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data[0])
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

        <main className="single-project-container">
            {/* {restData.acf &&  */}
                <section className="project-detail">
                    <div className="banner-container">
                        {/* <div className="banner-content"> */}
                            <h1 className="page-title">{restData.title.rendered}</h1>
                            <div className="image-container">
                                {restData.acf.image_slide.slice(0, 1).map((item, index) => (
                                    <img key={index} src={item.one_slide} alt={restData.title.rendered} />
                                ))}
                            </div>
                            
                            <div className="cta-container">
                                <p className="cta">cta hook to test the style, click the button below</p>
                                <div className="btn-container"> 
                                    <button className="button">Live Site</button>
                                    <button className="button">GitHub</button>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>

                    <div className="project-intro">

                        <h2>Overview</h2>

                        <div className="overview-column">
                            <p className="project-overview">{restData.acf.overview}</p>

                            <div className='skill-container'>
                                <h3>Skills</h3>
                                <div className="skill-list">
                                    {restData.acf.skill_used_for_this_project.map((item, index) => (
                                        <p key={index}>{item.single_skill_name}</p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="highlight-container">
                        <h3>Highlight</h3>
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

                                            <div className="video-container">
                                                <video src={item.video} type="video/mp4" 
                                                    autoPlay
                                                    loop
                                                    playsInline>
                                                    Sorry, your browser doesn't support this particular embedded video type.
                                                </video>
                                            </div>
                                            <div className="feature-info">
                                                <h4 className="feature-title" dangerouslySetInnerHTML={{__html: item.feature_title}}></h4>
                                                <p className="feature-description" dangerouslySetInnerHTML={{__html: item.description}}></p>
                                            </div>

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
                            </Accordion>
                        </div>

                    </div>
                </section>
            {/* } */}

            {/* show other projects - CTA */}
            <Projects restBase={restBase}
                      classname={"project-slide"}
                      title={"Other Projects"} />

        </main>
        : 
        <Loading /> 
        }
        </>
    )
}

export default SingleProject;