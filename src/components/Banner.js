function Banner ( {restData} ) {
    return (
        <section id="banner" className="banner-container">
            <h1>Banner</h1>

            <p>{restData.acf && restData.acf.my_name}</p>
            <p>{restData.acf && restData.acf.brief_intro}</p>

        </section>
    )
}

export default Banner;