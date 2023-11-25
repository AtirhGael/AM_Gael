import React from 'react'
import headicon from '../components/images/psychology_alt.svg'
import closeicon from '../components/images/close.svg'
import { Modal } from 'react-bootstrap'

const SuspendAgentModal = ({isSuspendAgentModalVisible, setIsSuspendAgentModalVisible}) => {
  return (
    <Modal show={isSuspendAgentModalVisible} onHide={() => setIsSuspendAgentModalVisible(false)} className='cohort-created-modal'>
        <Modal.Body>
            <div className='modal-outer'>
                <div className='modal-inner'>
                    <img src={closeicon} alt='Close Icon' className='close-icon' onClick={() => setIsSuspendAgentModalVisible(false)}></img>
                    <div className='modal-content-div cohort-deleting-div'>
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
        </Modal.Body>
    </Modal>
  )
}

export default SuspendAgentModal

