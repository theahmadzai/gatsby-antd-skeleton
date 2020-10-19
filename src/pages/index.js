import React from 'react'
import { Result } from 'antd'
import { Layout, SEO } from '../components'

export default ({ location }) => (
  <Layout>
    <SEO title="Home" pathname={location.pathname} />
    <Result status="success" title="Index Page" />
  </Layout>
)
