import { useEffect, useState } from "react"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

// skills icons
import { FaFigma } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { SiWoo } from "react-icons/si";
import { FaShopify } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";

// import Loading from '../components/Loading';

function About ( {restBase} ) {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


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
            <section id="about" className="about-container">
                <h2>About</h2>

                {restData.acf &&
                    <div>
                        {/* intro about myself */}
                        {/* 为每个段落创建一个<p>元素 */}
                        <div className='intro-myself'>
                            {restData.acf.introduction.split('\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        <h3>Skills</h3>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="All" value="1" />
                                    <Tab label="Development" value="2" />
                                    <Tab label="Design" value="3" />
                                </TabList>
                                </Box>
                                <TabPanel value="1">                        
                                    {/* { restData.acf.development_category.map((item, index) => (
                                        <p key={index}>{item.development_skill}</p>
                                    ))}
                                    {restData.acf.design_category.map((item, index) => (
                                    <p key={index}>{item.design_skill}</p>
                                    ))} */}
                                    <div className="development-skill-container">
                                        <FaHtml5 />
                                        <SiCss3 />
                                        <FaSass />
                                        <RiJavascriptFill />
                                        <FaReact />
                                        <FaWordpress />
                                        <SiWoo />
                                        <FaShopify />
                                        <FaBootstrap />

                                    </div>

                                    <div className="design-skill-container">
                                        <FaFigma />
                                        <SiAdobexd />
                                        <SiAdobephotoshop />
                                        <SiAdobeillustrator />
                                    </div>
                                </TabPanel>
                                
                                {/* development skill */}
                                <TabPanel value="2">                        
                                    {/* { restData.acf.development_category.map((item, index) => (
                                        <p key={index}>{item.development_skill}</p>
                                    ))} */}
                                    <div className="development-skill-container">
                                        <FaHtml5 />
                                        <SiCss3 />
                                        <FaSass />
                                        <RiJavascriptFill />
                                        <FaReact />
                                        <FaWordpress />
                                        <SiWoo />
                                        <FaShopify />
                                        <FaBootstrap />

                                    </div>


                                </TabPanel>
                                
                                {/* design skill */}                    
                                <TabPanel value="3">                        
                                    {/* {restData.acf.design_category.map((item, index) => (
                                        <p key={index}>{item.design_skill}</p>
                                    ))} */}
                                    <div className="design-skill-container">
                                        <FaFigma />
                                        <SiAdobexd />
                                        <SiAdobephotoshop />
                                        <SiAdobeillustrator />
                                    </div>

                                </TabPanel>
                            
                            </TabContext>
                        </Box>
                    </div>
                }
            </section>

        )}
        </> 
    )
}

export default About;