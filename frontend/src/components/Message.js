import React from 'react'

function Message({ variant, children }) {
  return (
    <div className={variant} role='alert'>
      {children}
    </div>
  )
}

export default Message
