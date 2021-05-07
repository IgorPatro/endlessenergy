/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import { useForm } from "react-hook-form"
import { css } from "@emotion/react"
import axios from "axios"

const formStyles = (theme) => css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  font-size: 1.4rem;
  color: white;
  margin-top: 20px;
  text-align: right;

  ${theme.mediaQueries.tablet} {
    font-size: 1.7rem;
    margin-top: 35px;
  }

  ${theme.mediaQueries.huge} {
    gap: 20px;
  }

  input,
  textarea {
    width: 100%;
    font-size: inherit;
    padding: 4px;
    border: 2px solid white;
    outline: none;

    ${theme.mediaQueries.desktop} {
      padding: 6px;
    }

    &.error {
      border: 2px solid red;
    }

    &:focus {
      border: 2px solid ${theme.colors.primary};
    }
  }

  textarea {
    ${theme.mediaQueries.huge} {
      min-height: 200px;
    }
  }

  button {
    background-color: transparent;
    color: white;
    border: 1px solid white;
    padding: 5px 35px;
    transition: color 0.3s, background 0.3s;

    &:hover {
      background-color: white;
      color: black;
    }
  }

  .emails-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    ${theme.mediaQueries.huge} {
      flex-direction: row;
      gap: 20px;
    }
  }
`

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const [formMessage, setFormMessage] = React.useState("")

  const onFormSendingError = () => {
    setFormMessage("Ooops, sprawdź ponownie twoje dane w formularzu.")
  }

  const onFormSubmit = (data, e) => {
    axios
      .post("https://formspree.io/f/xbjqdwla", data)
      .then(() => {
        setFormMessage("Formularz został wysłany, dzięki za kontakt!")
        reset(data)
        e.target.reset()
      })
      .catch(() =>
        setFormMessage(
          "Niestety pojawił się jakiś problem, spróbuj ponownie później"
        )
      )
  }

  return (
    <form
      css={formStyles}
      onSubmit={handleSubmit(onFormSubmit, onFormSendingError)}
    >
      <div className="emails-wrapper">
        <input
          type="text"
          placeholder="Imię i nazwisko"
          {...register("name", { required: true, minLength: 3 })}
          className={errors.name && "error"}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
          className={errors.email && "error"}
        />
        <input
          type="number"
          placeholder="Telefon"
          {...register("phone", { required: true })}
          className={errors.phone && "error"}
        />
      </div>
      <textarea
        rows="4"
        placeholder="Twoja wiadomość"
        {...register("message", { required: true, minLength: 5 })}
        className={errors.message && "error"}
      />
      <div className="recaptcha-and-send-button">
        <button type="submit">WYŚLIJ</button>
      </div>
      <p>{formMessage}</p>
    </form>
  )
}

export default ContactForm
