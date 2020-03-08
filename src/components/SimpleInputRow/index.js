import { h } from 'preact'

import Input from 'Components/Input'

import styles from './index.module.css'

const InputRow = ({
  inputId,
  onChange,
  startLabel,
  value,
  endLabel,
  placeholder
}) => (
  <div className={styles.parent}>
    <label className={styles.startLabel} htmlFor={inputId}>
      {startLabel}
    </label>
    <div className={styles.inputContainer}>
      <Input
        type="number"
        value={value}
        onInput={onChange}
        placeholder={placeholder}
        id={inputId}
      />
    </div>
    <label className={styles.endLabel}>{endLabel}</label>
  </div>
)

export default InputRow
