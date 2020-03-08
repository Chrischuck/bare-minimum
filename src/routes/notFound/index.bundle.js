import { h, Component } from 'preact'
import sword from '../../assets/sword.png'

const NotFound = ({ push }) => (
  <div
    className="col-md-6 col-md-offset-3 text-center"
    style={{ paddingTop: '15%' }}
  >
    <div className="bs-component">
      <h1>404 Not Found</h1>

      <h3>Looks like you've wandered into mysterious lands.</h3>

      <h3>It's dangerous to go alone! Here take this!</h3>
      <a name={'grade-calculator'} onClick={push} style={{ cursor: 'pointer' }}>
        <img
          className="featurette-image img-responsive center-block"
          role="presentation"
          src={sword}
        />
      </a>
    </div>
  </div>
)

export default NotFound
