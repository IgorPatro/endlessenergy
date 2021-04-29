import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Go home</Link>
    </main>
  )
}

export default NotFoundPage
