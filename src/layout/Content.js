import React from 'react'
import LoginWrapper from './LoginWrapper'

function Home (state) {
  if (state.isLogin) {
    return (
      <section className={'main-content'}>
        <div className='home'>
          <h1>Welcome <span id='userName'>{state.username}</span>!<br />You have successfully logged in to bloop.xyz</h1>
          <p>Are you ready to bloop today?</p>
        </div>
      </section>
    )
  }
  return (
    <section className={'login-content'}>
      {LoginWrapper(state)}
    </section>
  )
}

export default Home
