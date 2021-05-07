import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "@emotion/react"
import { CookiesProvider, useCookies } from "react-cookie"
import "./globalStyles.css"

import theme from "layout/theme"
import Navigation from "components/Navigation"
import Footer from "components/Footer"
import Notification from "components/Notification"

const Layout = ({ children }) => {
  const [areCookiesAccepted, setAreCookiesAccepted] = React.useState(true)
  const [cookies, setCookie] = useCookies(["areCookiesAccepted"])

  const acceptCookies = () => {
    const date = new Date()
    date.setDate(date.getDate() + 7)

    setCookie("areCookiesAccepted", true, { expires: date })

    setAreCookiesAccepted(true)
  }

  React.useEffect(() => {
    if (typeof window !== "undefined" && !cookies.areCookiesAccepted) {
      setAreCookiesAccepted(false)
    }
  }, [cookies.areCookiesAccepted])

  return (
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        <main>
          <Navigation />
          {children}
          <Footer />
          {!areCookiesAccepted && (
            <Notification
              title="polityka <strong>cookies</strong>"
              buttonData={{
                content: "Akcpetuję cookies",
                onClickFunc: acceptCookies,
              }}
              content="Ta strona używa plików cookies, korzystajc z witryny wyrażasz zgodę na ich używanie. Consistent record of disciplined investing with conservative use of financing and no reliance on financial engineering."
            />
          )}
        </main>
      </ThemeProvider>
    </CookiesProvider>
  )
}

Layout.propTypes = { children: PropTypes.node.isRequired }

export default Layout
