import { h } from 'preact'
import { useState } from 'preact/hooks'

import Layout from 'Components/layout'
import ButtonRow from 'Components/ButtonRow'
import TripleInputRow from 'Components/TripleInputRow'
import DoubleInputRow from 'Components/DoubleInputRow'
import Checkbox from 'Components/Checkbox'

import { gradeToNumber } from 'Util/calculations'
import { gpaStringBuilder } from 'Util/stringBuilders'
import renderCategories from 'Util/renderClasses'

export default ({
  openModal
}) => {
    const [courses, setCourses] = useState({})
    const [pastGpa, setGpa] = useState('')
    const [pastUnits, setPastUnits] = useState('')
    const [APlusCounts, setAPlusCounts] = useState(false)
    const [greaterThan4, setGreaterThan4] = useState(false)
    const [goesToHundreth, setGoesToHundreth] = useState(false)
    const [inputCount, setInputCount] = useState([1, 2, 3])

    const onPastGpaChange = event => {
    if (
      Number(event.target.value) > 4 &&
      !APlusCounts &&
      !greaterThan4
    ) {
      openModal({
        title: 'Impossible!',
        message: "You can't have a gpa higher than a 4.0!",
        type: 'warning'
      })
    } else if (Number(event.target.value) < 0) {
      openModal({
        title: 'Hmm!',
        message: "I don't think anyone's gpa can be that bad!",
        type: 'warning'
      })
    } else {
      setGpa(event.target.value)
    }
  }

  const onUnitsChange = event => {
    if (Number(event.target.value) < 0) {
      openModal({
        title: 'Oh dear!',
        message: "You can't have negative units!",
        type: 'warning'
      })
    } else {
      setPastUnits(event.target.value)
    }
  }

  const onChange = (id, course, grade, units) => {
    const coursesCopy = { ...courses }
    coursesCopy[id] = { course, grade, units }
    setCourses(coursesCopy)
  }

  const calculate = () => {
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
        openModal({
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

  const showGpa = () => {
    const gpa = calculate()
    if (gpa !== 0) {
      openModal({
        title: 'Nice!',
        message: gpaStringBuilder(gpa),
        type: null
      })
    } else {
      openModal({
        title: 'Oh no!',
        message: "You haven't added any classes",
        type: 'warning'
      })
    }
  }

  return (
    <Layout
      title="Bare Minimum | Universal GPA Calculator"
      metaContent="See how you've done so far!"
      title="Universal GPA Calculator"
    >
      <Checkbox
        label="A+ is a 4.33 at your school."
        checked={APlusCounts}
        onChange={() => setAPlusCounts(prev => !prev)}
        id="checkbox1"
      />
      <Checkbox
        label="Grade scale goes to the hundreth place."
        checked={goesToHundreth}
        onChange={() => setGoesToHundreth(prev => !prev)}
        id="checkbox2"
      />
      <Checkbox
        label="Greater than a 4.0 is attainable."
        checked={greaterThan4}
        onChange={() => setGreaterThan4(prev => !prev)}
        id="checkbox3"
      />

      <DoubleInputRow
        firstColumnLabel="Past GPA"
        secondColumnLabel="Past Units"
        firstColInputProps={{
          value: pastGpa,
          onInput: onPastGpaChange,
          maxLength: 3,
          placeholder: '3.8',
          type: 'number'
        }}
        secondColInputProps={{
          value: pastUnits,
          onInput: onUnitsChange,
          placeholder: '60',
          type: 'number'
        }}
        firstColumnOptional
        secondColumnOptional
      />

      {inputCount.map(value => {
        const placeholders = renderCategories(value)
        return (
          <TripleInputRow
            key={value}
            firstColumnLabel="Class"
            secondColumnLabel="Grade"
            thirdColumnLabel="Units"
            inputCount={value}
            onChange={onChange}
            firstColInputProps={placeholders.firstColInputProps}
            secondColInputProps={{ ...placeholders.secondColInputProps }}
            thirdColInputProps={{ type: 'number', ...placeholders.thirdColInputProps }}
          />
        )
      })}

      <ButtonRow
        leftButtonClick={() => setInputCount([...inputCount, inputCount.pop() + 1])}
        rightButtonClick={showGpa}
      />
    </Layout>
  )
}
