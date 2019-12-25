import { h } from 'preact'

import styles from './index.module.css'

const Input = ({ placeholder, onChange, value, type, id }) => (
  <input
    id={id}
    className={styles.input}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
)

export default Input
