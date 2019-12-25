import { h } from 'preact'
import Helmet from 'preact-helmet'

import styles from './index.module.css'

const Layout = ({ children, metaTitle, metaContent, title, subtitle }) => (
  <div className={styles.container}>
    <Helmet
      title={metaTitle}
      meta={[
        {
          name: 'description',
          content: { metaContent }
        }
      ]}
    />
    <div className={styles.card}>
      <h2 className={styles.header}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <br />
      {children}
    </div>
  </div>
)

export default Layout
