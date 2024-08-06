import React from 'react'

function Loader() {
  return (
    <div 
        className='spinner-border'
        role='status'
        style={{
            height: '100px',
            width: '100px',
            margin: 'auto',
            display: 'block'
        }}
    >
        <span className='visually-hidden sr-only'>Loading...</span>
    </div>
  )
}

export default Loader
