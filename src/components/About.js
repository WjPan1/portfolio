import { useEffect, useState } from "react"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { DevelopmentSkills, DesignSkills, FilterSkillContainer } from '../utilities/toolbelt';



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
                {/* intro about myself */}
                <div className='intro-myself'>
                    {restData.acf.introduction.split('\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                {/* skills */}
                <div className="skill-container">
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
                                <div className="all-skill-container skill-list">
                                    <FilterSkillContainer skill={DevelopmentSkills}/>
                                    <FilterSkillContainer skill={DesignSkills}/>
                                </div>

                            </TabPanel>
                            
                            {/* development skill */}
                            <TabPanel value="2">                        
                                <div className="development-skill-container skill-list">
                                    <FilterSkillContainer skill={DevelopmentSkills}/>
                                </div>
                            </TabPanel>
                            
                            {/* design skill */}                    
                            <TabPanel value="3">                        
                                <div className="design-skill-container skill-list">
                                    <FilterSkillContainer skill={DesignSkills}/>
                                </div>
                            </TabPanel>
                        </TabContext>
                    </Box>
                </div>
            </section>
        )}
        </> 
    )
}

export default About;