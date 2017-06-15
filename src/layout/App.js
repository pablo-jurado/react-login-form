import React from 'react'
import './App.css'

function Header () {
  return (
    <header>
      <h1><a href='#'>bloop.xyz</a></h1>
      <p className='tagline'>Have you blooped today?</p>
    </header>
  )
}

function HelpCenter () {
  return (
    <div classNameName='help-center'>
      <a href='#'>Don't have an account?</a>
      <a id='helpBtn' href='#'>Need help logging in?</a>
    </div>
  )
}

function Spinner () {
  return (
    <div className='spinner-wrapper'>
      <div className='spinner'>
        <div className='bounce1' />
        <div className='bounce2' />
        <div className='bounce3' />
      </div>
    </div>
  )
}

function Footer () {
  return (
    <footer>
      <ul>
        <li>&copy; 2017 bloop.xyz</li>
        <li><a href='#'>Terms and Conditions</a></li>
        <li><a href='#'>The Bloop.xyz Guarantee</a></li>
        <li>Made in Texas</li>
      </ul>
    </footer>
  )
}

function Modal () {
  return (
    <div>
      <div id='modalContent' className='modal'>
        <button className='primary-btn x-btn'>x</button>
        <div className='modal-body' />
        <button className='primary-btn close-btn' id='closeBtn'>Close</button>
      </div>
      <div id='modalBack' className='modal-back' />
    </div>
  )
}

function App () {
  return (
    <div className='app'>
      {Header()}
      <section className='main-content'>
        {LoginForm()}
        {HelpCenter()}
        {Spinner()}
      </section>
      {Footer()}
      {Modal()}
    </div>
  )
}

export default App
