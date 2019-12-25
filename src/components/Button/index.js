import { h } from 'preact'

import styles from './index.module.css'

const Button = ({ onClick, children }) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
)

export default Button
