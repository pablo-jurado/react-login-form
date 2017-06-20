/* global appState */
import React from 'react'
import makeAjaxCall from '../index'

function handleInput (evt) {
  appState.username = evt.target.value
}

function handlePass (evt) {
  appState.password = evt.target.value
}

function handleSubmit (evt) {
  evt.preventDefault()
  if (appState.username === '' || appState.password === '') return
  makeAjaxCall()
}

function LoginForm (state) {
  let feedback = ''
  if (state.error === 400) feedback = 'Wrong Username or Password'
  if (state.error === 500) feedback = 'Sorry we are having some difficulties'
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
      <div className='feedback'>{feedback}</div>
      <div className='action-row'>
        <button onClick={handleSubmit} className='primary-btn' id='loginBtn'>Log In</button>
      </div>
    </form>
  )
}

export default LoginForm
