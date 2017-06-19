import React from 'react'
import './App.css'
import Header from './layout/Header'
import LoginWrapper from './layout/LoginWrapper'
import Footer from './layout/Footer'
import Modal from './layout/Modal'
import Home from './layout/Home'


function App (state) {
  let page = LoginWrapper(state)
  let classVal = 'login-content'
  if (state.isLogin) {
    page = Home(state.username)
    classVal = 'main-content'
  }
  return (
    <div className='app'>
      {Header()}
      <section className={classVal}>
        {page}
      </section>
      {Footer()}
      {Modal(state.isModalActive)}
    </div>
  )
}

export default App
