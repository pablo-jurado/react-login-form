import React from 'react'


function closeModal () {
  window.appState.isModalActive = false
}

function Modal (active) {
  let modalClass = ''
  if (active) modalClass = 'active'
  return (
    <div className={modalClass}>
      <div id='modalContent' className='modal'>
        <button onClick={closeModal} className='primary-btn x-btn'>x</button>
        <div className='modal-body'></div>
        <button onClick={closeModal} className='primary-btn close-btn' id='closeBtn'>Close</button>
      </div>
      <div onClick={closeModal} id='modalBack' className='modal-back' />
    </div>
  )
}

export default Modal
