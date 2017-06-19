import React from 'react'
import './App.css'
import Header from './layout/Header'
import LoginForm from './layout/LoginForm'
import HelpCenter from './layout/HelpCenter'
import Spinner from './layout/Spinner'
import Footer from './layout/Footer'
import Modal from './layout/Modal'

function App (state) {
  return (
    <div className='app'>
      {Header()}
      <section className='main-content'>
        {LoginForm(state)}
        {HelpCenter()}
        {Spinner(state.isLoading)}
      </section>
      {Footer()}
      {Modal()}
    </div>
  )
}

export default App
