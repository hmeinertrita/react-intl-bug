import React from "react"
import { IntlProvider } from "react-intl"

const IndexPage = ({ pageContext }) => {
  console.log(pageContext)
  const prefix = pageContext.prefix
  return (
      <div>{prefix}</div>
  )
}
export default IndexPage
