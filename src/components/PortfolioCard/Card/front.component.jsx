import Image from 'next/image';
import { CardDescription, CardTitle } from '../styledComponent';

const ImageCard = ({ projectImgSrc }) => {
  return (
    <Image
      src={projectImgSrc}
      alt="Project cover page image"
      width={1000}
      height={1000}
    />
  );
};

const PortfolioCardFront = ({ project }) => {
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
