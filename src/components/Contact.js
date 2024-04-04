import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import ClipboardJS from 'clipboard';

function Contact ( {restBase} ) {
    
    const restPath = restBase + 'pages/9'
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)
    const [copied, setCopied] = useState(false);

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


    useEffect(() => {
        const clipboard = new ClipboardJS('.btn');

        clipboard.on('success', () => {
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 3000); 
        });

        return () => {
            clipboard.destroy();
        };
    }, []); 
    
    
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
                                <button className={`btn ${copied ? "is-copied-button" : "copy-button"}`} data-clipboard-text={restData.acf.email_address}>{copied ? 'Email Copied!' : 'Copy My Email!'}</button>
                            </div>

                            <div className="social-media">
                                <a href="https://www.linkedin.com/in/wenjing-pan01/" target="_blank" rel="noreferrer"><FaLinkedin role="img" aria-label="LinkedIn Icon" /></a>
                                <a href="https://www.google.com/" target="_blank" rel="noreferrer"><FaGithubAlt role="img" aria-label="Github Icon" /></a>
                            </div>
                        </div>
            </section>

        )}
        </> 
    )
}

export default Contact;