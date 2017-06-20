import React from 'react'
import axios from 'axios'
import marked from 'marked'

let modalData = ''

function randomNumBetween (min, max) {
  return Math.floor(Math.random() * max + min)
}

function getModalText () {
  let fileName = 'http://127.0.0.1:7979/md/' + 'login-help-' + randomNumBetween(1, 4) + '.md'
  axios.get(fileName)
    .then(showResponse)
    .catch(handleError)
}

function showResponse (response) {
  modalData = marked(response.data)
}

function handleError (error) {
  console.log(error)
}

function closeModal () {
  window.appState.isModalActive = false
}

getModalText()

function Modal (active) {
  let modalClass = ''
  if (active) {
    modalClass = 'active'
  }
  return (
    <div className={modalClass}>
      <div id='modalContent' className='modal'>
        <button onClick={closeModal} className='primary-btn x-btn'>x</button>
        <div className='modal-body' dangerouslySetInnerHTML={{__html: modalData}} />
        <button onClick={closeModal} className='primary-btn close-btn' id='closeBtn'>Close</button>
      </div>
      <div onClick={closeModal} id='modalBack' className='modal-back' />
    </div>
  )
}

export default Modal
