import React from 'react'
import ModalLayout from '../components/ModalLayout'
import thumbsup from '../assets/icons/thumb_up.svg'


const SuccessfulModal = ({state, stateFunction, page}) => {
  return (
    <>
        <ModalLayout
            size={'small'}
            state={state}
            stateFunction={stateFunction}
            content={
                <>
                    <div className='modal-content-div action-modal-div '>
                            <img src={thumbsup} alt='Thumbs Up Icon' className='thumbsup-icon-image'></img>
                            {page === 'user-management-listing' ?
                                <p className='successful-modal-paragraph'>Subscription deleted</p> :
                                null
                            }
                    </div>
                </>
            }
        />
    </>
  )
}

export default SuccessfulModal