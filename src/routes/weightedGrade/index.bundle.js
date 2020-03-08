import { h } from 'preact'
import { useState} from 'preact/hooks'

import Layout from 'Components/layout'
import ButtonRow from 'Components/ButtonRow'
import TripleInputRow from 'Components/TripleInputRow'
import DoubleInputRow from 'Components/DoubleInputRow'

import { calculatorStringBuilder } from 'Util/stringBuilders'
import renderCategories from 'Util/renderWeightedGrade'

const WeightedGrade = ({
  openModal
}) => {
  const [categories, setCategories] = useState({})
  const [requiredGrade, setRequiredGrade] = useState('')
  const [finalWeight, setFinalWeight] = useState('')
  const [inputCount, setInputCount] = useState([1, 2, 3])


  // Get data from the children....maybe use redux for this
  const onChange = (id, category, grade, weight) => {
    const categoriesCopy = { ...categories }
    categoriesCopy[id] = { category, grade, weight }
    setCategories(categoriesCopy)
  }

  // All logic
  const calculate = () => {
    const keys = Object.keys(categories)
    const requiredPercent = Number(requiredGrade) / 100
    const finalPercent = Number(finalWeight) / 100
    let contributions = 0
    let totalWeights = 0
    let totalPercentage = Number(finalWeight)

    if (!requiredPercent) {
      openModal({
        title: 'Uh Oh!',
        message: "The grade you want doesn't look right!",
        type: 'warning'
      })
      return
    }
    if (!finalPercent) {
      openModal({
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
        openModal({
          title: 'Oops!',
          message: `Your grade for ${category} doesn't look right!`,
          type: 'warning'
        })
        return
      }
      if (!numericalWeight && category) {
        openModal({
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
      openModal({
        title: 'Oh no!',
        message: "Looks like you haven't added any categories!",
        type: 'warning'
      })
      return
    }
    if (totalPercentage !== 100) {
      openModal({
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
      openModal({
        title: 'You can do it!',
        message: calculatorStringBuilder(
          calculatedGrade,
          requiredGrade
        ),
        type: null
      })
    } else {
      openModal({
        title: 'Uh Oh!',
        message: 'Something went wrong, make sure your inputs are right!',
        type: 'warning'
      })
    }
  }

  return (
    <Layout
      metaTitle="Bare Minimum | Weighted Final Grade Calculator"
      metaContent="Weighted Final grade calculator to help you pass your classes!"
      title="Weighted Final Grade Calculator"
      subtitle="% sign is not neccesary"
    >
      <DoubleInputRow
        firstColumnLabel="You want a:"
        secondColumnLabel="Final's worth:"
        firstColInputProps={{
          value: requiredGrade,
          onInput: (e) => setRequiredGrade(e.target.value),
          maxLength: 3,
          placeholder: '93%',
          type: 'number'
        }}
        secondColInputProps={{
          value: finalWeight,
          onInput: (e) => setFinalWeight(e.target.value),
          maxLength: 3,
          placeholder: '20%',
          type: 'number'
        }}
      />

      {inputCount.map(value => {
        const placeholders = renderCategories(value)
        return (
          <TripleInputRow
            key={value}
            firstColumnLabel="Category"
            secondColumnLabel="Your Grade"
            thirdColumnLabel="Weight"
            inputCount={value}
            onChange={onChange}
            firstColInputProps={placeholders.firstColInputProps}
            secondColInputProps={{ type: 'number', ...placeholders.secondColInputProps }}
            thirdColInputProps={{ type: 'number', ...placeholders.thirdColInputProps }}
          />
        )
      })}

      <ButtonRow
        leftButtonClick={() => setInputCount([...inputCount, inputCount.pop() + 1])}
        rightButtonClick={calculate}
      />
    </Layout>
  )
}

export default WeightedGrade