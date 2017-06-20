/* global appState */
import React from 'react'

function openModal () {
  appState.isModalActive = true
}

function HelpCenter () {
  return (
    <div className='help-center'>
      <a href='#'>Don't have an account?</a>
      <a id='helpBtn' onClick={openModal}>Need help logging in?</a>
    </div>
  )
}

export default HelpCenter
