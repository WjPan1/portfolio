import { useEffect, useState } from "react";
// import Loading from '../components/Loading';


function Contact ( {restBase} ) {
    const [copied, setCopied] = useState(false);
    
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

    const handleCopy = () => {
        navigator.clipboard.writeText(restData.acf.email_address);
        setCopied(true);
    };
    
    return (
        <>
        { isLoaded && (
            <section id="contact" className="contact-container">
                    <h2>Contact</h2>

                        <div className="contact-info">
                            {restData.acf.contact_info.split('\n').map((paragraph, index) => (
                                <p key={index} className="contact-hook">{paragraph} </p> 
                            ))}

                            <p className="email">{<a href={`mailto:${restData.acf.email_address}`}>{restData.acf.email_address}</a>}
                            </p>

                            <div className="button-container">
                                <button className={copied ? "is-copied-button" : "copy-button"} onClick={handleCopy}>{copied ? 'Email Copied!' : 'Copy My Email!'}</button>
                            </div>

                            <div className="social-media">
                                <a href="https://www.linkedin.com/in/wenjing-pan01/" target="_blank" rel="noreferrer">LinkedIn</a>
                                <a href="https://www.google.com/" target="_blank" rel="noreferrer">GitHub</a>
                            </div>
                        </div>
            </section>

        )}
        </> 
    )
}

export default Contact;