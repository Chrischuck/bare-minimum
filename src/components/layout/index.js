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
      <div style={{ marginTop: 10 }}>
        <h2
          className="text-center"
          style={{
            marginTop: 15,
            marginBottom: 15,
            color: '#2e2d2d'
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className="text-center"
            style={{
              marginBottom: 8,
              marginTop: 0,
              color: '#5d5d5d'
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {children}
    </div>
  </div>
)

export default Layout
