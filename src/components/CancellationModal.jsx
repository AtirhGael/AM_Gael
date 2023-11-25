import React from 'react'
import ModalLayout from './ModalLayout'
import cancellationimage from '../assets/images/news (10) 1.svg'
import nayahimage from '../assets/images/Ellipse 330.png'

const CancellationModal = ({isCancellationReasonModalVisible, setIsCancellationReasonModalVisible}) => {
  return (
    <>
        <ModalLayout
            size={'medium'}
            state={isCancellationReasonModalVisible}
            stateFunction={setIsCancellationReasonModalVisible}
            content={
                <>
                    <div className='action-modal-div'>
                        <img src={cancellationimage} alt='' className='cancellation-modal-image'></img>
                        <p>Cancellation Reason</p>
                        <div className='cancellation-modal-reason-div'>
                            <span>This request is canceled because the owner of the trash did not agree to the bid amount.</span>
                        </div>
                    </div>
                    <div className='cancellation-modal-footer-div'>
                        <p className='admin-in-charge-of-the-cancelled-request-paragraph'>Admin in charge of the canceled request</p>
                        <div className='cancellation-modal-footer-grid-div'>
                            <img src={nayahimage} alt='' className='table-user-image' />
                            <span className='admin-in-charge-of-the-cancelled-request-name'>Caspa Clinton</span>
                        </div>
                    </div>
                </>
                    }
                />
    </>
  )
}

export default CancellationModal