import React from 'react'
import { Result } from 'antd'
import { SEO } from '../components'

export default ({ location }) => (
  <div>
    <SEO title="Home" pathname={location.pathname} />
    <Result status="success" title="Index Page" />
  </div>
)
