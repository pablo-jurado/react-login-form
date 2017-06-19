import React from 'react'
import makeAjaxCall from '../index'

function handleInput (evt) {
  window.appState.username = evt.target.value
}

function handlePass (evt) {
  window.appState.password = evt.target.value
}

function handleSubmit (evt) {
  evt.preventDefault()
  makeAjaxCall()
}

function LoginForm (state) {
  return (
    <form className='login-form'>
      <h1>Login to bloop.xyz</h1>
      <div className='input-row'>
        <label htmlFor='loginInput'>Username:</label>
        <input onChange={handleInput} value={state.username} className='big-input' type='text' id='loginInput' />
      </div>
      <div className='input-row'>
        <label htmlFor='passwordInput'>Password:</label>
        <input onChange={handlePass} className='big-input' type='password' id='passwordInput' />
      </div>
      <div className='feedback' />
      <div className='action-row'>
        <button onClick={handleSubmit} className='primary-btn' id='loginBtn'>Log In</button>
      </div>
    </form>
  )
}

export default LoginForm
