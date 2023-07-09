import { styled } from "styled-components";

import contactAnimation from "../../../assets/imgs/contact/ContactAnimations.svg";

const StyledContactUs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: ${({ theme }) => theme.space["40"]};
  margin-top: ${({ theme }) => theme.space["200"]};

  .section-content {
    flex: 1;

    img {
      max-width: 100%;
    }
  }

  .section-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: ${({ theme }) => theme.space["10"]};
    align-items: flex-start;
    flex: 1;

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
      width: 80%;
    }

    .section-description {
      color: ${({ theme }) => theme.text.tertiary.medium};
      font-size: ${({ theme }) => theme.font.m};
      font-weight: 400;
    }

    #form {
      input[type="text"],
      input[type="email"],
      textarea {
        width: 100%;
        padding: 20px;
        border: 1px solid ${({ theme }) => theme.line.primary};
        border-radius: 15px;
        margin-top: ${({ theme }) => theme.space["40"]};
      }

      .name {
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: ${({ theme }) => theme.space["40"]};
      }

      input[type="submit"] {
        background: ${({ theme }) => theme.bg.primary.medium};
        color: ${({ theme }) => theme.text.white};
        font-size: ${({ theme }) => theme.font.m};
        padding: 15px 40px;
        border: none;
        border-radius: 50px;
        box-shadow: 0px 17px 22px ${({ theme }) => theme.bg.tertiary.medium};
        transition: ${({ theme }) => theme.transition};
        margin-top: ${({ theme }) => theme.space["40"]};

        &:hover {
          cursor: pointer;
          background: ${({ theme }) => theme.bg.secondary.medium};
          box-shadow: 0px 25px 50px 25px
            ${({ theme }) => theme.shadow.secondary};
        }
      }

      ::placeholder {
        color: ${({ theme }) => theme.text.tertiary.light};
        font-size: ${({ theme }) => theme.font.m};
        font-weight: 400;
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    & {
      flex-direction: column;
      row-gap: ${({ theme }) => theme.space["100"]};
      padding: 0 ${({ theme }) => theme.space["40"]};

      .section-info {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    .section-info {
      #form {
        .name {
          flex-direction: column;
        }
      }
    }
  }
`;

const ContactUs = () => {
  return (
    <StyledContactUs>
      <div className="section-content">
        <img src={contactAnimation} alt="Contact us" />
      </div>
      <div className="section-info">
        <p className="section-header">Contact Us</p>
        <p className="section-title">Send your inquiry to our expert team</p>
        <p className="section-description">
          Lorem ipsum dolor sit amet nulla turapis tellus.
        </p>
        <form action="/" method="POST" id="form">
          <div className="name">
            <input type="text" name="first_name" placeholder="First name" />
            <input type="text" name="last_name" placeholder="Last name" />
          </div>
          <input
            type="email"
            name="email_address"
            placeholder="Email address"
          />
          <input
            type="text"
            name="subject_message"
            placeholder="Subject message"
          />
          <textarea
            name="message"
            placeholder="Your inquiry here"
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" value="Send Message" />
        </form>
      </div>
    </StyledContactUs>
  );
};

export default ContactUs;
