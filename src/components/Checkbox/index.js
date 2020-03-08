import { h } from 'preact'

import styles from './index.module.css'

const Checkbox = ({
    label,
    value,
    onClick,
    id,
}) => (
    <div className={styles.container}>
        <span>{label}</span>
        <div>
            <input
                className={styles.input}
                type="checkbox"
                id={id}
                checked={value}
            />
            <label
                className={styles.label}
                htmlFor={id}
                id={`${id}-label`}
                onClick={onClick}
            />
        </div>
    </div>
)

export default Checkbox