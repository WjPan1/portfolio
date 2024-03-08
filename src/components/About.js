// import { useEffect, useState } from "react"

function About ( {restData} ) {

        // 将文本按换行符分割成数组

        // let paragraphs = [];
        // if (restData.acf) {
        //     paragraphs = restData.acf.introduction.split('\n');
        // }


    return (
        <section id="about" className="about-container">
            <h1>About</h1>

            {restData.acf &&
                <div>
                    {/* intro about myself */}
                    <div dangerouslySetInnerHTML={{__html:restData.acf.introduction}}></div>

                    {/* development skill */}
                    { restData.acf.development_category.map((item, index) => (
                        <p key={index}>{item.development_skill}</p>
                    ))}
                    {/* design skill */}
                    {restData.acf.design_category.map((item, index) => (
                        <p key={index}>{item.design_skill}</p>
                    ))}

                </div>
            }
        </section>
    )
}

export default About;