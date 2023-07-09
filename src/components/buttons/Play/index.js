import { styled } from "styled-components";

import playIcon from "../../../assets/icons/design-elements/PolygonPlay.svg";

const StyledPlayButton = styled.div`
  background: ${({ theme }) => theme.bg.secondary.medium};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 50px;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.bg.secondary.light};
    box-shadow: 0px 25px 50px 25px ${({ theme }) => theme.shadow.secondary};
  }
`;

const PlayButton = () => {
  return (
    <StyledPlayButton>
      <img src={playIcon} alt="Play button" />
    </StyledPlayButton>
  );
};

export default PlayButton;
