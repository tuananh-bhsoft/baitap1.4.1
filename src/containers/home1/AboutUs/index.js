import { styled } from "styled-components";

import CallToActionButton from "../../../components/buttons/CallToAction";
import PlayButton from "../../../components/buttons/Play";
import aboutusImg from "../../../assets/imgs/about/unsplash_LRXYS0tSyGc.png";

const StyledAboutUs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: ${({ theme }) => theme.space["40"]};
  margin-top: ${({ theme }) => theme.space["200"]};

  .section-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: ${({ theme }) => theme.space["10"]};
    flex: 1;
    align-items: flex-start;

    .section-header {
      color: ${({ theme }) => theme.text.secondary.medium};
      font-size: ${({ theme }) => theme.font.m};
      line-height: 125%;
      letter-spacing: normal;
    }

    .section-title {
      color: ${({ theme }) => theme.text.primary.medium};
      font-size: ${({ theme }) => theme.font.lg};
      line-height: 125%;
      letter-spacing: normal;
    }

    .section-description {
      color: ${({ theme }) => theme.text.tertiary.medium};
      font-size: ${({ theme }) => theme.font.m};
      font-weight: 400;
    }

    .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      column-gap: ${({ theme }) => theme.space["40"]};
      margin-top: ${({ theme }) => theme.space["60"]};

      .learn-more {
      }

      .watch-video {
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: ${({ theme }) => theme.space["10"]};

        p {
          color: ${({ theme }) => theme.text.tertiary.medium};
          font-size: ${({ theme }) => theme.font.m};
        }
      }
    }
  }

  .section-content {
    flex: 1;
    width: 50%;

    img {
      width: 100%;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    & {
      padding: 0 ${({ theme }) => theme.space["40"]};

      .section-info {
        align-items: center;
        text-align: center;

        .actions {
          align-self: center;

          .watch-video {
            display: none;
          }
        }
      }

      .section-content {
        display: none;
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
  }
`;

const AboutUs = () => {
  return (
    <StyledAboutUs>
      <div className="section-info">
        <p className="section-header">About Us</p>
        <p className="section-title">We are the best beauty clinic</p>
        <p className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
          suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc,
          ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse
          placerat. Id dui erat sed quam tellus in purus. Pellentesque congue
          fringilla cras tellus enim.
        </p>
        <div className="actions">
          <div className="learn-more">
            <CallToActionButton>Learn More</CallToActionButton>
          </div>
          <div className="watch-video">
            <PlayButton />
            <p>Watch Video</p>
          </div>
        </div>
      </div>
      <div className="section-content">
        <img src={aboutusImg} alt="About us" />
      </div>
    </StyledAboutUs>
  );
};

export default AboutUs;
