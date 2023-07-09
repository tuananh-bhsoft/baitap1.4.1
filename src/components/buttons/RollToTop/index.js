import { styled } from "styled-components";

import rollToTop from "../../../assets/icons/design-elements/RollToTop.svg";

const StyledRollToTop = styled.div`
  display: block;

  div {
    width: 36px;
    height: 36px;
    background: ${({ theme }) => theme.bg.primary.medium};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 50px;
    bottom: 100px;
    transition: ${({ theme }) => theme.transition};

    &:hover {
      cursor: pointer;
      background: ${({ theme }) => theme.bg.secondary.medium};
      box-shadow: -2px 6px 16px -1px ${({ theme }) => theme.shadow.secondary};
    }
  }
`;

const RollToTopButton = () => {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <StyledRollToTop onClick={scrollToTop}>
      <div>
        <img src={rollToTop} alt="Roll to top button" />
      </div>
    </StyledRollToTop>
  );
};

export default RollToTopButton;
