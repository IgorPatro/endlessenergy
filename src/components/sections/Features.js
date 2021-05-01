import React from "react"
import { css } from "@emotion/react"

import Section from "components/Section"
import Header from "components/Header"

import { ReactComponent as HeartIcon } from "assets/icons/heart.features.svg"
import { ReactComponent as TimeIcon } from "assets/icons/time.features.svg"
import { ReactComponent as HomeIcon } from "assets/icons/home.features.svg"
import Feature from "components/Feature"

const featuresStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  .features-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`

const Features = () => {
  const data = [
    {
      icon: HeartIcon,
      title: "ZAANGAŻOWANIE",
      content:
        "Consistent record of disciplined investing with conservative use of financing and no reliance on financial engineering.",
    },
    {
      icon: TimeIcon,
      title: "SZYBKOŚĆ",
      content:
        "€5.8 bn of real estate and hotel transaction experience across a broad range of European markets and deal structures.",
    },
    {
      icon: HomeIcon,
      title: "PRZYJAŹŃ",
      content:
        "Our team consists of highly experienced and talented international professionals with strong local market experience and management expertise.",
    },
  ]

  return (
    <Section>
      <div css={featuresStyles}>
        <Header
          subheading="SPECJALNOŚCI"
          heading="Jaką jesteśmy <strong>firmą</strong>"
          justify="center"
        />
        <div className="features-list">
          {data.map(({ icon, title, content }) => (
            <Feature key={title} icon={icon} title={title}>
              {content}
            </Feature>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Features
