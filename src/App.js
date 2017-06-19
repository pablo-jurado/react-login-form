import React from 'react'
import './App.css'
import Header from './layout/Header'
import LoginWrapper from './layout/LoginWrapper'
import Footer from './layout/Footer'
import Modal from './layout/Modal'
import Home from './layout/Home'


function App (state) {
  let page = LoginWrapper(state)
  if (state.isLogin) page = Home(state.username)

  return (
    <div className='app'>
      {Header()}
      <section className='main-content'>
        {page}
      </section>
      {Footer()}
      {Modal()}
    </div>
  )
}

export default App
