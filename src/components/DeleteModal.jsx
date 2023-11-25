import React from 'react'
import deletecloseimage from '../assets/icons/cancel.svg'
import ModalLayout from './ModalLayout';

const DeleteModal = ({isDeleteModalVisible, setIsDeleteModalVisible, page}) => {
  return (
    <ModalLayout
        size={'small'}
        state={isDeleteModalVisible}
        stateFunction={setIsDeleteModalVisible}
        content={
            <>
                <div className='action-modal-div'>
                  <img src={deletecloseimage} alt='Delete Close Icon' className='delete-close-icon-image'></img>
                  {page === 'user-management-listing' ?
                    <>
                      <p className='delete-agent-paragraph'>Delete User?</p>
                      <p className='agent-will-be-deleted-paragraph'>Nayah will be deleted permanently</p>
                    </> :
                    <>
                      <p className='delete-agent-paragraph'>Delete Agent?</p>
                      <p className='agent-will-be-deleted-paragraph'>Agent will be deleted permanently</p>
                    </>
                  }
                </div>
                <div className='modal-prompt-div'>
                  <button className='agent-confirm-delete-button modal-prompt-button'>Delete</button>
                  <button className='agent-cancel-delete-button modal-prompt-button' onClick={() => setIsDeleteModalVisible(false)}>Cancel</button>
                </div>
            </>
        }
    />
  )
}

export default DeleteModal