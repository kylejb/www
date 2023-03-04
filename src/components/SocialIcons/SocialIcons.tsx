import { siDevdotto, siGithub, siLinkedin, siTwitter } from 'simple-icons';

import Icon from './Icon';
import { StyledContainer, StyledAnchorTag } from './styledComponents';

const SocialIcon = () => {
  return (
    <StyledContainer>
      <StyledAnchorTag
        id="github-icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/kylejb"
      >
        <Icon icon={siGithub} size={48} />
      </StyledAnchorTag>
      <StyledAnchorTag
        id="twitter-icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/kyleburda"
      >
        <Icon icon={siTwitter} size={48} />
      </StyledAnchorTag>
      <StyledAnchorTag
        id="devto-icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://dev.to/kylejb"
      >
        <Icon icon={siDevdotto} size={70} />
      </StyledAnchorTag>
      <StyledAnchorTag
        id="linkedin-icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/kyleburda"
      >
        <Icon icon={siLinkedin} size={48} />
      </StyledAnchorTag>
    </StyledContainer>
  );
};

export default SocialIcon;
