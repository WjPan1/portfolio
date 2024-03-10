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
                    {/* 为每个段落创建一个<p>元素 */}
                    <div className='intro-myself'>
                        {restData.acf.introduction.split('\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    {/* development skill */}
                    <div className='development-skill-container'>
                        { restData.acf.development_category.map((item, index) => (
                            <p key={index}>{item.development_skill}</p>
                        ))}
                    </div>

                    {/* design skill */}                    
                    <div className='design-skill-container'>
                        {restData.acf.design_category.map((item, index) => (
                            <p key={index}>{item.design_skill}</p>
                        ))}
                    </div>
                </div>
            }
        </section>
    )
}

export default About;