import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'

import Input from 'Components/input'

import styles from './index.module.css'

const createId = (inputCount) => `weightedGrade${inputCount}`

const TripleInputRow = ({
    onChange,
    inputCount,
    firstColInputProps = {},
    secondColInputProps = {},
    thirdColInputProps = {},
    firstColumnLabel,
    secondColumnLabel,
    thirdColumnLabel
}) => {
    const id = createId(inputCount)
    const [col1, setCol1] = useState('')
    const [col2, setCol2] = useState('')
    const [col3, setCol3] = useState('')
    useEffect(() => onChange(id, col1, col2, col3), [col1]);
    useEffect(() => onChange(id, col1, col2, col3), [col2]);
    useEffect(() => onChange(id, col1, col2, col3), [col3]);

    return (
      <div className={styles.row}>
        <div className={styles.inputContainer}>
          <label htmlFor={`${inputCount}first`} className={styles.label}>
            {firstColumnLabel}
            <span className={styles.optional}>(optional)</span>
          </label>
          <Input
            name="col1"
            id={`${inputCount}first`}
            value={col1}
            onInput={(e) => setCol1(e.target.value)}
            {...firstColInputProps}
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor={`${inputCount}second`} className={styles.label}>
            {secondColumnLabel}
          </label>
          <Input
            name="col2"
            id={`${inputCount}second`}
            value={col2}
            onInput={(e) => setCol2(e.target.value)}
            {...secondColInputProps}
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor={`${inputCount}third`} className={styles.label}>
            {thirdColumnLabel}
          </label>
          <Input
            name="col3"
            id={`${inputCount}third`}
            value={col3}
            onInput={(e) => setCol3(e.target.value)}
            {...thirdColInputProps}
          />
        </div>
      </div>
    )
}

export default TripleInputRow