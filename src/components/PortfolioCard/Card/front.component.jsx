import { CardDescription, CardTitle } from '../styledComponent';

const PortfolioCardFront = ({ project }) => {
  return (
    <>
      <CardTitle>
        {project.title}
      </CardTitle>

      <CardDescription>
        {project.desc}
      </CardDescription>

      <div className='portfolio-card-content__icon'>
        {project.icons.map(icon =>
          <a
            key={icon.id}
            target="_blank"
            rel="noopener noreferrer"
            href={icon.link}
          ><i className={icon.classname}></i></a>)
        }
      </div>

      <div className='portfolio-card-content__links'>
        {project.github.link.length > 1
          ? project.github.link.map(repo =>
            <a
              key={repo.label}
              target="_blank"
              rel="noopener noreferrer"
              href={repo.link}
            >{repo.label}</a>)
          : (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.github.link[0]}
            >
              {project.github.label}
            </a>)
        }
      </div>
    </>
  );
};


export default PortfolioCardFront;
