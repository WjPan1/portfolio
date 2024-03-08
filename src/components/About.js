// import { useEffect, useState } from "react"

function About ( {restData} ) {

        // 将文本按换行符分割成数组

        let paragraphs = [];
        if (restData.acf) {
            paragraphs = restData.acf.introduction.split('\n');
        }


    return (
        <section id="about" className="about-container">
            <h1>About</h1>

            {/* 使用 map 函数渲染每一行 */}
            {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}

            {/* development skill */}
            {restData.acf && restData.acf.development_category.map((item, index) => (
                <p key={index}>{item.development_skill}</p>
            ))}
            {/* design skill */}
            {restData.acf && restData.acf.design_category.map((item, index) => (
                <p key={index}>{item.design_skill}</p>
            ))}


        </section>
    )
}

export default About;