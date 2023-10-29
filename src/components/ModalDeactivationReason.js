import React from 'react'
import headicon from '../components/images/psychology_alt.svg'
import closeicon from '../components/images/close.svg'
import { Modal } from 'react-bootstrap'
import person from './images/Ellipse 314.svg'


const DeactivationReason = ({deactivate, setDeactivate}) => {
  return (
    <Modal show={deactivate} onHide={() => setDeactivate(false)} className='cohort-created-modal'>
        <Modal.Body>
            <div className='modal-outer'>
                <div className='modal-inner'>
                    <img src={closeicon} alt='Close Icon' className='close-icon' onClick={() => setDeactivate(false)}></img>
                    <div className='modal-content-div cohort-deleting-div'>
                        <img src={headicon} alt='Delete Close Icon' className='delete-close-icon-image'></img>
                        <p className='delete-agent-paragraph'>Suspention Reason</p>
                            <div style={{
                                minHeight:200,
                                textAlign:'center',
                                border: '1px solid rgba(0, 0, 0, 0.05)',
                                borderWidth:'0.5px solid #00000080',
                                borderColor:"#00000080",
                                borderRadius:10
                            }}>
                                This request is cancelled because the owner of the trash has not been present for
                                up to 10times for trash pickup.
                            </div>
                    </div>
                    
                    {/* <div className='modal-prompt-div'>
                        <button className='agent-confirm-delete-button'>Suspend</button>
                        <button className='agent-cancel-delete-button' onClick={() => setIsSuspendAgentModalVisible(false)}>Cancel</button>
                    </div> */}
                </div>
            </div>
        </Modal.Body>
               <div style={{
                paddingLeft:10,
                paddingBottom:20
               }}>
               <div style={{fontWeight:'Barlow',fontWeight:'500',paddingLeft:5,paddingBottom:5}}> Admin in charge of the cancelled request</div>
                    <img src={person} alt='' style={{
                        height:40,
                        width:40,
                        borderRadius:20,
                    }}/>
                    <span style={{paddingLeft:10,fontFamily:'Barlow',fontWeight:400}}>Caspa Clinton</span>
               </div>
    </Modal>
  )
}

export default DeactivationReason