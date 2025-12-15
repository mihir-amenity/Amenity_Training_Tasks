import React from 'react'

function Modal({isModal,modalclose,children}) {
    if(!isModal){
        return;
    }
  return (
    <div>
      <div>
{children}
      </div>
    </div>
  )
}

export default Modal
