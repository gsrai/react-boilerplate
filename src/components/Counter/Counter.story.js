import React from 'react'
import { storiesOf } from '@storybook/react'
import Counter from './Counter'

storiesOf('Components / Counter', module)
  .add('default', () => <Counter />)
