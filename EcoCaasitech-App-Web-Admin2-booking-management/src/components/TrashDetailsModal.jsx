import React from 'react'
import ModalLayout from './ModalLayout'
import trashmodalimage from '../assets/images/Rectangle 360.svg'
import bookicon from '../assets/icons/import_contacts.svg'
import nayahimage from '../assets/images/Ellipse 330.png'
import { Grid, Paper, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EcopointLevelBadge from './EcopointLevelBadge'


const TrashDetailsModal = ({isTrashAgentModalVisible, setIsTrashAgentModalVisible, page, isTrashDetailsModalVisible, setIsTrashDetailsModalVisible, setIsSelectAssignModalVisible, setIsCancellationReasonModalVisible}) => {
    const navigate = useNavigate()
  return (
    <>
        {(page === 'agent-profile') ? 
            <ModalLayout
                size={'large'}
                state={isTrashAgentModalVisible}
                stateFunction={setIsTrashAgentModalVisible}
                content={
                    <>
                        <div className='trash-pickup-agent-info-modal-upper-div'>
                            <div className='trash-pickup-agent-info-grid-div'>
                                <div>
                                    <img src={nayahimage} alt='Trash Pickup Agent Headshot' className='trash-pickup-agent-headshot-image'></img>
                                </div>
                                <div>
                                    <p className='trash-pickup-name-paragraph'>Nayah</p>
                                    <p className='trash-pickup-modal-agent-id-paragraph'>ID: TO1234567</p>
                                </div>
                            </div>
                            <div className='trash-pickup-agent-info-modal-upper-div-inner-left-div'>
                                <div className='trash-pickup-info-modal-book-icon-div'>
                                    <img src={bookicon} alt='Book Icon' className='trash-agent-details-modal-book-icon'></img>
                                </div>
                                <div>
                                    <p className='trash-pickup-modal-booking-type-paragraph'>Booking Type</p>
                                    <p className='trash-pickup-modal-type-paragraph'>Book later</p>
                                    <p className='trash-pickup-modal-status-paragraph upcoming'>Upcoming</p>
                                </div>
                            </div>
                        </div>
                        <div className='trash-pickup-agent-info-modal-middle-div'>
                            <img src={trashmodalimage} alt='Trash' className='trash-modal-image'></img>
                            <div className='trash-pickup-agent-info-text-div'>
                                <p className='request-id-paragraph'>Request ID</p>
                                <p className='request-id'>TPU012289468</p>
                                <Grid container spacing={2} className='trash-pickup-agent-info-text-container'>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <p className='trash-pickup-agent-details-type-para'>Pickup Location</p>
                                        <p className='trash-pickup-agent-details-text-para'>Carrefour Jouvance</p>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <p className='trash-pickup-agent-details-type-para'>Amount</p>
                                        <p className='trash-pickup-agent-details-text-para'>350 cfa</p>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <p className='trash-pickup-agent-details-type-para'>Date</p>
                                        <p className='trash-pickup-agent-details-text-para'>Friday May 1st  2023</p>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <p className='trash-pickup-agent-details-type-para'>Trash Quantity</p>
                                        <p className='trash-pickup-agent-details-text-para'>2 Bags</p>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <p className='trash-pickup-agent-details-type-para'>Time</p>
                                        <p className='trash-pickup-agent-details-text-para'>10:10 am</p>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <p className='trash-pickup-agent-details-type-para'>Past Request Made</p>
                                        <p className='trash-pickup-agent-details-text-para'>10 Pickups</p>
                                    </Grid>
                                </Grid>        
                            </div>
                        </div>
                        <button className='trash-pickup-agent-info-modal-reassign-button'>Reassign</button>
                    </>
                }
            /> :
            (page === 'incoming-request-listing') ? 
                <ModalLayout
                size={'large'}
                state={isTrashDetailsModalVisible}
                stateFunction={setIsTrashDetailsModalVisible}
                content={
                    <>
                        <div className='trash-pickup-agent-info-modal-upper-div'>
                            <div className='trash-pickup-agent-info-grid-div'>
                                <div>
                                    <img src={nayahimage} alt='Trash Pickup Agent Headshot' className='trash-pickup-agent-headshot-image'></img>
                                </div>
                                <div>
                                    <p className='trash-pickup-name-paragraph'>Nayah</p>
                                    <p className='trash-pickup-modal-agent-id-paragraph'>ID: TO1234567</p>
                                </div>
                            </div>
                            <div className='trash-pickup-agent-info-modal-upper-div-inner-left-div'>
                                <div className='trash-pickup-info-modal-book-icon-div'>
                                    <img src={bookicon} alt='Book Icon' className='trash-agent-details-modal-book-icon'></img>
                                </div>
                                <div>
                                    <p className='trash-pickup-modal-booking-type-paragraph'>Booking Type</p>
                                    <p className='trash-pickup-modal-type-paragraph'>Book later</p>
                                    <p className='trash-pickup-modal-status-paragraph upcoming'>Upcoming</p>
                                </div>
                            </div>
                        </div>
                        <div className='trash-pickup-agent-info-modal-middle-div'>
                            <img src={trashmodalimage} alt='Trash' className='trash-modal-image'></img>
                            <div className='trash-pickup-agent-info-text-div'>
                                <p className='request-id-paragraph'>Request ID</p>
                                <p className='request-id'>TPU012289468</p>
                                <Grid container spacing={2} className='trash-pickup-agent-info-text-container'>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <p className='trash-pickup-agent-details-type-para'>Pickup Location</p>
                                        <p className='trash-pickup-agent-details-text-para'>Carrefour Jouvance</p>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <p className='trash-pickup-agent-details-type-para'>Amount</p>
                                        <p className='trash-pickup-agent-details-text-para'>350 cfa</p>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <p className='trash-pickup-agent-details-type-para'>Date</p>
                                        <p className='trash-pickup-agent-details-text-para'>Friday May 1st  2023</p>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <p className='trash-pickup-agent-details-type-para'>Trash Quantity</p>
                                        <p className='trash-pickup-agent-details-text-para'>2 Bags</p>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <p className='trash-pickup-agent-details-type-para'>Time</p>
                                        <p className='trash-pickup-agent-details-text-para'>10:10 am</p>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <p className='trash-pickup-agent-details-type-para'>Past Request Made</p>
                                        <p className='trash-pickup-agent-details-text-para'>10 Pickups</p>
                                    </Grid>
                                </Grid>        
                            </div>
                        </div>
                        <div className='trash-modal-button-div'>
                            <button className='trash-modal-assign-request-button' onClick={() => {setIsTrashDetailsModalVisible(false); setIsSelectAssignModalVisible(true)}}>Assign Request</button>
                            <button className='trash-modal-bid-button' onClick={() => navigate('/booking-management/bid')}>Bid</button>
                            <button className='trash-modal-cancel-request-button' onClick={() => {setIsTrashDetailsModalVisible(false); setIsCancellationReasonModalVisible(true)}}>Cancel Request</button>
                        </div>
                    </>
                }
            /> :
            (page === 'owner-profile') ? 
            <ModalLayout
            size={'large'}
            state={isTrashAgentModalVisible}
            stateFunction={setIsTrashAgentModalVisible}
            content={
                <>
                    <div className='trash-pickup-agent-info-modal-upper-div'>
                        <div className='trash-pickup-agent-info-grid-div'>
                            <div>
                                <img src={nayahimage} alt='Trash Pickup Agent Headshot' className='trash-pickup-agent-headshot-image'></img>
                            </div>
                            <div>
                                <p className='trash-pickup-name-paragraph'>Nayah</p>
                                <p className='trash-pickup-modal-agent-id-paragraph'>ID: TO1234567</p>
                            </div>
                        </div>
                        <div className='trash-pickup-agent-info-modal-upper-div-inner-left-div'>
                            <div className='trash-pickup-info-modal-book-icon-div'>
                                <img src={bookicon} alt='Book Icon' className='trash-agent-details-modal-book-icon'></img>
                            </div>
                            <div>
                                <p className='trash-pickup-modal-booking-type-paragraph'>Booking Type</p>
                                <p className='trash-pickup-modal-type-paragraph'>Book later</p>
                                <p className='trash-pickup-modal-status-paragraph upcoming'>Upcoming</p>
                            </div>
                        </div>
                    </div>
                    <div className='trash-pickup-agent-info-modal-middle-div'>
                        <img src={trashmodalimage} alt='Trash' className='trash-modal-image'></img>
                        <div className='trash-pickup-agent-info-text-div'>
                            <Grid container alignItems={'center' } >
                                <Grid item xs={6} sm={6} md={6} lg={6}>
                                <p className='request-id-paragraph'>Request ID</p>
                                <p className='request-id'>TPU012289468</p>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6}>
                                   <EcopointLevelBadge/>
                                </Grid>
                            </Grid>
                            
                            
                            <Grid container spacing={2} className='trash-pickup-agent-info-text-container'>
                                <Grid item xs={6} sm={6} md={6} lg={6}>
                                    <p className='trash-pickup-agent-details-type-para'>Pickup Location</p>
                                    <p className='trash-pickup-agent-details-text-para'>Carrefour Jouvance</p>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6}>
                                    <p className='trash-pickup-agent-details-type-para'>Amount</p>
                                    <p className='trash-pickup-agent-details-text-para'>350 cfa</p>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6}>
                                    <p className='trash-pickup-agent-details-type-para'>Date</p>
                                    <p className='trash-pickup-agent-details-text-para'>Friday May 1st  2023</p>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6}>
                                    <p className='trash-pickup-agent-details-type-para'>Trash Quantity</p>
                                    <p className='trash-pickup-agent-details-text-para'>2 Bags</p>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6}>
                                    <p className='trash-pickup-agent-details-type-para'>Time</p>
                                    <p className='trash-pickup-agent-details-text-para'>10:10 am</p>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6}>
                                    <p className='trash-pickup-agent-details-type-para'>Past Request Made</p>
                                    <p className='trash-pickup-agent-details-text-para'>10 Pickups</p>
                                </Grid>
                            </Grid>        
                        </div>
                    </div>
                    <button className='trash-pickup-agent-info-modal-reassign-button'>Reassign</button>
                </>
            }
        /> :
    null //other pages ternary goes here
        }
    </>
  )
}

export default TrashDetailsModal