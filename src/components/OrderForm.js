/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import { useForm } from "react-hook-form"
import { css } from "@emotion/react"
import axios from "axios"

import Notification from "components/Notification"

const orderStyles = (theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;

  ${theme.mediaQueries.bigDesktop} {
    max-width: none;
  }

  h1 {
    font-size: 2.6rem;
    align-self: flex-start;

    ${theme.mediaQueries.phone} {
      font-size: 2.8rem;
    }

    ${theme.mediaQueries.tablet} {
      font-size: 3.2rem;
    }

    ${theme.mediaQueries.bigDesktop} {
      font-size: 3.7rem;
    }

    strong {
      color: ${theme.colors.primary};
      font-size: inherit;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    ${theme.mediaQueries.tablet} {
      font-size: 1.7rem;
    }

    ${theme.mediaQueries.bigDesktop} {
      flex-direction: row;
      gap: 50px;
      font-size: 1.6rem;
    }

    .info-wrapper {
      ${theme.mediaQueries.bigDesktop} {
        width: 300px;
      }
    }

    input,
    textarea,
    select {
      width: 100%;
      box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
      border: 1px solid white;
      background-color: white;
      margin: 5px 0;
      outline: none;
      padding: 3px;

      ${theme.mediaQueries.bigDesktop} {
        width: 300px;
        margin: 6px 0;
        min-width: 300px;
        max-width: 300px;
      }

      &.disabled {
        color: ${theme.colors.primary};
      }

      &.error {
        border: 1px solid red;
      }

      &:focus {
        border: 1px solid ${theme.colors.primary};
      }

      ${theme.mediaQueries.tablet} {
        padding: 5px;
      }
    }

    p {
      font-size: inherit;
      margin-top: 15px;
    }

    .info-wrapper-two {
      display: flex;
      flex-direction: column;
      gap: 10px;

      ${theme.mediaQueries.bigDesktop} {
        width: 300px;
      }
    }

    .rodo {
      display: flex;
      justify-content: space-between;
      align-items: center;

      input {
        width: 17px;
        height: 17px;
        min-width: 17px;
        max-width: 20px;
        cursor: pointer;

        ${theme.mediaQueries.tablet} {
          width: 20px;
          height: 20px;
        }

        &.error {
          border: 1px solid red;
        }
      }

      span {
        width: 90%;
        font-size: 1rem;
        text-align: left;

        ${theme.mediaQueries.tablet} {
          font-size: 1.2rem;
        }

        ${theme.mediaQueries.bigDesktop} {
          font-size: 0.9rem;
        }

        ${theme.mediaQueries.huge} {
          font-size: 1rem;
        }
      }
    }

    button.send {
      background-color: ${theme.colors.primary};
      color: white;
      border: none;
      padding: 5px 35px;
      margin: 10px 0 0 0;
      align-self: flex-end;
      font-weight: ${theme.fontWeight.medium};
      transition: color 0.3s, background 0.3s;

      &:hover {
        color: ${theme.colors.primary};
        background-color: ${theme.colors.dark};
      }

      ${theme.mediaQueries.bigDesktop} {
        align-self: flex-start;
        padding: 7px 50px;
      }
    }

    p.form-message {
      text-align: right;

      ${theme.mediaQueries.bigDesktop} {
        text-align: left;
      }
    }
  }
`

const OrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [formMessage, setFormMessage] = React.useState("")
  const [installationSize, setInstallationSize] = React.useState(0)

  const onFormSendingError = () => {
    setFormMessage("Ooops, sprawd?? ponownie twoje dane w formularzu ????")
  }

  const onFormSubmit = (data, e) => {
    axios
      .post("https://formspree.io/f/mnqljwng", {
        ...data,
        installationSize: `${installationSize} kWp`,
      })
      .then(() => {
        setFormMessage("Formularz zosta?? wys??any, dzi??ki za kontakt! ????")
        e.target.reset()
      })
      .catch(() =>
        setFormMessage(
          "Niestety pojawi?? si?? jaki?? problem, spr??buj ponownie p????niej ????"
        )
      )
  }

  React.useEffect(() => {
    if (window !== undefined) {
      const queryString = window.location.search
      const installationSizeParam = Number(
        new URLSearchParams(queryString).get("installationSize")
      )

      setInstallationSize(installationSizeParam)
    }
  }, [])

  return (
    <div css={orderStyles}>
      <h1>
        Daj nam troch?? wi??cej
        <br />
        <strong>informacji</strong>
      </h1>
      <form onSubmit={handleSubmit(onFormSubmit, onFormSendingError)}>
        <div className="info-wrapper">
          <input
            type="text"
            placeholder="Imi?? i nazwisko"
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
            {...register("phone", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
            className={errors.phone && "error"}
          />
          <input
            type="text"
            placeholder="Adres"
            {...register("address", { required: true })}
            className={errors.address && "error"}
          />
          <p>Twoja moc z kalkulatora:</p>
          <input
            type="text"
            className="disabled"
            value={`${installationSize} kWp`}
            disabled
          />
          <p>Czy na dachu wyst??puje cie???</p>
          <select {...register("shadowOnRoof", { required: true })}>
            <option value="yes">Tak</option>
            <option value="no">Nie</option>
          </select>
        </div>
        <div className="info-wrapper-two">
          <textarea
            rows="5"
            placeholder="Twoja wiadomo????"
            {...register("message")}
            className={errors.message && "error"}
          />
          <div className="rodo">
            <input
              type="checkbox"
              {...register("rodo", { required: true })}
              className={errors.rodo && "error"}
            />
            <span>
              Wyra??am zgod?? na przetwarzanie danych osobowych zgodnie z ustaw?? o
              ochronie danych osobowych w zwi??zku z wys??aniem zapytania przez
              formularz kontaktowy oraz w celu wysy??ania informacji handlowej za
              po??rednictwem adresu email zgodnie z art.6 ust.1 lit.a RODO w zw.
              z art.10 ust.2 ustawy o ??wiadczenie us??ug drog?? elektroniczn??.
              Podanie danych jest dobrowolne, ale jednocze??nie niezb??dne do
              przesy??ania informacji o aktualnej ofercie i promocjach.*
            </span>
          </div>
          <button className="send" type="submit">
            WY??LIJ
          </button>
          <p className="form-message">{formMessage}</p>
        </div>
      </form>
      {installationSize === 0 && (
        <Notification
          title="ooops, mamy <strong>problem</strong>"
          linkData={{ content: "Do kalkulatora!", url: "/#calculator" }}
          content="Aby skorzysta?? z formularza kontaktowego, musisz obliczy?? swoj??
          <strong>moc ??redni??</strong>. Mo??esz to zrobi?? na naszej stronie
          g????wnej. Po ustaleniu wysoko??ci twojego miesi??cznego rachunku za pr??d,
          wci??nij przycisk
          <strong>???Zam??w instalacj?????</strong>, aby m??c wys??a?? do nas wiadomo????."
        />
      )}
    </div>
  )
}

export default OrderForm
