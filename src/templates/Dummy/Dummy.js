import React from 'react'
import Layout from '../../components/Layout/Layout'
import styles from './Dummy.module.less'

const DummyTemplate = ({ pageContext: { title } }) => (
  <Layout>
    <h1 className={styles.dummy}>{title}</h1>
  </Layout>
)

export default DummyTemplate
