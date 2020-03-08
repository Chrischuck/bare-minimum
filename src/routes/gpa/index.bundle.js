import { h, Component } from 'preact'
import Helmet from 'preact-helmet'

import Layout from 'Components/layout'
import ButtonRow from 'Components/ButtonRow'
import TripleInputRow from 'Components/TripleInputRow'
import DoubleInputRow from 'Components/DoubleInputRow'
import Checkbox from 'Components/Checkbox'

import InputBox from './components/inputBox'
import { gradeToNumber } from '../../util/calculations'
import { gpaStringBuilder } from '../../util/stringBuilders'

export default class GPA extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: {},
      pastGpa: '',
      pastUnits: '',
      APlusCounts: false,
      greaterThan4: false,
      goesToHundreth: false,
      inputCount: 3
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.inputCount !== nextState.inputCount ||
      this.state.isModalOpen !== nextState.isModalOpen
    )
  }

  onPastGpaChange = event => {
    if (
      Number(event.target.value) > 4 &&
      !this.state.APlusCounts &&
      !this.state.greaterThan4
    ) {
      this.props.openModal({
        title: 'Impossible!',
        message: "You can't have a gpa higher than a 4.0!",
        type: 'warning'
      })
    } else if (Number(event.target.value) < 0) {
      this.props.openModal({
        title: 'Hmm!',
        message: "I don't think anyone's gpa can be that bad!",
        type: 'warning'
      })
    } else {
      this.setState({ pastGpa: event.target.value })
    }
  }

  onUnitsChange = event => {
    if (Number(event.target.value) < 0) {
      this.props.openModal({
        title: 'Oh dear!',
        message: "You can't have negative units!",
        type: 'warning'
      })
    } else {
      this.setState({ pastUnits: event.target.value })
    }
  }

  toggleInput = event => {
    this.setState({ [event.target.id]: !this.state[event.target.id] })
  }

  stateFromChild = (id, course, grade, units) => {
    const { courses } = this.state
    const previousCategory = courses[id]
    courses[id] = { course, grade, units }
    if (previousCategory && previousCategory.course !== course) {
      this.setState({ courses })
    } else {
      this.setState({ courses })
    }
  }

  calculate = () => {
    const {
      courses,
      pastGpa,
      pastUnits,
      APlusCounts,
      greaterThan4,
      goesToHundreth
    } = this.state

    const keys = Object.keys(courses)
    let totalPoints = 0
    let totalCredits = 0
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i]
      const { grade, units, course } = courses[key]
      const numericGrade = gradeToNumber(grade, APlusCounts, goesToHundreth)

      if (typeof numericGrade === 'number' && grade && units) {
        totalPoints += numericGrade * Number(units)
        totalCredits += Number(units)
      } else if (typeof numericGrade !== 'number' && grade && units) {
        this.props.openModal({
          title: 'Oops!',
          message: course
            ? `Your grade for ${course} doesn't look right!`
            : "One of your grades doesn't look right!",
          type: 'warning'
        })
        return 0
      }
    }

    if (!isNaN(Number(pastGpa)) && !isNaN(Number(pastUnits))) {
      totalPoints += Number(pastGpa) * pastUnits
      totalCredits += Number(pastUnits)
    }

    const toRound = ((totalPoints / totalCredits) * 1000) % 10 >= 5
    const calculatedGpa = toRound
      ? Math.ceil((totalPoints / totalCredits) * 100) / 100
      : Math.floor((totalPoints / totalCredits) * 100) / 100
    if (isNaN(calculatedGpa)) {
      return 0
    }
    const finalGpa =
      (calculatedGpa * 10) % 10 !== 0
        ? calculatedGpa.toFixed(2)
        : calculatedGpa.toFixed(1)
    return finalGpa > 4 && !greaterThan4 ? '4.0' : finalGpa
  }

  showGpa = () => {
    const gpa = this.calculate()
    if (gpa !== 0) {
      this.props.openModal({
        title: 'Nice!',
        message: gpaStringBuilder(gpa),
        type: null
      })
    } else {
      this.props.openModal({
        title: 'Oh no!',
        message: "You haven't added any classes",
        type: 'warning'
      })
    }
  }

  addClass = () => {
    const { inputCount } = this.state
    this.setState({ inputCount: inputCount + 1 })
  }

  render() {
    const { inputCount, APlusCounts, greaterThan4, goesToHundreth } = this.state
    const inputs = []
    for (let i = 0; i < inputCount; i++) {
      inputs.push(
        <InputBox inputCount={i} stateToParent={this.stateFromChild} />
      )
    }

    return (
      <Layout
        title="Bare Minimum | Universal GPA Calculator"
        metaContent="See how you've done so far!"
        title="Universal GPA Calculator"
      >
        <Checkbox
          label="A+ is a 4.33 at your school."
          value={APlusCounts}
          onClick={console.log}
          id="checkbox1"
        />
        <Checkbox
          label="Grade scale goes to the hundreth place."
          value={goesToHundreth}
          onClick={console.log}
          id="checkbox2"
        />
        <Checkbox
          label="Greater than a 4.0 is attainable."
          value={greaterThan4}
          onClick={console.log}
          id="checkbox3"
        />

        <DoubleInputRow
          firstColumnLabel="Past GPA"
          secondColumnLabel="Past Units"
          firstColInputProps={{
            value: this.state.pastGpa,
            onInput: this.onPastGpaChange,
            maxLength: 3,
            placeholder: '3.8',
            type: 'number'
          }}
          secondColInputProps={{
            value: this.state.pastGpa,
            onInput: this.onUnitsChange,
            placeholder: '60',
            type: 'number'
          }}
          firstColumnOptional
          secondColumnOptional
        />

          {inputs}


          <ButtonRow
            leftButtonClick={this.addClass}
            rightButtonClick={this.showGpa}
          />

      </Layout>
    )
  }
}
