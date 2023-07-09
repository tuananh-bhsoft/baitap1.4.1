import { useEffect, useState } from "react";
import { styled } from "styled-components";

import RollToTopButton from "../buttons/RollToTop";
import footerLogo from "../../assets/imgs/logos/FooterLogo.svg";
import facebookLight from "../../assets/icons/socials/FacebookLight.svg";
import twitterLight from "../../assets/icons/socials/TwitterLight.svg";
import linkedinLight from "../../assets/icons/socials/LinkedinLight.svg";
import youtubeLight from "../../assets/icons/socials/YoutubeLight.svg";
import instaLight from "../../assets/icons/socials/InstagramLight.svg";
import bullet from "../../assets/icons/design-elements/Bullet.svg";

const StyledFooter = styled.div`
  padding-top: ${({ theme }) => theme.space["200"]};
  margin-top: ${({ theme }) => theme.space["200"]};

  .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: ${({ theme }) => theme.contentWidth};
    margin: 0 auto;

    .footer-info {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;

      .authorship {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        row-gap: ${({ theme }) => theme.space["20"]};
        flex: 1;

        p {
          color: ${({ theme }) => theme.text.primary.slight};
          font-size: ${({ theme }) => theme.font.m};
          font-weight: 400;

          span {
            font-weight: 700;
          }
        }

        .info {
          font-style: italic;
          font-size: ${({ theme }) => theme.font.small};
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;

          .contact-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            column-gap: ${({ theme }) => theme.space["40"]};
          }
        }
      }

      .site-doc {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        .sitemap,
        .documents {
          flex: 1;

          .list-header {
            color: ${({ theme }) => theme.text.white};
            font-size: ${({ theme }) => theme.font.xm};
          }

          .list {
            list-style-image: url(${bullet});
            padding-left: 12px;
            padding-top: 15px;

            .list-item {
              color: ${({ theme }) => theme.text.primary.slight};
              font-size: ${({ theme }) => theme.font.m};
              font-weight: 400;
              margin-top: ${({ theme }) => theme.space["10"]};
            }
          }
        }
      }
    }

    .footer-socials {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin: ${({ theme }) => theme.space["100"]} 0;
      column-gap: ${({ theme }) => theme.space["40"]};

      .social-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: ${({ theme }) => theme.space["40"]};

        img {
          width: 24px;
          height: 24px;
        }
      }

      .copyright {
        color: ${({ theme }) => theme.text.primary.slight};
        font-size: ${({ theme }) => theme.font.m};
        font-weight: 400;
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    & {
      padding: ${({ theme }) => theme.space["200"]}
        ${({ theme }) => theme.space["40"]} 0
        ${({ theme }) => theme.space["40"]};

      .footer-info {
        flex-direction: column;
        row-gap: ${({ theme }) => theme.space["60"]};

        .authorship {
          width: 100%;
        }

        .site-doc {
          flex-direction: column;
          row-gap: ${({ theme }) => theme.space["60"]};
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    .footer-socials {
      flex-direction: column;
      row-gap: ${({ theme }) => theme.space["40"]};
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
  }
`;

const Footer = () => {
  const [rollToTopIsShown, setRollToTopIsShown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        setRollToTopIsShown(true);
      } else {
        setRollToTopIsShown(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <StyledFooter>
      <div className="content-wrapper">
        <div className="footer-info">
          <div className="authorship">
            <img src={footerLogo} alt="Footer logo" />
            <p>
              <span>Beautice</span> is a Beauty Clinic WordPress Theme.
            </p>
            <div className="info">
              <p>Baker Steet 101, NY, United States.</p>
              <div className="contact-info">
                <p>+521 569 8966.</p>
                <p>mail@company.com.</p>
              </div>
            </div>
          </div>
          <div className="site-doc">
            <div className="sitemap">
              <p className="list-header">Pages</p>
              <ul className="list">
                <li className="list-item">Home</li>
                <li className="list-item">About</li>
                <li className="list-item">Services</li>
                <li className="list-item">Gallery</li>
                <li className="list-item">Team</li>
              </ul>
            </div>
            <div className="documents">
              <p className="list-header">Informations</p>
              <ul className="list">
                <li className="list-item">Terms & Conditions</li>
                <li className="list-item">Privacy policy</li>
                <li className="list-item">Blog</li>
                <li className="list-item">Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-socials">
          <div className="social-links">
            <img src={facebookLight} alt="Facebook" />
            <img src={twitterLight} alt="Twitter" />
            <img src={linkedinLight} alt="Linkedin" />
            <img src={youtubeLight} alt="Youtube" />
            <img src={instaLight} alt="Instagram" />
          </div>
          <p className="copyright">
            © AltDesain Studio 2021 - All right reserved.
          </p>
        </div>
      </div>
      {rollToTopIsShown && <RollToTopButton />}
    </StyledFooter>
  );
};

export default Footer;
