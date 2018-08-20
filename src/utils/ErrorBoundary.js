import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error, information) {
    this.setState({ hasError: true })
    console.error(`ErrorBoundary: ${error} ${information} Error`)
  }

  render() {
    const { children } = this.props
    const { hasError } = this.state
    if (hasError) {
      return <h1>Something went wrong.</h1>
    }
    return children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
}

export default ErrorBoundary
