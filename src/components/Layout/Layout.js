import React from 'react'
import styles from './Layout.module.less'
import { Header, Footer } from '../'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}
