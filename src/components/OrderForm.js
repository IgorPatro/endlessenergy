/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import { useForm } from "react-hook-form"
import { css } from "@emotion/react"

const orderStyles = (theme) => css`
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h1 strong {
    color: ${theme.colors.primary};
  }

  form {
    input,
    textarea,
    select {
      width: 100%;
      box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
      border: 1px solid white;
      background-color: white;
      margin: 5px 0;
      outline: none;

      &.disabled {
        color: ${theme.colors.primary};
      }

      &.error {
        border: 1px solid red;
      }

      &:focus {
        border: 1px solid ${theme.colors.primary};
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
    setFormMessage("Ooops, sprawdź ponownie twoje dane w formularzu 😕")
  }

  const onFormSubmit = (data, e) => {
    setFormMessage("Formularz wysłany, dzięki za kontakt! 😄")
    e.target.reset()
    console.log(data)
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
        Daj nam trochę więcej &nbsp;
        <strong>informacji</strong>
      </h1>
      <form onSubmit={handleSubmit(onFormSubmit, onFormSendingError)}>
        <div className="emails-wrapper">
          <input
            type="text"
            placeholder="Imię i nazwisko"
            {...register("ImięINazwisko", { required: true, minLength: 3 })}
            className={errors.name && "error"}
          />
          <input
            type="text"
            placeholder="Email"
            {...register("Email", { required: true, pattern: /\S+@\S+\.\S+/ })}
            className={errors.email && "error"}
          />
          <input
            type="number"
            placeholder="Telefon"
            {...register("Telefon", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
            className={errors.phone && "error"}
          />
          <input
            type="text"
            placeholder="Adres"
            {...register("Adres", { required: true })}
            className={errors.address && "error"}
          />
          <p>Twoja moc z kalkulatora:</p>
          <input
            type="text"
            className="disabled"
            value={`${installationSize} kWp`}
            disabled
          />
          <p>Czy na dachu występuje cień?</p>
          <select {...register("CieńNaDachu", { required: true })}>
            <option value="Tak">Tak</option>
            <option value="Nie">Nie</option>
          </select>
        </div>
        <textarea
          rows="4"
          placeholder="Twoja wiadomość"
          {...register("Wiadomość", { required: true, minLength: 5 })}
          className={errors.message && "error"}
        />
        <div className="recaptcha-and-send-button">
          <button type="submit">WYŚLIJ</button>
        </div>
        <p>{formMessage}</p>
      </form>
    </div>
  )
}

export default OrderForm
