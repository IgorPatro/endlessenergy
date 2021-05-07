import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

const SEO = ({ pageName }) => {
  return (
    <Helmet
      htmlAttributes={{
        lang: "pl",
      }}
      title={`Endless Energy - ${pageName} | Fotowoltaika dla domu i firmy`}
    >
      <meta charset="utf-8" />
      <meta
        name="description"
        content="Twój najlepszy doradca. Wybierzemy panele fotowoltaiczne dla ciebie i twojej rodziny. Fotowoltaika jest doskonałym sposobem na ekologiczny tryb życia i znaczne obniżenie rachunków w każdym domu."
      />
    </Helmet>
  )
}

SEO.propTypes = {
  pageName: PropTypes.string.isRequired,
}

export default SEO
