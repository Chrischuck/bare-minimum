import { h, Component } from 'preact'
import { useState } from 'preact/hooks'

import {
  calculatorStringBuilder,
  simpleErrorStringBuilder
} from 'Util/stringBuilders'
import Layout from 'Components/layout'
import Button from 'Components/Button'

import InputRow from './InputRow'
import styles from './index.module.css'

const FinalGrade = ({ openModal }) => {
  const [currentGrade, setCurrentGrade] = useState(null)
  const [finalWeight, setFinalWeight] = useState(null)
  const [requiredGrade, setRequiredGrade] = useState(null)

  const errorStringBuilder = ({ currentGrade, finalWeight, requiredGrade }) => {
    const errorString = simpleErrorStringBuilder({
      'current grade': currentGrade,
      "final's weight": finalWeight,
      'target grade': requiredGrade
    })
    if (errorString) {
      return errorString
    }
    if (Number(finalWeight) > 100) {
      return "Your final percentage can't be more than 100%"
    }
    return ''
  }

  const calculateGrade = ({ currentGrade, finalWeight, requiredGrade }) => {
    const grade = Number(requiredGrade) / 100
    const examWorth = Number(finalWeight) / 100
    const currentGradeNumber = Number(currentGrade) / 100

    const finalGrade =
      ((grade - (1 - examWorth) * currentGradeNumber) / examWorth) * 100

    return finalGrade.toFixed(2)
  }

  const onCalculate = () => {
    if (
      currentGrade === null ||
      finalWeight === null ||
      requiredGrade === null ||
      Number(finalWeight) > 100
    ) {
      openModal({
        title: 'Uh Oh!',
        message: errorStringBuilder({
          currentGrade,
          finalWeight,
          requiredGrade
        }),
        type: 'warning'
      })
    } else {
      openModal({
        title: 'You can do it!',
        message: calculatorStringBuilder(
          calculateGrade({
            currentGrade,
            finalWeight,
            requiredGrade
          }),
          requiredGrade
        ),
        type: null
      })
    }
  }

  return (
    <Layout
      metaTitle="Bare Minimum | Final Grade Calculator"
      metaContent="Final grade calculator to help you pass your classes!"
      title="Final Grade Calculator"
    >
      <div className="row">
        <InputRow
          inputId="currentGrade"
          value={currentGrade}
          onChange={e => setCurrentGrade(e.target.value)}
          startLabel="Your current grade:"
          endLabel="%."
          placeholder="92"
        />
        <InputRow
          inputId="requiredGrade"
          value={requiredGrade}
          onChange={e => setRequiredGrade(e.target.value)}
          startLabel="You want a:"
          endLabel="% in the class."
          placeholder="90"
        />
        <InputRow
          inputId="finalWeight"
          value={finalWeight}
          onChange={e => setFinalWeight(e.target.value)}
          startLabel="Final's worth:"
          endLabel="% of your grade."
          placeholder="10"
        />

        <div className={styles.buttonContainer}>
          <Button onClick={onCalculate}>Calculate</Button>
        </div>
      </div>
    </Layout>
  )
}

export default FinalGrade
