import { styled } from "styled-components";

import animation1 from "../../../assets/imgs/service/Animation1.svg";
import animation2 from "../../../assets/imgs/service/Animation2.svg";
import animation3 from "../../../assets/imgs/service/Animation3.svg";

const StyledMainServices = styled.div`
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
      width: 40%;
    }

    .section-description {
      color: ${({ theme }) => theme.text.tertiary.medium};
      font-size: ${({ theme }) => theme.font.m};
      font-weight: 400;
      width: 80%;
    }
  }

  .section-content {
    display: grid;
    grid-template-columns: repeat(3, auto);
    column-gap: ${({ theme }) => theme.space["60"]};
    margin-top: ${({ theme }) => theme.space["100"]};

    .service-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background: ${({ theme }) => theme.bg.white};
      padding: 50px;
      border-radius: 40px;
      box-shadow: 0 25px 50px 25px ${({ theme }) => theme.shadow.primary};
      transition: ${({ theme }) => theme.transition};

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
        max-width: 166px;
        max-height: 166px;
      }

      &:hover {
        box-shadow: 0px 25px 50px 25px ${({ theme }) => theme.shadow.secondary};
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    & {
      padding: 0 ${({ theme }) => theme.space["40"]};

      .section-info {
        .section-title {
          width: 60%;
        }

        .section-description {
          width: 90%;
        }
      }

      .section-content {
        grid-template-columns: repeat(2, auto);
        row-gap: ${({ theme }) => theme.space["60"]};
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    .section-content {
      grid-template-columns: auto;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    .section-info {
      .section-title {
        width: 100%;
      }

      .section-description {
        width: 100%;
      }
    }
  }
`;

const MainServices = () => {
  return (
    <StyledMainServices>
      <div className="section-info">
        <p className="section-header">Main Services</p>
        <p className="section-title">Learn services to focus on your beauty</p>
        <p className="section-description">
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis.
        </p>
      </div>
      <div className="section-content">
        <div className="service-card">
          <img src={animation1} alt="Card" />
          <div className="card-info">
            <p className="card-title">Beauty consultation</p>
            <p className="card-description">
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </p>
          </div>
        </div>
        <div className="service-card">
          <img src={animation2} alt="Card" />
          <div className="card-info">
            <p className="card-title">Skin treatments</p>
            <p className="card-description">
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </p>
          </div>
        </div>
        <div className="service-card">
          <img src={animation3} alt="Card" />
          <div className="card-info">
            <p className="card-title">Beauty product</p>
            <p className="card-description">
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </p>
          </div>
        </div>
      </div>
    </StyledMainServices>
  );
};

export default MainServices;
