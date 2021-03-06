import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"

import Section from "components/Section"
import Header from "components/Header"
import CalculatorScore from "components/CalculatorScore"
import Paragraph from "components/Paragraph"

import { ReactComponent as InstallationSizeIcon } from "assets/icons/installation-size.calculator.svg"
import { ReactComponent as EnergyProducedIcon } from "assets/icons/energy-produced.calculator.svg"
import { ReactComponent as CostIcon } from "assets/icons/cost.calculator.svg"
import { ReactComponent as BillWithoutInstallationIcon } from "assets/icons/bill-without-installation.calculator.svg"
import { ReactComponent as BillWithInstallationIcon } from "assets/icons/bill-with-installation.calculator.svg"

const calculatorStyles = (theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  .calculator-bill {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    input {
      background-color: transparent;
      cursor: pointer;
      -webkit-appearance: none;
      width: 100%;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 30px;
        height: 30px;
        background-color: ${theme.colors.primary};
        border-radius: 100%;
        position: relative;
        margin-top: -5px;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
      }

      &::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        width: 100%;
        background: white;
        border-radius: 100px;
        height: 20px;
      }
    }

    button,
    a {
      display: inline-flex;
      width: 200px;
      justify-content: center;
      align-items: center;
      border: 2px solid ${theme.colors.primary};
      height: 35px;
      color: black;
      text-decoration: none;
      background-color: ${theme.colors.primary};
      box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
      padding: 0;
      transition: background 0.3s;

      ${theme.mediaQueries.tablet} {
        font-size: 1.9rem;
        width: 270px;
        height: 40px;
      }

      &:hover {
        background-color: white;
      }
    }

    button {
      background-color: white;
      font-weight: ${theme.fontWeight.bold};
    }

    p {
      text-align: center;
    }
  }

  ul.calculator-scores-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;

    ${theme.mediaQueries.tablet} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    ${theme.mediaQueries.desktop} {
      grid-template-columns: repeat(3, 1fr);
      margin-top: 30px;
    }

    ${theme.mediaQueries.huge} {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`

const Calculator = () => {
  const [billValue, setBillValue] = React.useState(100)

  const scoresData = [
    {
      icon: InstallationSizeIcon,
      score: `${(billValue * 0.0216).toFixed(2)} kWp`,
      title: "Wielko???? instalacji",
    },
    {
      icon: EnergyProducedIcon,
      score: `${(billValue * 20.9).toFixed(0)} kWh`,
      title: "Energii w ci??gu roku",
    },
    {
      icon: CostIcon,
      score: `${(billValue * 99).toFixed(0)} z??`,
      title: "Koszt instalacji netto",
    },
    {
      icon: BillWithoutInstallationIcon,
      score: `${(billValue * 12).toFixed(0)} z??`,
      title: "Roczny rachunek za pr??d bez instalcji",
    },
    {
      icon: BillWithInstallationIcon,
      score: `${(255 + billValue / 25).toFixed(0)} z??`,
      title: "Roczny rachunek za pr??d z instalcj??",
    },
  ]

  return (
    <Section id="calculator">
      <div css={calculatorStyles}>
        <Header
          subheading="KALKULATOR"
          heading="Twoja wirtualna <strong>instalacja</strong>"
          justify="center"
        />
        <div className="calculator-bill">
          <input
            type="range"
            value={billValue / 25}
            min={4}
            max={60}
            onChange={(e) => setBillValue(e.target.value * 25)}
          />
          <Paragraph>Tw??j miesi??czny rachunek za pr??d:</Paragraph>
          <button type="button">
            {billValue}
            &nbsp;z??
          </button>
          <Link
            to={`/order?installationSize=${(billValue * 0.0216).toFixed(2)}`}
          >
            Zam??w instalacj??
          </Link>
        </div>
        <ul className="calculator-scores-list">
          {scoresData.map(({ score, title, icon }) => (
            <CalculatorScore key={title} score={score} icon={icon}>
              {title}
            </CalculatorScore>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Calculator
