// import { useEffect, useState } from "react"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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
                    <div className="intro-myself" dangerouslySetInnerHTML={{__html:restData.acf.introduction}}></div>

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