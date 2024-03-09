import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

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
                <div className="project-detail">
                    {/* single project overview with image slide */}
                    <div className="project-intro">
                        <h2>{restData.title.rendered}</h2>
                        <p>{restData.acf.overview}</p>
                        {restData.acf.skill_used_for_this_project.map((item, index) => (
                            <img key={index} src={item.single_skill} alt={item.single_skill_name} width={50}/>
                        ))}
                        
                        <div className="image-slide">
                            {restData.acf.image_slide.map((item, index) => (
                                <img key={index} src={item.one_slide} alt={restData.title.rendered} width={500}/>
                            ))}
                        </div>

                        <button>Link to website</button>
                        <button>Link to Github</button>
                    </div>

                    <div>
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



                
            }



        </main>
    )
}

export default SingleProject;