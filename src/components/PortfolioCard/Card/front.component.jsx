import Image from 'next/image';
import {
    CardDescription,
    CardTitle,
} from '../styledComponent';


const myLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
}

const ImageCard = ({ projectImgSrc }) => {
    return (
        <Image
            loader={myLoader}
            src={projectImgSrc}
            alt="Project cover page image"
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
            <ImageCard projectImgSrc={project.image} />
            <CardDescription>
                {project.desc}
            </CardDescription>
        </>
    );
};


export default PortfolioCardFront;
