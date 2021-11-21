import { Project } from 'components/PortfolioPage/projects';
import Image from 'next/image';
import { CardDescription, CardTitle } from '../styledComponent';

type ImageCardProps = {
  projectImgSrc: string;
};

const ImageCard = ({ projectImgSrc }: ImageCardProps) => {
  return (
    <Image
      src={projectImgSrc}
      alt="Project cover page image"
      width={1000}
      height={1000}
    />
  );
};

type Props = {
  project: Project;
};

const PortfolioCardFront = ({ project }: Props) => {
  return (
    <>
      <CardTitle>{project.title}</CardTitle>
      <Image
        src={project.front_src}
        alt="Project cover page image"
        width={1000}
        height={1000}
      />
      <CardDescription>{project.desc}</CardDescription>
    </>
  );
};

export default PortfolioCardFront;
