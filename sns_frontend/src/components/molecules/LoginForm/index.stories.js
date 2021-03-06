import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { LoginForm } from 'components'

storiesOf('LoginForm', module)
  .add('default', () => (
    <LoginForm>Hello</LoginForm>
  ))
  .add('reverse', () => (
    <LoginForm reverse>Hello</LoginForm>
  ))
