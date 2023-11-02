import React from 'react'
import { Dialog, DialogContent } from '@mui/material'
import closeicon from '../assets/icons/close.svg'

const ModalLayout = ({size, content, state, stateFunction}) => {
  return (
    <>
      <Dialog open={state} onClose={() => stateFunction(false)} className={`${(size === 'small' ? 'small-modal' : (size === 'medium') ? 'medium-modal' : (size === 'large') ? 'large-modal' : null)}`}>
        <DialogContent>
            <div className='modal-outer'>
              <div className='modal-inner'>
                  <img src={closeicon} alt='Close Icon' className='close-icon' onClick={() => stateFunction(false)}></img>
                  <div className='modal-content-div'>
                      {content}
                  </div>
              </div>
            </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ModalLayout