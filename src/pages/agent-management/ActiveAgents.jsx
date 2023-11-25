import React from 'react'
import './styles.css'
import BreadCrumb from '../../components/BreadCrumb'
import rectanglemap from '../../assets/images/Rectangle-Map.svg'
import nayahimage from '../../assets/images/Ellipse 330.png'
import bookicon from '../../assets/icons/import_contacts.svg'
import searchicon from '../../assets/icons/search.svg'
import filtericon from '../../assets/icons/filter_list.svg'
import trashimage from '../../assets/images/Rectangle 360.svg'
import placeholderagentimage from '../../assets/images/Ellipse 110.svg'
import onthewaygreencircle from '../../assets/images/Ellipse 385.svg'
import { Grid } from '@mui/material'


const ActiveAgents = () => {
    const page = 'active-agents'
    const section = 'agent-management'
  return (
    <div>
        <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={9} className='active-agents-main-col'>
                <BreadCrumb pageData={'Active Agents'} sectionData={'Agent Management'}/>

                <img src={rectanglemap} alt='Map' className='map'></img>

                <div className='active-agents-trash-details-upper-grid-div'>
                    <div>
                        <p className='active-agents-trash-details-property-paragraph'>Distance</p>
                        <p className='active-agents-trash-details-value-paragraph'>20 km</p>
                    </div>
                    <div>
                        <p className='active-agents-trash-details-property-paragraph'>Estimated Time</p>
                        <p className='active-agents-trash-details-value-paragraph'>30 mins</p>
                    </div>
                    <div>
                        <p className='active-agents-trash-details-property-paragraph'>Trash Volume</p>
                        <p className='active-agents-trash-details-value-paragraph'>25L</p>
                    </div>
                </div>

                <div className='active-agent-info-div'>
                    <div className='active-agent-info-grid-div'>
                        <div>
                            <img src={nayahimage} alt='Active Agent Headshot' className='active-agent-headshot-image'></img>
                        </div>
                        <div>
                            <p className='active-agent-name-paragraph'>Nayah</p>
                            <p className='active-agent-id-paragraph'>ID: TO1234567</p>
                        </div>
                    </div>
                    <div className='active-agent-div-inner-left-div'>
                        <div className='active-agent-details-book-icon-div'>
                            <img src={bookicon} alt='Book Icon' className='active-agent-details-book-icon'></img>
                        </div>
                        <div>
                            <p className='booking-type-paragraph'>Booking Type</p>
                            <p className='active-agent-type-paragraph'>Book later</p>
                            <p className='active-agent-status-paragraph manual-request'>Manual Request</p>
                        </div>
                    </div>
                </div>

                <div className='active-agent-trash-pickup-details-grid-div'>
                    <div>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <div>
                                    <p>Pickup Location</p>
                                    <div className='active-agent-trash-pickup-details-value-div'>
                                        <p>Jouvence</p>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <div>
                                    <p>Date</p>
                                    <div className='active-agent-trash-pickup-details-value-div'>
                                        <p>08/11/2023</p>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <div>
                                    <p>Amount</p>
                                    <div className='active-agent-trash-pickup-details-value-div'>
                                        <p>500XAF</p>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <div>
                                    <p>Time</p>
                                    <div className='active-agent-trash-pickup-details-value-div'>
                                        <p>10:00AM</p>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <div>
                                    <p>Trash Quantity</p>
                                    <div className='active-agent-trash-pickup-details-value-div'>
                                        <p>3 Bags</p>
                                    </div>
                                </div>
                            </Grid>                            
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <div>
                                    <p>Past Request Made</p>
                                    <div className='active-agent-trash-pickup-details-value-div'>
                                        <p>2</p>
                                    </div>
                                </div>
                            </Grid>
                        </Grid> 
                    </div>
                    <div>
                        <p>Trash Image</p>
                        <img src={trashimage} alt='Trash' className='active-agent-trash-pickup-details-trash-image'></img>
                    </div>
                </div>

                <div className='active-agent-in-charge-div'>
                    <p>Agent(s) in charge</p>
                    <div className='agents-in-charge-grid-div'>
                        <div className='agent-in-charge-images-div'>
                            <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                            <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                            <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                            <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                        </div>
                        <button className='reassign-agents-button'>Reassign Agent(s)</button>
                        <button className='cancel-request-button'>Cancel Request</button>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3} className='active-agents-side-col' >
                <div className='total-active-agents-div'>
                    <p>Total Active Agents <span>(50)</span></p>
                </div>
                <div className='total-active-agents-grid-div'>
                    <button className='listing-filter-button'>
                        <img src={filtericon} alt='Filter Icon' className='listing-filter-icon'></img>
                        <span>Filter</span>
                    </button>
                    <div className='total-active-agents-search-div'>
                        <input placeholder='Search here' className='total-active-agents-search-input'></input>
                        <button className='total-active-agents-search-icon-button'>
                            <img src={searchicon} alt='Search Icon' className='total-active-agents-search-icon'></img>
                        </button>
                    </div>
                </div>
                <div className='active-agents-grid-div'>
                    <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                    <div>
                        <p className='active-agent-name'>John Peterson</p>
                        <p className='active-agent-badge-id'>Badge ID: CTA11234</p>
                    </div>
                    <div className='active-agent-status-grid-div'>
                        <span className='active-agent-status-span'>ON THE WAY</span>
                        <img src={onthewaygreencircle} alt='On the way green circle' className='on-the-way-green-circle'></img>
                    </div>
                </div>
                <div className='active-agents-grid-div'>
                    <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                    <div>
                        <p className='active-agent-name'>John Peterson</p>
                        <p className='active-agent-badge-id'>Badge ID: CTA11234</p>
                    </div>
                    <div className='active-agent-status-grid-div'>
                        <span className='active-agent-status-span'>ON THE WAY</span>
                        <img src={onthewaygreencircle} alt='On the way green circle' className='on-the-way-green-circle'></img>
                    </div>
                </div>
                <div className='active-agents-grid-div'>
                    <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                    <div>
                        <p className='active-agent-name'>John Peterson</p>
                        <p className='active-agent-badge-id'>Badge ID: CTA11234</p>
                    </div>
                    <div className='active-agent-status-grid-div'>
                        <span className='active-agent-status-span'>ON THE WAY</span>
                        <img src={onthewaygreencircle} alt='On the way green circle' className='on-the-way-green-circle'></img>
                    </div>
                </div>
                <div className='active-agents-grid-div'>
                    <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                    <div>
                        <p className='active-agent-name'>John Peterson</p>
                        <p className='active-agent-badge-id'>Badge ID: CTA11234</p>
                    </div>
                    <div className='active-agent-status-grid-div'>
                        <span className='active-agent-status-span'>ON THE WAY</span>
                        <img src={onthewaygreencircle} alt='On the way green circle' className='on-the-way-green-circle'></img>
                    </div>
                </div>
                <div className='active-agents-grid-div'>
                    <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                    <div>
                        <p className='active-agent-name'>John Peterson</p>
                        <p className='active-agent-badge-id'>Badge ID: CTA11234</p>
                    </div>
                    <div className='active-agent-status-grid-div'>
                        <span className='active-agent-status-span'>ON THE WAY</span>
                        <img src={onthewaygreencircle} alt='On the way green circle' className='on-the-way-green-circle'></img>
                    </div>
                </div>
                <div className='active-agents-grid-div'>
                    <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                    <div>
                        <p className='active-agent-name'>John Peterson</p>
                        <p className='active-agent-badge-id'>Badge ID: CTA11234</p>
                    </div>
                    <div className='active-agent-status-grid-div'>
                        <span className='active-agent-status-span'>ON THE WAY</span>
                        <img src={onthewaygreencircle} alt='On the way green circle' className='on-the-way-green-circle'></img>
                    </div>
                </div>
                <div className='active-agents-grid-div'>
                    <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                    <div>
                        <p className='active-agent-name'>John Peterson</p>
                        <p className='active-agent-badge-id'>Badge ID: CTA11234</p>
                    </div>
                    <div className='active-agent-status-grid-div'>
                        <span className='active-agent-status-span'>ON THE WAY</span>
                        <img src={onthewaygreencircle} alt='On the way green circle' className='on-the-way-green-circle'></img>
                    </div>
                </div>
                <div className='active-agents-grid-div'>
                    <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                    <div>
                        <p className='active-agent-name'>John Peterson</p>
                        <p className='active-agent-badge-id'>Badge ID: CTA11234</p>
                    </div>
                    <div className='active-agent-status-grid-div'>
                        <span className='active-agent-status-span'>ON THE WAY</span>
                        <img src={onthewaygreencircle} alt='On the way green circle' className='on-the-way-green-circle'></img>
                    </div>
                </div>
                <button className='active-agent-see-more-button'>See more</button>
            </Grid>
        </Grid>
    </div>
  )
}

export default ActiveAgents