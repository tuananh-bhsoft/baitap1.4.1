import { styled } from "styled-components";

const StyledPrimaryButton = styled.button`
  background: ${({ theme }) => theme.bg.primary.medium};
  color: ${({ theme }) => theme.text.white};
  font-size: ${({ theme }) => theme.font.m};
  padding: 15px 40px;
  border: none;
  border-radius: 50px;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.bg.secondary.medium};
  }
`;

const PrimaryButton = ({ children }) => {
  return <StyledPrimaryButton>{children}</StyledPrimaryButton>;
};

export default PrimaryButton;
