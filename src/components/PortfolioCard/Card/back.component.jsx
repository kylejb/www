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
            src={projectDemoSrc}
            alt="Gif demo of project"
            width={1000}
            height={1000}
        />
    );
}

const PortfolioCardBack = ({ project }) => {
    return (
        <>
            <CardTitle className='portfolio-card-content__title'>
                {project.title}
            </CardTitle>

            <Gif projectDemoSrc={project.demo} />

            <CardLinkWrapper className='portfolio-card-content__icon'>
                {project.icons.map(icon =>
                    <CardLink
                        key={icon.id}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={icon.link}
                    ><CardIcon className={icon.classname}></CardIcon></CardLink>)
                }
            </CardLinkWrapper>

            <CardLinkWrapper className='portfolio-card-content__links'>
                {project.github.link.length > 1
                    ? project.github.link.map(repo =>
                        <CardLink
                            key={repo.label}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={repo.link}
                        >{repo.label}</CardLink>)
                    : (
                        <CardLink
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project.github.link[0]}
                        >
                            {project.github.label}
                        </CardLink>)
                }
            </CardLinkWrapper>
            <CardDescription className='portfolio-card-content__desc'>
            </CardDescription>
        </>
    );
};


export default PortfolioCardBack;
