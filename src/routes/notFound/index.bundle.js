import { h } from 'preact'
import Helmet from 'preact-helmet'

import sword from '../../assets/sword.png'

import styles from './index.module.css'

const NotFound = ({ push }) => (
  <div className={styles.container}>
    <Helmet
      title="Bare Minimum | 404 Not Found"
      meta={[
        {
          name: 'description',
          content: {
            metaContent: "I think you're lost!."
          }
        },
        {
          property: 'og:image',
          content: '/not-found-preview.png'
        }
      ]}
    />
    <h1>404 Not Found</h1>
    <h3>Looks like you've wandered into mysterious lands.</h3>
    <h3>It's dangerous to go alone! Here take this!</h3>
    <a name={'grade-calculator'} onClick={() => push('grade-calculator')} style={{ cursor: 'pointer' }}>
      <img
        role="presentation"
        src={sword}
        style={{height: 200}}
      />
    </a>

  </div>
)

export default NotFound
