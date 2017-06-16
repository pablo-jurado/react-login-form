import React from 'react'

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

export default Modal
