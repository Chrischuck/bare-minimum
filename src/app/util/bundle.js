import { Component, toChildArray } from 'preact'

class Bundle extends Component {
  state = {
    mod: null
  }

  componentWillMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load(props) {
    this.setState({
      mod: null
    })
    props.load((mod) => {
      this.setState({
        mod: mod.default ? mod.default : mod
      })
    })
  }

  render() {
    const func = toChildArray(this.props.children)[0]

    return this.state.mod && func ? func(this.state.mod) : null
  }
}

export default Bundle