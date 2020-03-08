import { h } from 'preact'

import Button from 'Components/Button'

import styles from './index.module.css'

export default ({
    leftButtonClick,
    rightButtonClick
}) => (
    <div className={styles.container}>
        <Button onClick={leftButtonClick}>
            Add Category
        </Button>
        <div className={styles.split} />
        <Button onClick={rightButtonClick}>
            Calculate
        </Button>
    </div>
)