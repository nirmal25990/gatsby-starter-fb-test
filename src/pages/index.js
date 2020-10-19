import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Boost Your Health. Change The Air You Breathe."
          description="Clear Air helps people improve their health and wellness by improving their indoor air quality. Take our free quiz to start living better." />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image from="header"/>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/quiz/page-2/">Proxy Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
