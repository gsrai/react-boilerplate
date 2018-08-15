import React from 'react'
import PropTypes from 'prop-types'

const Greeter = ({ greeting = 'hello' }) => <span>{greeting}</span>

Greeter.propTypes = {
  greeting: PropTypes.string
}

export default Greeter
