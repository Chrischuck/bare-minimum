import { h } from 'preact'

import Input from 'Components/input'

import styles from './index.module.css'


const DoubleInputRow = ({
    firstColInputProps = {},
    secondColInputProps = {},
    firstColumnLabel,
    firstColumnOptional = false,
    secondColumnLabel,
    secondColumnOptional = false,
}) => {
    return (
      <div className={styles.row}>
        <div className={styles.inputContainer}>
          <label htmlFor="first" className={styles.label}>
            {firstColumnLabel}
            {firstColumnOptional && <span className={styles.optional}>(optional)</span>}
          </label>
          <Input
            id="first"
            {...firstColInputProps}
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="second" className={styles.label}>
            {secondColumnLabel}
            {secondColumnOptional && <span className={styles.optional}>(optional)</span>}
          </label>
          <Input
            id="second"
            {...secondColInputProps}
          />
        </div>
      </div>
    )
}

export default DoubleInputRow