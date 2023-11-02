import React from 'react'
import headicon from '../assets/icons/psychology_alt.svg'
import closeicon from '../assets/icons/close.svg'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

const SuspendAgentModal = ({isSuspendAgentModalVisible, setIsSuspendAgentModalVisible}) => {
  return (
    <Dialog open={isSuspendAgentModalVisible} onClose={() => setIsSuspendAgentModalVisible(false)} className='small-modal'>
        <DialogContent>
            <div className='modal-outer'>
                <div className='modal-inner'>
                    <img src={closeicon} alt='Close Icon' className='close-icon' onClick={() => setIsSuspendAgentModalVisible(false)}></img>
                    <div className='modal-content-div action-modal-div'>
                        <img src={headicon} alt='Delete Close Icon' className='delete-close-icon-image'></img>
                        <p className='delete-agent-paragraph'>Suspend Agent?</p>
                        <p className='agent-will-be-deleted-paragraph'>Agent will not have access to EcoCaasitech</p>
                    </div>
                    <div className='modal-prompt-div'>
                        <button className='agent-confirm-delete-button'>Suspend</button>
                        <button className='agent-cancel-delete-button' onClick={() => setIsSuspendAgentModalVisible(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default SuspendAgentModal