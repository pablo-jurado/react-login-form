import React from 'react'
import './App.css'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Modal from './layout/Modal'
import Content from './layout/Content'

function App (state) {
  return (
    <div className='app'>
      {Header()}
      {Content(state)}
      {Footer()}
      {Modal(state.isModalActive)}
    </div>
  )
}

export default App
