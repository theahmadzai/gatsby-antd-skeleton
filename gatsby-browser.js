import React from 'react'
import { Layout, SEO } from './src/components'
import './src/styles/global.less'

export const wrapRootElement = ({ element }) => (
  <>
    <SEO />
    <Layout>{element}</Layout>
  </>
)
