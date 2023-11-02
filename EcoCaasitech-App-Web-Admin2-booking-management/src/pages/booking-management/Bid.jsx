import React from 'react'
import './styles.css'
import { Grid } from '@mui/material'
import trashmodalimage from '../../assets/images/Rectangle 360.svg'
import bookicon from '../../assets/icons/import_contacts.svg'
import nayahimage from '../../assets/images/Ellipse 330.png'
import Breadcrumb from '../../components/BreadCrumb'
import { useNavigate } from 'react-router-dom'

const Bid = ({setPage}) => {
  const navigate = useNavigate()
  const page = 'bid'
  const section = 'booking-management'
  return (
    <div className='bid-div'>
      <Breadcrumb page={page} section={section}/>
      <Grid container spacing={1.5}>
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <div className='bid-trash-details-div'>
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
                    </>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <>Yo</>
        </Grid>
      </Grid>
    </div>
  )
}

export default Bid