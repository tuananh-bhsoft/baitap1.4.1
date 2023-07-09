import { useState, useEffect } from "react";
import { styled } from "styled-components";

import PrimaryButton from "../buttons/Primary";
import mainLogo from "../../assets/imgs/logos/MainLogo.svg";
import hamburgerMenu from "../../assets/icons/design-elements/HamburgerMenu.svg";
import close from "../../assets/icons/design-elements/Close.svg";

const StyledHeader = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.space["30"]};
  left: 0;
  width: 100%;
  z-index: 1;
  transition: ${({ theme }) => theme.transition};

  &.scrolled {
    top: 0;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 10px 13px 80px 14px rgba(242, 244, 255, 0.95);
  }

  .content-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: ${({ theme }) => theme.contentWidth};
    padding: ${({ theme }) => theme.space["10"]} 0;
    margin: 0 auto;

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      column-gap: ${({ theme }) => theme.space["40"]};

      .hamburger {
        display: none;
        width: 30px;

        &:hover {
          cursor: pointer;
        }
      }

      .nav-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: ${({ theme }) => theme.space["40"]};
        list-style-type: none;

        .nav-item {
          a {
            text-decoration: none;
            color: ${({ theme }) => theme.text.tertiary.medium};
            font-size: ${({ theme }) => theme.font.m};
            font-weight: 400;
            white-space: nowrap;
            transition: ${({ theme }) => theme.transition};
          }

          &.active a {
            color: ${({ theme }) => theme.text.primary.light};
            font-weight: 600;
          }

          &:hover a {
            cursor: pointer;
            color: ${({ theme }) => theme.text.primary.light};
          }
        }
      }
    }
  }

  .side-drawer {
    display: none;

    .overlay {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: -100%;
      background: rgba(51, 51, 51, 0.5);
      transition: 0.5s ease-in-out;

      &-shown {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(51, 51, 51, 0.5);
        transition: 0.5s ease-in-out;
      }
    }

    .drawer-content {
      position: fixed;
      top: 0;
      left: -350px;
      width: 350px;
      height: 100%;
      background: ${({ theme }) => theme.bg.white};
      padding: ${({ theme }) => theme.space["20"]};
      transition: 0.5s ease-in-out;

      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .close {
          width: 30px;

          &:hover {
            cursor: pointer;
          }
        }
      }

      .side-nav-links {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        row-gap: ${({ theme }) => theme.space["20"]};
        list-style-type: none;
        padding-left: 5px;
        margin-top: ${({ theme }) => theme.space["30"]};

        .side-nav-item {
          a {
            text-decoration: none;
            color: ${({ theme }) => theme.text.tertiary.medium};
            font-size: ${({ theme }) => theme.font.m};
            font-weight: 500;
            white-space: nowrap;
            transition: ${({ theme }) => theme.transition};
          }

          &.active a {
            color: ${({ theme }) => theme.text.primary.light};
            font-weight: 600;
          }

          &:hover a {
            cursor: pointer;
            color: ${({ theme }) => theme.text.primary.light};
          }
        }
      }

      &-shown {
        position: fixed;
        top: 0;
        left: 0;
        width: 350px;
        height: 100%;
        background: ${({ theme }) => theme.bg.white};
        padding: ${({ theme }) => theme.space["20"]};
        transition: 0.5s ease-in-out;

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .close {
            width: 30px;

            &:hover {
              cursor: pointer;
            }
          }
        }

        .side-nav-links {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          row-gap: ${({ theme }) => theme.space["20"]};
          list-style-type: none;
          padding-left: 5px;
          margin-top: ${({ theme }) => theme.space["30"]};

          .side-nav-item {
            a {
              text-decoration: none;
              color: ${({ theme }) => theme.text.tertiary.medium};
              font-size: ${({ theme }) => theme.font.m};
              font-weight: 500;
              white-space: nowrap;
              transition: ${({ theme }) => theme.transition};
            }

            &.active a {
              color: ${({ theme }) => theme.text.primary.light};
              font-weight: 600;
            }

            &:hover a {
              cursor: pointer;
              color: ${({ theme }) => theme.text.primary.light};
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    .content-wrapper {
      padding: ${({ theme }) => theme.space["10"]}
        ${({ theme }) => theme.space["40"]};

      .nav {
        .hamburger {
          display: block;
        }

        .nav-links {
          display: none;
        }
      }
    }

    .side-drawer {
      display: block;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    .content-wrapper {
      .nav {
        .contact-button {
          display: none;
        }
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    .side-drawer {
      .drawer-content-shown {
        width: 100%;
      }
    }
  }
`;

const Header = () => {
  const [drawerIsShown, setDrawerIsShown] = useState(false);
  const [pageIsScrolled, setPageIsScrolled] = useState(false);

  useEffect(() => {
    const header = document.querySelector(".header");
    const headerHeight = header.offsetHeight;
    const onScroll = () => {
      const scrolledHeight = window.scrollY;

      if (scrolledHeight > headerHeight) {
        setPageIsScrolled(true);
      } else {
        setPageIsScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const toggleDrawerIsShown = () => {
    setDrawerIsShown((prevState) => {
      return !prevState;
    });
  };

  return (
    <StyledHeader className={pageIsScrolled ? "header scrolled" : "header"}>
      <div className="content-wrapper">
        <img className="main-logo" src={mainLogo} alt="Main logo" />
        <div className="nav">
          <img
            className="hamburger"
            src={hamburgerMenu}
            alt="Hamburger"
            onClick={toggleDrawerIsShown}
          />
          <ul className="nav-links">
            <li className="nav-item active">
              <a href="/">Home +</a>
            </li>
            <li className="nav-item">
              <a href="/">About</a>
            </li>
            <li className="nav-item">
              <a href="/">Service</a>
            </li>
            <li className="nav-item">
              <a href="/">Gallery</a>
            </li>
            <li className="nav-item">
              <a href="/">Blog</a>
            </li>
          </ul>
          <div className="contact-button">
            <PrimaryButton>Contact</PrimaryButton>
          </div>
        </div>
      </div>

      <div className="side-drawer">
        <div
          className={drawerIsShown ? "overlay-shown" : "overlay"}
          onClick={toggleDrawerIsShown}
        ></div>
        <div
          className={drawerIsShown ? "drawer-content-shown" : "drawer-content"}
        >
          <div className="top">
            <img className="main-logo" src={mainLogo} alt="Main logo" />
            <img
              className="close"
              src={close}
              alt="Close"
              onClick={toggleDrawerIsShown}
            />
          </div>
          <ul className="side-nav-links">
            <li className="side-nav-item active">
              <a href="/">Home +</a>
            </li>
            <li className="side-nav-item">
              <a href="/">About</a>
            </li>
            <li className="side-nav-item">
              <a href="/">Service</a>
            </li>
            <li className="side-nav-item">
              <a href="/">Gallery</a>
            </li>
            <li className="side-nav-item">
              <a href="/">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
