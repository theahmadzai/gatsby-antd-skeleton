import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './Layout.module.less'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
