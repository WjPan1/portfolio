import { useEffect, useState } from 'react';

// import Loading from '../components/Loading';
import { ReactComponent as BannerBackground } from "../images/banner.svg";
import { HashLink } from 'react-router-hash-link';
import { FaLongArrowAltRight } from "react-icons/fa";


function Banner ( {restBase} ) {

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

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            setScrollPosition(currentPosition);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <>
        { isLoaded && (
            <section className="banner-container">
                <div className='background-img'><BannerBackground /></div>
                <div className="intro">
                    <p className={`my-name ${scrollPosition < 200 ? 'yellow' : 'gray'}`}>{restData.acf.my_name}</p>
                    <p className={`role ${scrollPosition < 200 ? 'yellow' : 'gray'}`}>{restData.acf && restData.acf.brief_intro}</p>
                    <p className={`mission ${scrollPosition >= 200 && scrollPosition < 400 ? 'yellow-big' : 'gray'}`}>{restData.acf && restData.acf.mission}</p>
                    <p className={`inquiry ${scrollPosition >= 200 && scrollPosition < 400 ? 'yellow-big' : 'gray'}`}>{restData.acf && restData.acf.inquiry}</p>
                    <p className={`hook ${scrollPosition >= 400 ? 'yellow-big' : 'gray'}`}>{restData.acf && restData.acf.home_hook}</p>
                    <div className={`cta-button ${scrollPosition >= 400 ? 'yellow-btn' : 'gray'}`}>
                        <HashLink to="/#projects" smooth >
                            <span>See my work</span>
                            <FaLongArrowAltRight />
                        </HashLink>
                    </div>
                </div>
                
            </section>

        )}
        </> 
    )
}

export default Banner;