import { h } from 'preact'
import Helmet from 'preact-helmet'

const Layout = ({}) => (
  <div className="container">
    <Helmet
      title="Bare Minimum | Damage Calculator"
      meta={[
        {
          name: 'description',
          content: 'See how an assignment will affect your grade!'
        }
      ]}
    />
    <div className="well infobox">
      <div style={{ marginTop: 10 }}>
        <h2
          className="text-center"
          style={{
            marginTop: 15,
            marginBottom: 15,
            color: '#2e2d2d'
          }}
        >
          Damage Calculator
        </h2>
        <p
          className="text-center"
          style={{
            marginBottom: 8,
            marginTop: 0,
            color: '#5d5d5d'
          }}
        >
          Find out how an assignment will affect your grade.
        </p>
        <div className="row"></div>
      </div>
    </div>
  </div>
)

export default Layout
