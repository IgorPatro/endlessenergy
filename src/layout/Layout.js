import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "@emotion/react"
import "./globalStyles.css"

import theme from "layout/theme"
import Navigation from "components/Navigation"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Navigation />
        {children}
      </main>
    </ThemeProvider>
  )
}

Layout.propTypes = { children: PropTypes.node.isRequired }

export default Layout
