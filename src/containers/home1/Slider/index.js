import { styled } from "styled-components";

import CallToActionButton from "../../../components/buttons/CallToAction";
import frame1 from "../../../assets/imgs/slide/Frame1.svg";

const StyledSlider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .slide-container {
    padding: ${({ theme }) => theme.space["100"]} 0;
    margin-top: ${({ theme }) => theme.space["120"]};

    .slide {
      display: flex;
      justify-content: space-between;
      align-items: center;
      column-gap: ${({ theme }) => theme.space["40"]};

      .slide-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        flex: 1;

        .title {
          color: ${({ theme }) => theme.text.primary.medium};
          font-size: ${({ theme }) => theme.font.xl};
          line-height: 125%;
          letter-spacing: normal;
        }

        .description {
          color: ${({ theme }) => theme.text.primary.medium};
          font-size: ${({ theme }) => theme.font.m};
          font-weight: normal;
          margin-top: ${({ theme }) => theme.space["20"]};
        }

        .more-details {
          margin-top: ${({ theme }) => theme.space["40"]};
        }
      }

      .slide-img {
        flex: 1;

        img {
          width: 100%;
        }
      }
    }
  }

  .slide-marker {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: ${({ theme }) => theme.space["10"]};

    .marker {
      background: ${({ theme }) => theme.bg.tertiary.medium};
      height: 3px;
      width: 15px;
      border-radius: 50px;

      &.active {
        background: ${({ theme }) => theme.bg.secondary.light};
        height: 8px;
        width: 25px;
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    & {
      padding: 0 ${({ theme }) => theme.space["40"]};

      .slide-container {
        .slide {
          .slide-info {
            align-items: center;
            text-align: center;
          }

          .slide-img {
            display: none;
          }
        }
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
  }
`;

const Slider = () => {
  return (
    <StyledSlider>
      <div className="slide-container">
        <div className="slide">
          <div className="slide-info">
            <p className="title">Clinic & beauty consultant</p>
            <p className="description">
              It is a long established fact that a reader will be by the
              readable content of a page.
            </p>
            <div className="more-details">
              <CallToActionButton>More Details</CallToActionButton>
            </div>
          </div>
          <div className="slide-img">
            <img src={frame1} alt="Slide" />
          </div>
        </div>
      </div>
      <div className="slide-marker">
        <div className="marker"></div>
        <div className="marker active"></div>
        <div className="marker"></div>
      </div>
    </StyledSlider>
  );
};

export default Slider;
