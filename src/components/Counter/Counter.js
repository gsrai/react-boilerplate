import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }
  handleIncrement = (e) => {
    this.setState({
      value: this.state.value + 1
    })
  }

  handleDecrement = (e) => {
    this.setState({
      value: this.state.value - 1
    })
  }

  render() {
    return (
      <div>
        <span>
          <button className={'counter-decrement-btn'} onClick={(e) => this.handleDecrement(e)}> - </button>
        </span>
        <span>
          {this.state.value}
        </span>
        <span>
          <button className={'counter-increment-btn'} onClick={(e) => this.handleIncrement(e)}> + </button>
        </span>
      </div>
    )
  }
}

export default Counter
