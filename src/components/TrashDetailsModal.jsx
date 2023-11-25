import React from 'react'
import ModalLayout from './ModalLayout'
import trashmodalimage from '../assets/images/Rectangle 360.svg'
import bookicon from '../assets/icons/import_contacts.svg'
import nayahimage from '../assets/images/Ellipse 330.png'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import placeholderagentimage from '../assets/images/Ellipse 110.svg'
import EcopointLevelBadge from './EcopointLevelBadge'


const TrashDetailsModal = ({page, isTrashDetailsModalVisible, setIsTrashDetailsModalVisible, setIsSelectAssignModalVisible, setIsCancellationReasonModalVisible, ecopointBadgeVisible, trashDetailsModalStatusParagraphVisible}) => {
    const navigate = useNavigate()
  return (
    <>
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
                                    <p className='booking-type-paragraph'>Booking Type</p>
                                    <p className='trash-pickup-modal-type-paragraph'>Book later</p>
                                    {trashDetailsModalStatusParagraphVisible ?
                                        <p className='trash-pickup-modal-status-paragraph upcoming'>Upcoming</p> :
                                        null
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='trash-pickup-agent-info-modal-middle-div'>
                            <img src={trashmodalimage} alt='Trash' className='trash-modal-image'></img>
                            <div className='trash-pickup-agent-info-text-div'>
                                {ecopointBadgeVisible ?
                                    <Grid container spacing={2}>
                                        <Grid item xs={5} sm={6} md={6} lg={5}>
                                            <p className='request-id-paragraph'>Request ID</p>
                                            <p className='request-id'>TPU012289468</p>
                                        </Grid>
                                        <Grid item xs={7} sm={6} md={6} lg={7}>
                                            <EcopointLevelBadge/>
                                        </Grid>
                                    </Grid> :
                                    <>
                                        <p className='request-id-paragraph'>Request ID</p>
                                        <p className='request-id'>TPU012289468</p>
                                    </>
                                }
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
                                    {(page === 'booking-details/cancelled-requests') ? 
                                        <Grid item xs={6} sm={6} md={6} lg={6}>
                                            <p className='trash-pickup-agent-details-type-para'>Date/Time cancelled</p>
                                            <p className='trash-pickup-agent-details-text-para'>16/08/23   10:10 am</p>
                                        </Grid> :
                                        null
                                    }
                                </Grid>        
                            </div>
                        </div>
                        {(page === 'agent-profile') ?
                            <button className='trash-pickup-agent-info-modal-reassign-button'>Reassign</button> :
                            (page === 'incoming-request-listing' || page === 'listing/automatic-requests' || page === 'booking-management') ? 
                                <div className='trash-modal-button-div'>
                                    <button className='trash-modal-assign-request-button incoming-request-listing-div-trash-modal-assign-request-button' onClick={() => {setIsTrashDetailsModalVisible(false); setIsSelectAssignModalVisible(true)}}>Assign Request</button>
                                    <button className='trash-modal-bid-button' onClick={() => navigate('/booking-management/bid')}>Bid</button>
                                    <button className='trash-modal-cancel-request-button' onClick={() => {setIsTrashDetailsModalVisible(false); setIsCancellationReasonModalVisible(true)}}>Cancel Request</button>
                                </div> :
                                (page === 'booking-details/cancelled-requests') ?
                                    <div className='cancelled-request-trash-details-modal-footer-div trash-details-modal-footer-div'>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                                <p>Agent(s) in charge</p>
                                                <div className='agent-in-charge-images-div'>
                                                    <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                                                    <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                                                    <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                                                    <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                                <div>
                                                    <p className='admin-in-charge-of-the-cancelled-request-paragraph'>Admin in charge of the canceled request</p>
                                                    <div className='cancellation-modal-footer-grid-div'>
                                                        <img src={nayahimage} alt='' className='table-user-image' />
                                                        <span className='admin-in-charge-of-the-cancelled-request-name'>Caspa Clinton</span>
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div> :
                                    (page === 'all-past-bookings') ?
                                        <div className='all-past-bookings-trash-details-modal-footer-div trash-details-modal-footer-div'>
                                            <Grid container spacing={2}>
                                                <Grid item xs={7} sm={7} md={6} lg={6}>
                                                    <p>Agent(s) in charge</p>
                                                    <div className='agent-in-charge-images-div'>
                                                        <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                                                        <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                                                        <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                                                        <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={5} sm={5} md={6} lg={6}>
                                                    <div>
                                                        <button className='trash-modal-delete-booking-button'>Delete Booking</button>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div> :
                                        (page === 'scheduled-request') ?
                                            <div className='scheduled-request-trash-details-modal-footer-div trash-details-modal-footer-div'>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={7} sm={7} md={6} lg={6}>
                                                        <p>Agent(s) in charge</p>
                                                        <div className='agent-in-charge-images-div'>
                                                            <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                                                            <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                                                            <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                                                            <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={5} sm={5} md={6} lg={6}>
                                                        <div>
                                                            <button className='reassign-agents-button'>Reassign Agent(s)</button>
                                                            <button className='trash-modal-cancel-request-button' onClick={() => {setIsTrashDetailsModalVisible(false); setIsCancellationReasonModalVisible(true)}}>Cancel Request</button>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </div> :
                        null //other page specific footers goes here
                        }
                    </>
                }
            />
    </>
  )
}

export default TrashDetailsModal