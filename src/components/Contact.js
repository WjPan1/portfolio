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
            <h2>Contact</h2>


            {restData.acf && 
                <div className="contact-info">
                    {/* 为每个段落创建一个<p>元素 */}
                    <div>{restData.acf.contact_info.split('\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p> 
                    ))}</div>

                    <p>{<a href={`mailto:${restData.acf.email_address}`}>{restData.acf.email_address}</a>}</p>
                </div>
            }
            <button className="copy-btn" onClick={handleCopy}>{copied ? 'Copied!' : 'Copy'}</button>
        </section>
    )
}

export default Contact;