import { h } from 'preact'
import { useState } from 'preact/hooks'

import Layout from 'Components/layout'
import Button from 'Components/Button'
import InputRow from 'Components/SimpleInputRow'

import styles from './index.module.css'

const DamageCalculator = ({ openModal }) => {
  const [currentGrade, setCurrentGrade] = useState(null)
  const [assignmentWeight, setAssignmentWeight] = useState(null)
  const [assignmentGrade, setAssignmentGrade] = useState(null)

  const calculateGrade = () => {
    const grade = Number(currentGrade) / 100
    const assignmentWorth = Number(assignmentWeight) / 100
    const assignmentGrade = Number(assignmentGrade) / 100

    const finalGrade =
      (assignmentWorth * assignmentGrade + (1 - assignmentWorth) * grade) * 100

    return finalGrade.toFixed(2)
  }

  const onCalculate = () => {
    if (
      currentGrade === '' ||
      assignmentWeight === '' ||
      assignmentGrade === ''
    ) {
      openModal({
        title: 'Uh Oh!',
        message: this.errorStringBuilder(),
        type: 'warning'
      })
    } else {
      const grade = calculateGrade()
      let title = 'Nice!'
      if (grade < 50) {
        title = 'Ouch.'
      } else if (grade >= 50 && grade < 61) {
        title = 'Bummer.'
      } else if (grade >= 61 && grade < 80) {
        title = 'Not Bad.'
      }

      openModal({
        title,
        message: `Looks like your grade is now ${this.calculateGrade()}%.`,
        type: null
      })
    }
  }

  return (
    <Layout
      metaTitle="Bare Minimum | Final Grade Calculator"
      metaContent="Final grade calculator to help you pass your classes!"
      title="Final Grade Calculator"
      subtitle="Find out how an assignment will affect your grade."
    >
      <InputRow
        inputId="currentGrade"
        value={currentGrade}
        onChange={e => setCurrentGrade(e.target.value)}
        startLabel="Current grade:"
        endLabel="%."
        placeholder="92"
      />
      <InputRow
        inputId="requiredGrade"
        value={assignmentWeight}
        onChange={e => setAssignmentWeight(e.target.value)}
        startLabel="Assignment is:"
        endLabel="% of your grade."
        placeholder="10"
      />
      <InputRow
        inputId="finalWeight"
        value={assignmentGrade}
        onChange={e => setAssignmentGrade(e.target.value)}
        startLabel="You expect a:"
        endLabel="% on the assignment."
        placeholder="90"
      />

      <div className={styles.buttonContainer}>
        <Button onClick={onCalculate}>Calculate</Button>
      </div>
    </Layout>
  )
}

export default DamageCalculator