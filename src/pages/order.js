/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import { ThemeProvider } from "@emotion/react"

import theme from "layout/theme"
import OrderForm from "components/OrderForm"

const OrderPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <OrderForm />
    </ThemeProvider>
  )
}

export default OrderPage
