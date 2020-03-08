import { h, Component } from 'preact'

import Layout from 'Components/layout'
import ButtonRow from 'Components/ButtonRow'
import TripleInputRow from 'Components/TripleInputRow'

import { calculatorStringBuilder } from '../../util/stringBuilders'

export default class WeightedGrade extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: {},
      requiredGrade: '',
      finalWeight: '',
      inputCount: 3
    }
  }

  shouldComponentUpdate(_, nextState) {
    return (
      this.state.inputCount !== nextState.inputCount ||
      this.state.isModalOpen !== nextState.isModalOpen
    )
  }

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  // Get data from the children....maybe use redux for this
  onChange = (id, category, grade, weight) => {
    const { categories } = this.state
    const previousCategory = categories[id]
    categories[id] = { category, grade, weight }
    if (previousCategory && previousCategory.category !== category) {
      this.setState({ categories })
    } else {
      this.setState({ categories })
    }
  }

  // All logic
  calculate = () => {
    const { categories, requiredGrade, finalWeight } = this.state
    const keys = Object.keys(categories)
    const requiredPercent = Number(requiredGrade) / 100
    const finalPercent = Number(finalWeight) / 100
    let contributions = 0
    let totalWeights = 0
    let totalPercentage = Number(finalWeight)

    if (!requiredPercent) {
      this.props.openModal({
        title: 'Uh Oh!',
        message: "The grade you want doesn't look right!",
        type: 'warning'
      })
      return
    }
    if (!finalPercent) {
      this.props.openModal({
        title: 'Uh Oh!',
        message: "The final's weight doesn't look right!",
        type: 'warning'
      })
      return
    }

    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i]
      const { category, grade, weight } = categories[key]
      const numericalGrade = Number(grade) / 100
      const numericalWeight = Number(weight) / 100
      totalPercentage += Number(weight)
      if (!numericalGrade && category) {
        this.props.openModal({
          title: 'Oops!',
          message: `Your grade for ${category} doesn't look right!`,
          type: 'warning'
        })
        return
      }
      if (!numericalWeight && category) {
        this.props.openModal({
          title: 'Oops!',
          message: `Your weight for ${category} doesn't look right!`,
          type: 'warning'
        })
        return
      }
      if (numericalGrade && numericalWeight) {
        totalWeights += numericalWeight
        contributions += numericalGrade * numericalWeight
      }
    }
    if (totalWeights === 0) {
      this.props.openModal({
        title: 'Oh no!',
        message: "Looks like you haven't added any categories!",
        type: 'warning'
      })
      return
    }
    if (totalPercentage !== 100) {
      this.props.openModal({
        title: 'Oops!',
        message:
          totalPercentage > 100
            ? "Your total percentage can't be greater than 100!"
            : "Your total percentage can't be less than 100!",
        type: 'warning'
      })
      return
    }

    const finalGrade = ((requiredPercent - contributions) / finalPercent) * 100

    const toRound = (finalGrade * 1000) % 10 >= 5
    const calculatedGrade = toRound
      ? Math.ceil(finalGrade * 100) / 100
      : Math.floor(finalGrade * 100) / 100

    if (!isNaN(calculatedGrade)) {
      this.props.openModal({
        title: 'You can do it!',
        message: calculatorStringBuilder(
          calculatedGrade,
          this.state.requiredGrade
        ),
        type: null
      })
    } else {
      this.props.openModal({
        title: 'Uh Oh!',
        message: 'Something went wrong, make sure your inputs are right!',
        type: 'warning'
      })
    }
  }

  addCategory = () => {
    const { inputCount } = this.state
    this.setState({ inputCount: inputCount + 1 })
  }

  render() {
    const { inputCount } = this.state
    const inputs = []
    for (let i = 0; i < inputCount; i++) {
      inputs.push(
        <TripleInputRow
          firstColumnLabel="Category"
          secondColumnLabel="Your Grade"
          thirdColumnLabel="Weight"
          inputCount={i}
          onChange={this.onChange}
          secondColInputProps={{ type: 'number' }}
          thirdColInputProps={{ type: 'number' }}
        />
      )
    }
    return (
      <Layout
        metaTitle="Bare Minimum | Weighted Final Grade Calculator"
        metaContent="Weighted Final grade calculator to help you pass your classes!"
        title="Weighted Final Grade Calculator"
        subtitle="% sign is not neccesary"
      >
          <div>

            <div className="row input-row">
              <div
                className="form-group has-success is-empty col-md-6 col-xs-6 col-sm-6"
                style={{
                  paddingLeft: '0px',
                  paddingRight: '2.5px',
                  marginBottom: 5
                }}
              >
                <label
                  htmlFor={'requiredGrade'}
                  className="form-label"
                  style={{ fontWeight: 500 }}
                >
                  You want a:
                </label>
                <input
                  maxLength="3"
                  type="number"
                  className="form-control"
                  id={'requiredGrade'}
                  autoComplete="off"
                  name="requiredGrade"
                  value={this.state.requiredGrade}
                  onChange={this.onInputChange}
                  placeholder={'93%'}
                />
              </div>
              <div
                className="form-group has-success is-empty col-md-6 col-xs-6 col-sm-6"
                style={{
                  paddingLeft: '2.5px',
                  paddingRight: '0px',
                  marginBottom: 5
                }}
              >
                <label
                  htmlFor={'finalWeight'}
                  className="form-label"
                  style={{ fontWeight: 500 }}
                >
                  Final's worth:
                </label>
                <input
                  maxLength="3"
                  type="number"
                  className="form-control"
                  id={'finalWeight'}
                  autoComplete="off"
                  value={this.state.finalWeight}
                  name="finalWeight"
                  onChange={this.onInputChange}
                  placeholder={'20%'}
                />
              </div>
            </div>

            {inputs}

            <ButtonRow
              leftButtonClick={this.addCategory}
              rightButtonClick={this.calculate}
            />
          </div>
      </Layout>
    )
  }
}
