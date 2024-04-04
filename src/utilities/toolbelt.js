// skills icons
import { FaFigma, FaHtml5, FaSass, FaReact, FaWordpress, FaShopify, FaBootstrap } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiAdobeillustrator, SiCss3, SiWoo } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";


// skills lists
// ----------------------
export const DevelopmentSkills = [
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: SiCss3 },
    { name: 'Sass', icon: FaSass },
    { name: 'JavaScript', icon: RiJavascriptFill },
    { name: 'React', icon: FaReact },
    { name: 'WordPress', icon: FaWordpress },
    { name: 'WooCommerce', icon: SiWoo },
    { name: 'Shopify', icon: FaShopify },
    { name: 'Bootstrap', icon: FaBootstrap },
];
    
export const DesignSkills = [
    { name: 'Figma', icon: FaFigma },
    { name: 'Adobe XD', icon: SiAdobexd },
    { name: 'Adobe Photoshop', icon: SiAdobephotoshop },
    { name: 'Adobe Illustrator', icon: SiAdobeillustrator },
];

export const SkillContainer = ({ skills }) => (
    <>
    {skills.map((skill, index) => {
        const Icon = skill.icon;
        return (
            <div key={index} className="skill">
            <span><Icon role="img" aria-label={`${skill.name} Icon`}/></span>
            <p>{skill.name}</p>
            </div>
        );
    })}
    </>
);
    
export const FilterSkillContainer = ( {skill} ) => (
    <SkillContainer skills={skill} />
);


// Slider setting on Single Page
// ----------------------
function SliderPrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
        className={className}
        style={{ display: "block" }}
        onClick={onClick}> 
        </div>
    );
}

function SliderNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
        className={className}
        style={{ display: "block" }}
        onClick={onClick}>
        </div>
    );
}

export const settings = {
    infinite: true,
    slidesToShow: 1,
    prevArrow: <SliderPrevArrow />,
    nextArrow: <SliderNextArrow />,
};


// Overview excerpt in Project Card
// ----------------------
export const Excerpt = ({ text, maxLength }) => {
    const excerpt = text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
    return <p className="overview">{excerpt}</p>;
}
    


