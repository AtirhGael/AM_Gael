import React, { useState } from 'react'
import BreadCrumb from '../../components/BreadCrumb'
import FilterSearch from '../../components/FilterSearch'
import { Table, TableHead, TableRow, TableCell, TableBody, Grid } from '@mui/material';
import GreenCheckbox from '../../components/GreenCheckbox';
import nayahimage from '../../assets/images/Ellipse 330.png'
import ThreeDotsDropdown from '../../components/ThreeDotsDropdown';
import TablePagination from '../../components/TablePagination';
import TrashDetailsModal from '../../components/TrashDetailsModal';
import TableNameTextGrid from '../../components/TableNameTextGrid';
import calendaricon from '../../assets/icons/calendar-icon.svg'
import locationicon from '../../assets/icons/blue_location_on.svg'
import CancellationModal from '../../components/CancellationModal';


const BookingDetails = () => {
    const page = 'booking-details'
    const section = 'booking-management'
    const[isCancellationReasonModalVisible, setIsCancellationReasonModalVisible] = useState(false)
    const[isTrashDetailsModalVisible, setIsTrashDetailsModalVisible] = useState(false)
    const[isBookNowTabVisible, setIsBookNowTabVisible] = useState(true)

  return (
    <div className='booking-details-div'>
        <BreadCrumb pageData={'Booking Details'} sectionData={'Booking Management'}/>

        {isBookNowTabVisible ?
            <p className='page-name-bold-text'>Completed Bookings</p> :
            <p className='page-name-bold-text'>Cancelled Requests</p>
        }

        <div className='listing-button-tab-div'>
            <button className={isBookNowTabVisible ? 'active' : null} onClick={() => setIsBookNowTabVisible(true)}>Book Now</button>
            <button className={!isBookNowTabVisible ? 'active' : null} onClick={() => setIsBookNowTabVisible(false)}>Book Later</button>
        </div>

        <div className='filtersearch-grid-div listing-body-upper-div'>
            <FilterSearch/>
            {!isBookNowTabVisible ? 
                <p>Total automatic request: 100</p> :
                <div>

                </div>
            }
        </div>

        {!isBookNowTabVisible ? 
            <>
                <div className='table-outer-div'>
                    <div className='table-inner-div'>
                        <Table>
                        <TableHead>
                            <TableRow>
                            <TableCell style={{ borderRadius: '10px 0px 0px 10px' }}></TableCell>
                            <TableCell>#</TableCell>
                            <TableCell>Name/Date</TableCell>
                            <TableCell>Trash Type</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Book Type</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell style={{ borderRadius: '0px 10px 10px 0px' }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <GreenCheckbox/>
                                </TableCell>
                                <TableCell>1</TableCell>
                                <TableCell>
                                    <TableNameTextGrid/>
                                </TableCell>
                                <TableCell>2 buckets</TableCell>
                                <TableCell>
                                    <div className='table-amount-div'>300 XF</div>
                                </TableCell>
                                <TableCell className='table-booking-type now-booking-type'>Now</TableCell>
                                <TableCell>Montee' Jouvence</TableCell>
                                <TableCell>
                                    <ThreeDotsDropdown 
                                        page={`${page}/cancelled-requests`} 
                                        section={section}
                                        setIsCancellationReasonModalVisible={setIsCancellationReasonModalVisible}
                                        setIsTrashDetailsModalVisible={setIsTrashDetailsModalVisible}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <GreenCheckbox/>
                                </TableCell>
                                <TableCell>2</TableCell>
                                <TableCell>
                                    <TableNameTextGrid/>
                                </TableCell>
                                <TableCell>2 buckets</TableCell>
                                <TableCell>
                                    <div className='table-amount-div'>300 XF</div>
                                </TableCell>
                                <TableCell className='table-booking-type later-booking-type'>Later</TableCell>
                                <TableCell>Montee' Jouvence</TableCell>
                                <TableCell>
                                    <ThreeDotsDropdown 
                                        page={`${page}/cancelled-requests`} 
                                        section={section}
                                        setIsCancellationReasonModalVisible={setIsCancellationReasonModalVisible}
                                        setIsTrashDetailsModalVisible={setIsTrashDetailsModalVisible}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        </Table>
                    </div>
                    <TablePagination/>
                </div>

                <CancellationModal 
                    isCancellationReasonModalVisible={isCancellationReasonModalVisible}
                    setIsCancellationReasonModalVisible={setIsCancellationReasonModalVisible}
                />

                <TrashDetailsModal 
                    isTrashDetailsModalVisible={isTrashDetailsModalVisible} 
                    setIsTrashDetailsModalVisible={setIsTrashDetailsModalVisible}
                    ecopointBadgeVisible={true}
                    page={`${page}/cancelled-requests`}
                />
            </>  :
            <>
                <div className='completed-bookings-body-div'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <div className='completed-bookings-card-div'>
                                <div className='completed-bookings-card-inner-grid-div'>
                                    <div className='completed-bookings-card-name-image-grid-div'>
                                        <img src={nayahimage} alt='' className='image-name-date-id-agent-headshot-image'></img>
                                        <p className='image-name-date-id-name-para'>Nayah</p>
                                    </div>
                                    <p className='completed-bookings-card-price'>500 XAF</p>
                                </div>
                                <div className='completed-bookings-card-name-image-grid-div'>
                                    <div className='blue-circle-div'>
                                        <img src={calendaricon} alt='' className='completed-bookings-blue-div-icon'></img>
                                    </div>
                                    <p className='completed-bookings-card-grey-text'>06/16/23  10:00 AM</p>
                                </div>
                                <div className='completed-bookings-card-inner-grid-div'>
                                    <div className='completed-bookings-card-name-image-grid-div'>
                                        <div className='blue-circle-div'>
                                            <img src={locationicon} alt='' className='completed-bookings-blue-div-icon'></img>
                                        </div>
                                        <p className='completed-bookings-card-grey-text'>Montee' Jouvence</p>
                                    </div>
                                    <button className='button-link'>View details</button>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <div className='completed-bookings-card-div'>
                                <div className='completed-bookings-card-inner-grid-div'>
                                    <div className='completed-bookings-card-name-image-grid-div'>
                                        <img src={nayahimage} alt='' className='image-name-date-id-agent-headshot-image'></img>
                                        <p className='image-name-date-id-name-para'>Nayah</p>
                                    </div>
                                    <p className='completed-bookings-card-price'>500 XAF</p>
                                </div>
                                <div className='completed-bookings-card-name-image-grid-div'>
                                    <div className='blue-circle-div'>
                                        <img src={calendaricon} alt='' className='completed-bookings-blue-div-icon'></img>
                                    </div>
                                    <p className='completed-bookings-card-grey-text'>06/16/23  10:00 AM</p>
                                </div>
                                <div className='completed-bookings-card-inner-grid-div'>
                                    <div className='completed-bookings-card-name-image-grid-div'>
                                        <div className='blue-circle-div'>
                                            <img src={locationicon} alt='' className='completed-bookings-blue-div-icon'></img>
                                        </div>
                                        <p className='completed-bookings-card-grey-text'>Montee' Jouvence</p>
                                    </div>
                                    <button className='button-link'>View details</button>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <div className='completed-bookings-card-div'>
                                <div className='completed-bookings-card-inner-grid-div'>
                                    <div className='completed-bookings-card-name-image-grid-div'>
                                        <img src={nayahimage} alt='' className='image-name-date-id-agent-headshot-image'></img>
                                        <p className='image-name-date-id-name-para'>Nayah</p>
                                    </div>
                                    <p className='completed-bookings-card-price'>500 XAF</p>
                                </div>
                                <div className='completed-bookings-card-name-image-grid-div'>
                                    <div className='blue-circle-div'>
                                        <img src={calendaricon} alt='' className='completed-bookings-blue-div-icon'></img>
                                    </div>
                                    <p className='completed-bookings-card-grey-text'>06/16/23  10:00 AM</p>
                                </div>
                                <div className='completed-bookings-card-inner-grid-div'>
                                    <div className='completed-bookings-card-name-image-grid-div'>
                                        <div className='blue-circle-div'>
                                            <img src={locationicon} alt='' className='completed-bookings-blue-div-icon'></img>
                                        </div>
                                        <p className='completed-bookings-card-grey-text'>Montee' Jouvence</p>
                                    </div>
                                    <button className='button-link'>View details</button>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <div className='completed-bookings-card-div'>
                                <div className='completed-bookings-card-inner-grid-div'>
                                    <div className='completed-bookings-card-name-image-grid-div'>
                                        <img src={nayahimage} alt='' className='image-name-date-id-agent-headshot-image'></img>
                                        <p className='image-name-date-id-name-para'>Nayah</p>
                                    </div>
                                    <p className='completed-bookings-card-price'>500 XAF</p>
                                </div>
                                <div className='completed-bookings-card-name-image-grid-div'>
                                    <div className='blue-circle-div'>
                                        <img src={calendaricon} alt='' className='completed-bookings-blue-div-icon'></img>
                                    </div>
                                    <p className='completed-bookings-card-grey-text'>06/16/23  10:00 AM</p>
                                </div>
                                <div className='completed-bookings-card-inner-grid-div'>
                                    <div className='completed-bookings-card-name-image-grid-div'>
                                        <div className='blue-circle-div'>
                                            <img src={locationicon} alt='' className='completed-bookings-blue-div-icon'></img>
                                        </div>
                                        <p className='completed-bookings-card-grey-text'>Montee' Jouvence</p>
                                    </div>
                                    <button className='button-link'>View details</button>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <div className='completed-bookings-card-div'>
                                <div className='completed-bookings-card-inner-grid-div'>
                                    <div className='completed-bookings-card-name-image-grid-div'>
                                        <img src={nayahimage} alt='' className='image-name-date-id-agent-headshot-image'></img>
                                        <p className='image-name-date-id-name-para'>Nayah</p>
                                    </div>
                                    <p className='completed-bookings-card-price'>500 XAF</p>
                                </div>
                                <div className='completed-bookings-card-name-image-grid-div'>
                                    <div className='blue-circle-div'>
                                        <img src={calendaricon} alt='' className='completed-bookings-blue-div-icon'></img>
                                    </div>
                                    <p className='completed-bookings-card-grey-text'>06/16/23  10:00 AM</p>
                                </div>
                                <div className='completed-bookings-card-inner-grid-div'>
                                    <div className='completed-bookings-card-name-image-grid-div'>
                                        <div className='blue-circle-div'>
                                            <img src={locationicon} alt='' className='completed-bookings-blue-div-icon'></img>
                                        </div>
                                        <p className='completed-bookings-card-grey-text'>Montee' Jouvence</p>
                                    </div>
                                    <button className='button-link'>View details</button>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <div className='completed-bookings-card-div'>
                                <div className='completed-bookings-card-inner-grid-div'>
                                    <div className='completed-bookings-card-name-image-grid-div'>
                                        <img src={nayahimage} alt='' className='image-name-date-id-agent-headshot-image'></img>
                                        <p className='image-name-date-id-name-para'>Nayah</p>
                                    </div>
                                    <p className='completed-bookings-card-price'>500 XAF</p>
                                </div>
                                <div className='completed-bookings-card-name-image-grid-div'>
                                    <div className='blue-circle-div'>
                                        <img src={calendaricon} alt='' className='completed-bookings-blue-div-icon'></img>
                                    </div>
                                    <p className='completed-bookings-card-grey-text'>06/16/23  10:00 AM</p>
                                </div>
                                <div className='completed-bookings-card-inner-grid-div'>
                                    <div className='completed-bookings-card-name-image-grid-div'>
                                        <div className='blue-circle-div'>
                                            <img src={locationicon} alt='' className='completed-bookings-blue-div-icon'></img>
                                        </div>
                                        <p className='completed-bookings-card-grey-text'>Montee' Jouvence</p>
                                    </div>
                                    <button className='button-link'>View details</button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </>
        }

    </div>
  )
}

export default BookingDetails