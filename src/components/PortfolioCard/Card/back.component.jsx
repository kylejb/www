import Image from 'next/image';
import {
    CardDescription,
    CardTitle,
    CardIcon,
    CardLink,
    CardLinkWrapper
} from '../styledComponent';


const PortfolioCardBack = ({ project }) => {
    return (
        <>
            <CardTitle className='portfolio-card-content__title'>
                {project.title}
            </CardTitle>

            <Image
                src={project.back_src}
                alt="Gif demo of project"
                width={1000}
                height={1000}
            />

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
