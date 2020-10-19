import React from 'react'
import styles from './Header.module.less'
import { Logo } from '../'

export const Header = () => (
  <header className={styles.header}>
    <Logo />
    Header
  </header>
)
