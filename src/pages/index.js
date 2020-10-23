import React from 'react'
import { Result } from 'antd'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'

export default ({ location }) => (
  <Layout>
    <SEO title="Home" pathname={location.pathname} />
    <Result status="success" title="Index Page" />
  </Layout>
)
