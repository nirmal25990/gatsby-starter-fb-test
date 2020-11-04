import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ location }) => {
  console.log("process.env.JWT_SECRET string - ", `${process.env.JWT_SECRET.replace(/\\n/gm, '\n')}`)
  console.log("process.env.NO_REPLY_EMAIL string - ", `${process.env.NO_REPLY_EMAIL}`)
  console.log("process.env.SENDGRID_API_KEY string - ", `${process.env.SENDGRID_API_KEY}`)
  console.log(
    "function url  - ",
    `${location.protocol}//${location.host}${location.pathname}.netlify/functions/send-email`
  )

  const testEmail = () => {
    let name = "nirmal"
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({
      to: "nirmal25990@gmail.com",
      from: "Clear Air<noreply@clearair.io>",
      subject: "Welcome to Clear Air",
      html: `<strong>Just a test email ${name}</strong>`,
    })

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    }

    fetch(
      `${location.protocol}//${location.host}${location.pathname}.netlify/functions/send-email`,
      requestOptions
    )
      .then(response => console.log("response - ", response))
      .catch(error => console.log("send email error", error))
  }
  return (
    <Layout>
      <SEO
        title="Boost Your Health. Change The Air You Breathe."
        description="Clear Air helps people improve their health and wellness by improving their indoor air quality. Take our free quiz to start living better."
      />
      <h1>Hi people</h1>
  <h1>JWT_SECRET {process.env.JWT_SECRET}</h1>
      <h1>NO_REPLY_EMAIL {process.env.NO_REPLY_EMAIL}</h1>
      <h1>SENDGRID_API_KEY {process.env.SENDGRID_API_KEY}</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image from="header" />
      </div>
      <button onClick={() => testEmail()}> Send test email</button>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
