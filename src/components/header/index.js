import { h } from 'preact'

import styles from './index.module.css'

function isActiveTabClassName(path = '', tabPath) {
  return path === tabPath || path === `/${tabPath}` ? styles.activeTab : ''
}

const Header = ({ path, push }) => {
  // @todo implement scroll to place in navbar
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarContent}>
        <div className={styles.navbarHeader}>
          <h1 className={styles.navbarBrand}>Bare Minimum</h1>
        </div>
        <div className={styles.tabContainer}>
          <div
            onClick={() => push('grade-calculator')}
            className={`${styles.tab} ${isActiveTabClassName(
              path,
              'grade-calculator'
            )}`}
          >
            <p>Final Grade Calculator</p>
          </div>
          <div
            onClick={() => push('damage-calculator')}
            className={`${styles.tab} ${isActiveTabClassName(
              path,
              'damage-calculator'
            )}`}
          >
            <p>Damage Calculator</p>
          </div>
          <div
            onClick={() => push('weighted-grade-calculator')}
            className={`${styles.tab} ${isActiveTabClassName(
              path,
              'weighted-grade-calculator'
            )}`}
          >
            <p>Weighted Grade Calculator</p>
          </div>
          <div
            onClick={() => push('gpa-calculator')}
            className={`${styles.tab} ${isActiveTabClassName(
              path,
              'gpa-calculator'
            )}`}
          >
            <p>GPA Calculator</p>
          </div>
        </div>
        <div className={styles.placeholder} />
      </div>
    </div>
  )
}
export default Header
