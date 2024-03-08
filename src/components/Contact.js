function Contact ( {restData} ) {
    return (
        <section id="contact" className="contact-container">
            <h1>Contact</h1>
            <p>{restData.acf && restData.acf.contact_info}</p>
            <p>{restData.acf && <a href={`mailto:${restData.acf.email_address}`}>{restData.acf.email_address}</a>}</p>
            <button className="copy-btn">Copy</button>
        </section>
    )
}

export default Contact;