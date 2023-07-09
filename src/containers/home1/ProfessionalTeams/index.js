import { styled } from "styled-components";

import professor1 from "../../../assets/imgs/professional/unsplash_pTrhfmj2jDA.png";
import professor2 from "../../../assets/imgs/professional/unsplash_FVh_yqLR9eA.png";
import professor3 from "../../../assets/imgs/professional/unsplash_mEZ3PoFGs_k.png";
import twitter from "../../../assets/icons/socials/Twitter.svg";
import facebook from "../../../assets/icons/socials/Facebook.svg";
import insta from "../../../assets/icons/socials/Instagram.svg";

const StyledProfessionalTeams = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.space["200"]};

  .section-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: ${({ theme }) => theme.space["10"]};
    align-items: center;
    text-align: center;

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
  }

  .section-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: ${({ theme }) => theme.space["100"]};

    .expert-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background: ${({ theme }) => theme.bg.white};
      padding: 50px;
      border-radius: 40px;
      box-shadow: 0 25px 50px 25px ${({ theme }) => theme.shadow.primary};

      .card-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;

        .card-header {
          color: ${({ theme }) => theme.text.secondary.medium};
          font-size: ${({ theme }) => theme.font.m};
          line-height: 125%;
          letter-spacing: normal;
        }

        .card-title {
          color: ${({ theme }) => theme.text.primary.medium};
          font-size: ${({ theme }) => theme.font.xm};
          line-height: 125%;
          letter-spacing: normal;
          margin-top: ${({ theme }) => theme.space["20"]};
        }

        .card-description {
          color: ${({ theme }) => theme.text.tertiary.medium};
          font-size: ${({ theme }) => theme.font.sm};
          font-weight: 400;
          margin-top: ${({ theme }) => theme.space["20"]};
        }
      }

      img {
        max-width: 146px;
        max-height: 146px;
        margin: ${({ theme }) => theme.space["40"]} 0;
      }

      .card-info {
        .social-links {
          display: flex;
          justify-content: space-between;
          align-items: center;
          column-gap: ${({ theme }) => theme.space["40"]};
          margin: ${({ theme }) => theme.space["40"]} 0;

          .social-icon {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: ${({ theme }) => theme.bg.white};
            padding: 12px;
            border-radius: 50px;
            box-shadow: -2px 6px 16px -1px ${({ theme }) => theme.shadow.secondary};
            transition: ${({ theme }) => theme.transition};

            img {
              width: 24px;
              height: 24px;
              margin: 0;
            }

            &:hover {
              cursor: pointer;
              box-shadow: 0px 25px 50px 25px
                ${({ theme }) => theme.shadow.secondary};
            }
          }
        }
      }

      &:first-child {
        background: transparent;
        position: relative;
        right: -30px;
        box-shadow: none;
      }

      &:last-child {
        background: transparent;
        position: relative;
        right: 30px;
        box-shadow: none;
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    & {
      padding: 0 ${({ theme }) => theme.space["40"]};

      .section-content {
        flex-direction: column;

        .expert-card {
          width: 100%;

          &:first-child {
            position: static;
          }

          &:last-child {
            position: static;
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

const ProfessionalTeams = () => {
  return (
    <StyledProfessionalTeams>
      <div className="section-info">
        <p className="section-header">Professional Teams</p>
        <p className="section-title">The Professional Expert</p>
        <p className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </p>
      </div>
      <div className="section-content">
        <div className="expert-card">
          <img src={professor1} alt="Card" />
          <div className="card-info">
            <p className="card-header">Surgeon</p>
            <p className="card-title">Briyan Nevalli</p>
            <p className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </p>
            <div className="social-links">
              <div className="social-icon">
                <img src={twitter} alt="Twitter" />
              </div>
              <div className="social-icon">
                <img src={facebook} alt="Facebook" />
              </div>
              <div className="social-icon">
                <img src={insta} alt="Instagram" />
              </div>
            </div>
          </div>
        </div>
        <div className="expert-card">
          <img src={professor2} alt="Card" />
          <div className="card-info">
            <p className="card-header">Dermatologist</p>
            <p className="card-title">Bella Sebastian</p>
            <p className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </p>
            <div className="social-links">
              <div className="social-icon">
                <img src={twitter} alt="Twitter" />
              </div>
              <div className="social-icon">
                <img src={facebook} alt="Facebook" />
              </div>
              <div className="social-icon">
                <img src={insta} alt="Instagram" />
              </div>
            </div>
          </div>
        </div>
        <div className="expert-card">
          <img src={professor3} alt="Card" />
          <div className="card-info">
            <p className="card-header">Stylist expert</p>
            <p className="card-title">Lilly Adams</p>
            <p className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </p>
            <div className="social-links">
              <div className="social-icon">
                <img src={twitter} alt="Twitter" />
              </div>
              <div className="social-icon">
                <img src={facebook} alt="Facebook" />
              </div>
              <div className="social-icon">
                <img src={insta} alt="Instagram" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledProfessionalTeams>
  );
};

export default ProfessionalTeams;
