import { styled } from "styled-components";

const StyledCallToAction = styled.button`
  background: ${({ theme }) => theme.bg.primary.medium};
  color: ${({ theme }) => theme.text.white};
  font-size: ${({ theme }) => theme.font.m};
  padding: 15px 40px;
  border: none;
  border-radius: 50px;
  box-shadow: 0px 17px 22px ${({ theme }) => theme.bg.tertiary.medium};
  transition: ${({ theme }) => theme.transition};

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.bg.secondary.medium};
    box-shadow: 0px 25px 50px 25px ${({ theme }) => theme.shadow.secondary};
  }
`;

const CallToActionButton = ({ children }) => {
  return <StyledCallToAction>{children}</StyledCallToAction>;
};

export default CallToActionButton;
