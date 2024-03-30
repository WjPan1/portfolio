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
                console.log("about found")
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

        // Reset copied state after 1 seconds
        setTimeout(() => {
            setCopied(false);
        }, 1000); 
    };
    
    return (
        <>
        { isLoaded && (
            <section id="contact" className="contact-container">
                <div className="contact-info">
                    <h2>Contact</h2>


                    {restData.acf && 
                        <div className="contact">
                            {/* 为每个段落创建一个<p>元素 */}
                            <div>{restData.acf.contact_info.split('\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p> 
                            ))}</div>

                            <p>{<a href={`mailto:${restData.acf.email_address}`}>{restData.acf.email_address}</a>}</p>
                            
                            <button className="copy-btn" onClick={handleCopy}>{copied ? 'Copied!' : 'Copy'}</button>
                        </div>
                    }
                </div>
            </section>

        )}
        </> 
    )
}

export default Contact;