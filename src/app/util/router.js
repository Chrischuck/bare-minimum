import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import App from '../index.js'

import Bundle from './bundle'

import asyncFinalGradeComponent from '../../routes/finalGrade/index.bundle.js'
import asyncDamageCalculatorComponent from '../../routes/damageControl/index.bundle.js'
import asyncWeightedGradeComponent from '../../routes/weightedGrade/index.bundle.js'
import asyncGpaComponent from '../../routes/gpa/index.bundle.js'
import asyncNotFoundComponent from '../../routes/notFound/index.bundle.js'

const FinalGradeComponent = props => (
  <Bundle load={asyncFinalGradeComponent}>{Comp => <Comp {...props} />}</Bundle>
)
const DamageCalculatorComponent = props => (
  <Bundle load={asyncDamageCalculatorComponent}>
    {Comp => <Comp {...props} />}
  </Bundle>
)
const WeightedGradeComponent = props => (
  <Bundle load={asyncWeightedGradeComponent}>
    {Comp => <Comp {...props} />}
  </Bundle>
)

const GpaComponent = props => (
  <Bundle load={asyncGpaComponent}>{Comp => <Comp {...props} />}</Bundle>
)
const NotFoundComponent = props => (
  <Bundle load={asyncNotFoundComponent}>
    {Comp => <Comp push={props.push} />}
  </Bundle>
)

const Router = ({ history }) => {
  const [_, setCurrentPath] = useState();

  useEffect(() => {
    history.listen(location => { setCurrentPath(location) })
  }, []);

  const push = path => {
    history.push(path)
  }


  const pathname = history.location.pathname

  if (pathname === '/') {
    history.replace('/grade-calculator')
    const component = <FinalGradeComponent />
    return (
      <App
        pathname={history.location.pathname}
        component={component}
        push={push}
      />
    )
  }

  let component = null

  switch (pathname) {
    case '/grade-calculator':
      component = FinalGradeComponent
      break
    case '/damage-calculator':
      component = DamageCalculatorComponent
      break
    case '/weighted-grade-calculator':
      component = WeightedGradeComponent
      break
    case '/gpa-calculator':
      component = GpaComponent
      break
    default:
      component = NotFoundComponent
  }

  return (
    <App
      pathname={history.location.pathname}
      Component={component}
      push={push}
    />
  )
}

export default Router
