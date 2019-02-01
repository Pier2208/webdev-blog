import React from "react"

import SEO from "../components/seo"
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  </Layout>
)

export default IndexPage
