import { h, Component } from 'preact'
import { useState } from 'preact/hooks';

import Layout from 'Components/layout'
import Input from 'Components/Input'

import {
  calculatorStringBuilder,
  simpleErrorStringBuilder
} from '../../util/stringBuilders'


const FinalGrade = ({ openModal }) => {
  const [currentGrade, setCurrentGrade] = useState(null)
  const [finalWeight, setFinalWeight] = useState(null)
  const [requiredGrade, setRequiredGrade] = useState(null)

  const errorStringBuilder = ({
    currentGrade, 
    finalWeight, 
    requiredGrade,
  }) => {
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
  
  const calculateGrade = ({
    currentGrade, 
    finalWeight, 
    requiredGrade,
  }) => {
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
          requiredGrade,
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
            requiredGrade,
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
            paddingTop: '.8vh'
          }}
        >
          Your current grade:
        </label>
        <div
          className="col-xs-2"
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <Input
            className="form-control"
            type="number"
            name="currentGrade"
            value={currentGrade}
            onChange={(e) => setCurrentGrade(e.target.value)}
            placeholder="92"
            id="currentGrade"
          />
        </div>
        <label
          className="col-md-2"
          htmlFor="currentGrade"
          style={{ paddingTop: '10px', paddingLeft: 8 }}
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
          htmlFor="requiredGrade"
          className="col-xs-5 col-form-label semi-bold"
          style={{
            paddingRight: '10px',
            textAlign: 'right',
            paddingTop: '.8vh'
          }}
        >
          You want a:
        </label>
        <div
          className="col-xs-2"
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <Input
            className="form-control"
            type="number"
            name="requiredGrade"
            value={requiredGrade}
            onChange={(e) => setRequiredGrade(e.target.value)}
            placeholder="90"
            id="requiredGrade"
          />
        </div>
        <label
          htmlFor="requiredGrade"
          style={{ paddingTop: '10px', paddingLeft: 8 }}
        >
          % in the class.
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
            paddingTop: '.8vh'
          }}
        >
          Final's worth:
        </label>
        <div
          className="col-xs-2"
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <Input
            className="form-control"
            type="number"
            value={finalWeight}
            name="finalWeight"
            onChange={(e) => setFinalWeight(e.target.value)}
            placeholder="10"
            id="final"
          />
        </div>
        <label
          htmlFor="final"
          style={{ paddingTop: '10px', paddingLeft: 4 }}
        >
          % of your grade.
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
          onClick={onCalculate}
        >
          Calculate
        </a>
      </div>
    </div>
  </Layout>
  )
}

export default FinalGrade