import { h } from 'preact'

import styles from './index.module.css'

const Input = (props) => (
  <input
    className={styles.input}
    {...props}
  />
)

export default Input
