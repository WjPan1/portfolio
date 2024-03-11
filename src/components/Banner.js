function Banner ( {restData} ) {
    return (
        <section id="banner" className="banner-container">
            <p className="my-name">{restData.acf && restData.acf.my_name}</p>
            <p className="my-role">{restData.acf && restData.acf.brief_intro}</p>

        </section>
    )
}

export default Banner;