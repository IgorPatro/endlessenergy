import * as React from "react"
import { Link } from "gatsby"

import SEO from "components/SEO"

const NotFoundPage = () => {
  return (
    <>
      <SEO pageName="404" />
      <main>
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/">Go home</Link>
      </main>
    </>
  )
}

export default NotFoundPage
