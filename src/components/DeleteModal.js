import React from 'react'
import { Modal } from 'react-bootstrap'
import closeicon from '../components/images/close.svg'
import deletecloseimage from '../components/images/cancel.svg'

const DeleteModal = ({isDeleteModalVisible, setIsDeleteModalVisible, page}) => {
  return (
    <Modal show={isDeleteModalVisible} onHide={() => setIsDeleteModalVisible(false)} className='cohort-created-modal'>
            <Modal.Body>
                <div className='modal-outer'>
                    <div className='modal-inner'>
                        <img src={closeicon} alt='Close Icon' className='close-icon' onClick={() => setIsDeleteModalVisible(false)}></img>
                        <div className='modal-content-div cohort-deleting-div'>
                            <img src={deletecloseimage} alt='Delete Close Icon' className='delete-close-icon-image'></img>
                            <p className='delete-agent-paragraph'>Delete Agent?</p>
                            <p className='agent-will-be-deleted-paragraph'>Agent will be deleted permanently</p>
                        </div>
                        <div className='modal-prompt-div'>
                            <button className='agent-confirm-delete-button modal-prompt-button'>Delete</button>
                            <button className='agent-cancel-delete-button modal-prompt-button' onClick={() => setIsDeleteModalVisible(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
  )
}

export default DeleteModal