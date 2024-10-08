import React from 'react'

function FormContainer({ children }) {
  return (
    <div className='container'>
        <div className='row justify-content-md-center'>
            <div className='col xs={12} med={6}'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default FormContainer
