import { h } from 'preact'

import styles from './index.module.css'

const Checkbox = ({
    label,
    checked,
    onChange,
    id,
}) => (
    <div className={styles.container}>
        <span>{label}</span>
        <div>
            <input
                className={styles.input}
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
            />
            <label
                className={styles.label}
                htmlFor={id}
                id={`${id}-label`}
            />
        </div>
    </div>
)

export default Checkbox