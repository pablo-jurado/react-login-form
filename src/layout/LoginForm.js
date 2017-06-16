import React from 'react'

function LoginForm () {
  return (
    <form className='login-form'>
      <h1>Login to bloop.xyz</h1>
      <div className='input-row'>
        <label htmlFor='loginInput'>Username:</label>
        <input className='big-input' type='text' id='loginInput' />
      </div>
      <div className='input-row'>
        <label htmlFor='passwordInput'>Password:</label>
        <input className='big-input' type='password' id='passwordInput' />
      </div>
      <div className='feedback' />
      <div className='action-row'>
        <button className='primary-btn' id='loginBtn'>Log In</button>
      </div>
    </form>
  )
}

export default LoginForm
