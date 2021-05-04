import Image from 'next/image';
import {
    CardDescription,
    CardTitle,
    CardIcon,
    CardLink,
    CardLinkWrapper
} from '../styledComponent';


const myLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
}

const Gif = ({ projectDemoSrc }) => {
    return (
        <Image
            loader={myLoader}
            src={projectDemoSrc || "assets/demos/Mod1-Project_DEMO-Full_v2"}
            alt="gif"
            width={1000}
            height={1000}
        />
    );
}

const PortfolioCardFront = ({ project }) => {
    return (
        <>
            <CardTitle>
                {project.title}
            </CardTitle>
            <Gif projectDemoSrc={project.demo} />
            <CardDescription>
                {project.desc}
            </CardDescription>
        </>
    );
};


export default PortfolioCardFront;
