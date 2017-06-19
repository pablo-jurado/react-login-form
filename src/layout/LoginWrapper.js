import React from 'react'
import LoginForm from './LoginForm'
import HelpCenter from './HelpCenter'
import Spinner from './Spinner'


function LoginWrapper (state) {
  return (
    <div>
      {LoginForm(state)}
      {HelpCenter()}
      {Spinner(state.isLoading)}
    </div>
  )
}

export default LoginWrapper
