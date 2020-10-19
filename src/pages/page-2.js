import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title=" Test Cognitive Effects of Poor Indoor Air Quality"
          description="Poor indoor air quality affects people's ability to concentrate and think clearly." />
    <h1>Hi from the second page</h1>
    <p>Welcome to proxy page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
