import React from "react"
import { css } from "@emotion/react"

import Header from "components/Header"
import ContactForm from "components/ContactForm"
import contactImage from "assets/images/contact.png"

const contactStyles = (theme) => css`
  background: url(${contactImage});
  padding: 10%;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  gap: 30px;

  ${theme.mediaQueries.tablet} {
    padding: 10% 15%;
  }

  ${theme.mediaQueries.desktop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 80px;
    padding: 10% 7%;
  }

  ${theme.mediaQueries.huge} {
    padding: 10%;
  }

  iframe {
    width: 100%;
    border: 5px solid ${theme.colors.primary};
    aspect-ratio: 5/3;

    ${theme.mediaQueries.desktop} {
      aspect-ratio: none;
      height: 100%;
      border: 10px solid ${theme.colors.primary};
    }
  }
`

const Contact = () => {
  return (
    <section css={contactStyles} id="contact">
      <div>
        <Header
          subheading="KONTAKT Z NAMI"
          heading="Wyślij do nas <strong>wiadomość</strong>"
          justify="flex-start"
          color="white"
        />
        <ContactForm />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d610.3934933718555!2d21.048994729270888!3d52.2692809194261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc241e355a6d%3A0x7af7ff7f343a5737!2sEndlessenergy!5e0!3m2!1sen!2spl!4v1620025298952!5m2!1sen!2spl"
        loading="lazy"
        title="map"
      />
    </section>
  )
}

export default Contact
