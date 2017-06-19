import React from 'react'

function Spinner (isLoading) {
  if (isLoading) {
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
}

export default Spinner
