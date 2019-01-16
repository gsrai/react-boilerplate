import React from 'react'
import { storiesOf } from '@storybook/react'
import Greeter from './Greeter'

storiesOf('Components / Greeter', module)
  .add('default', () => <Greeter greeting='Hi Storybook' />)
