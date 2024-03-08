import { useState } from "react";

function Contact ( {restData} ) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(restData.acf.email_address);
        setCopied(true);

        // Reset copied state after 1 seconds
        setTimeout(() => {
            setCopied(false);
        }, 1000); 
    };
    
    return (
        <section id="contact" className="contact-container">
            <h1>Contact</h1>
            {restData.acf && 
                <div className="contact-info">
                    <div dangerouslySetInnerHTML={{ __html: restData.acf.contact_info }}></div>

                    <p>{<a href={`mailto:${restData.acf.email_address}`}>{restData.acf.email_address}</a>}</p>
                </div>
            }
            <button className="copy-btn" onClick={handleCopy}>{copied ? 'Copied!' : 'Copy'}</button>
        </section>
    )
}

export default Contact;