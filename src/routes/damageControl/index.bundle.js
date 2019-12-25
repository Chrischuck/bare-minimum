import { h, Component } from 'preact'
import Helmet from 'preact-helmet'

import { simpleErrorStringBuilder } from '../../util/stringBuilders'

export default class DamageCalculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentGrade: '',
      assignmentWeight: '',
      assignmentGrade: ''
    }
  }

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onCalculate = () => {
    const { currentGrade, assignmentWeight, assignmentGrade } = this.state
    if (
      currentGrade === '' ||
      assignmentWeight === '' ||
      assignmentGrade === ''
    ) {
      this.props.openModal({
        title: 'Uh Oh!',
        message: this.errorStringBuilder(),
        type: 'warning'
      })
    } else {
      const grade = this.calculateGrade()
      let title = 'Nice!'
      if (grade < 50) {
        title = 'Ouch.'
      } else if (grade >= 50 && grade < 61) {
        title = 'Bummer.'
      } else if (grade >= 61 && grade < 80) {
        title = 'Not Bad.'
      }

      this.props.openModal({
        title,
        message: `Looks like your grade is now ${this.calculateGrade()}%.`,
        type: null
      })
    }
  }

  calculateGrade = () => {
    const grade = Number(this.state.currentGrade) / 100
    const assignmentWorth = Number(this.state.assignmentWeight) / 100
    const assignmentGrade = Number(this.state.assignmentGrade) / 100

    const finalGrade =
      (assignmentWorth * assignmentGrade + (1 - assignmentWorth) * grade) * 100

    return finalGrade.toFixed(2)
  }

  errorStringBuilder = () => {
    const { currentGrade, assignmentWeight, assignmentGrade } = this.state
    const errorString = simpleErrorStringBuilder({
      'current grade': currentGrade,
      "assignment's weight": assignmentWeight,
      "assignment's grade": assignmentGrade
    })
    if (errorString) {
      return errorString
    }
    if (Number(assignmentGrade) > 100) {
      return "Your final percentage can't be more than 100%"
    }
    return ''
  }

  render() {
    return (
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
            <div className="row">
              <div
                className="row form-group has-success is-empty"
                style={{
                  marginLeft: '0px',
                  marginRight: '0px',
                  marginTop: '10px',
                  marginBottom: '10px'
                }}
              >
                <label
                  htmlFor="currentGrade"
                  className="col-xs-5 col-form-label semi-bold"
                  style={{
                    paddingRight: '10px',
                    textAlign: 'right',
                    lineHeight: '2.2vh',
                    paddingTop: '.8vh',
                    fontWeight: 400
                  }}
                >
                  Your current grade:
                </label>
                <div
                  className="col-xs-2"
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                >
                  <input
                    className="form-control"
                    type="number"
                    name="currentGrade"
                    value={this.state.currentGrade}
                    onChange={this.onInputChange}
                    placeholder="92"
                    id="currentGrade"
                  />
                </div>
                <label
                  className="col-md-2"
                  htmlFor="currentGrade"
                  style={{
                    paddingTop: '10px',
                    paddingLeft: 8,
                    fontWeight: 400
                  }}
                >
                  %.
                </label>
              </div>

              <div
                className="row form-group has-success is-empty"
                style={{
                  marginLeft: '0px',
                  marginRight: '0px',
                  marginTop: '10px',
                  marginBottom: '10px'
                }}
              >
                <label
                  htmlFor="final"
                  className="col-xs-5 col-form-label semi-bold text-left"
                  style={{
                    paddingRight: '10px',
                    textAlign: 'right',
                    lineHeight: '2.2vh',
                    paddingTop: '.8vh',
                    fontWeight: 400
                  }}
                >
                  {"Assignment's worth:"}
                </label>
                <div
                  className="col-xs-2"
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                >
                  <input
                    className="form-control"
                    type="number"
                    value={this.state.assignmentWeight}
                    name="assignmentWeight"
                    onChange={this.onInputChange}
                    placeholder="10"
                    id="final"
                  />
                </div>
                <label
                  htmlFor="final"
                  style={{
                    paddingTop: '10px',
                    paddingLeft: 4,
                    fontWeight: 400
                  }}
                >
                  % of your grade.
                </label>
              </div>

              <div
                className="row form-group has-success is-empty"
                style={{
                  marginLeft: '0px',
                  marginRight: '0px',
                  marginTop: '10px',
                  marginBottom: '10px'
                }}
              >
                <label
                  htmlFor="requiredGrade"
                  className="col-xs-5 col-form-label semi-bold"
                  style={{
                    paddingRight: '10px',
                    textAlign: 'right',
                    lineHeight: '2.2vh',
                    paddingTop: '.8vh',
                    fontWeight: 400
                  }}
                >
                  {'Projected grade:'}
                </label>
                <div
                  className="col-xs-2"
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                >
                  <input
                    className="form-control"
                    type="number"
                    name="assignmentGrade"
                    value={this.state.assignmentGrade}
                    onChange={this.onInputChange}
                    placeholder="90"
                    id="requiredGrade"
                  />
                </div>
                <label
                  htmlFor="requiredGrade"
                  style={{
                    paddingTop: '10px',
                    paddingLeft: 8,
                    fontWeight: 400
                  }}
                >
                  %.
                </label>
              </div>

              <div
                className="row"
                style={{
                  marginLeft: '4%',
                  marginRight: '4%',
                  textAlign: 'center'
                }}
              >
                <a
                  className="btn col-md-6 col-xs-6 col-md-offset-3 col-xs-offset-3"
                  onClick={this.onCalculate}
                >
                  Calculate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
