import { h } from 'preact'

import styles from './index.module.css'

const Checkbox = ({
    label,
    value,
    onClick,
    id,
}) => (
    <div className={styles.container}>
        <p
            className="col-md-10 col-sm-10 col-xs-10"
            style={{
            display: 'inline',
            verticalAlign: 'middle',
            paddingRight: '0px',
            paddingLeft: '2%',
            marginTop: 0,
            marginBottom: 0,
            marginRight: 0
            }}
        >
            {label}
        </p>
        <div
            className="col-md-2 col-sm-2 col-xs-2"
            style={{ paddingLeft: '0px', float: 'left' }}
        >
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