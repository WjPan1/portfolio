import { useState } from "react"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function About ( {restData} ) {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    return (
        <section id="about" className="about-container">
            <h1>About</h1>

            {restData.acf &&
                <div>
                    {/* intro about myself */}
                    {/* 为每个段落创建一个<p>元素 */}
                    <div className='intro-myself'>
                        {restData.acf.introduction.split('\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    {/* development skill */}
                    <div className='development-skill-container'>
                        { restData.acf.development_category.map((item, index) => (
                            <p key={index}>{item.development_skill}</p>
                        ))}
                    </div>

                    {/* design skill */}                    
                    <div className='design-skill-container'>

                    </div>

                    <h2>Skills</h2>
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
                                { restData.acf.development_category.map((item, index) => (
                                    <p key={index}>{item.development_skill}</p>
                                ))}
                                {restData.acf.design_category.map((item, index) => (
                                <p key={index}>{item.design_skill}</p>
                                ))}
                            </TabPanel>
                            
                            <TabPanel value="2">                        
                                { restData.acf.development_category.map((item, index) => (
                                    <p key={index}>{item.development_skill}</p>
                                ))}
                            </TabPanel>
                            
                            <TabPanel value="3">                        
                                {restData.acf.design_category.map((item, index) => (
                                    <p key={index}>{item.design_skill}</p>
                                ))}
                            </TabPanel>
                        
                        </TabContext>
                    </Box>
                </div>
            }
        </section>
    )
}

export default About;