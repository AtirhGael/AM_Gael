import React from 'react'
import './styles.css'
import {Table, Grid, TableHead, TableRow, TableCell, TableBody} from '@mui/material';
import BlueButtonGainLossCard from '../../components/BlueButtonGainLossCard';
import { useNavigate } from 'react-router-dom';
import FilterSearch from '../../components/FilterSearch';
import placeholderuserimage from '../../assets/images/placeholder.svg'
import greenarrowforward from '../../assets/icons/green-arrow_forward.svg'
import TablePagination from '../../components/TablePagination';
import trashimage from '../../assets/images/Rectangle 360.svg'
import calendaricon from '../../assets/icons/calendar-icon.svg'
import scheduleicon from '../../assets/icons/schedule.svg'
import bookicon from '../../assets/icons/import_contacts.svg'
import ImageNameDateId from '../../components/ImageNameDateId';

const BookingManagement = ({setPage}) => {
  const navigate = useNavigate()
  return (
    <div>
      <Grid container spacing={1.5}>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <BlueButtonGainLossCard 
            name={'Total Request'}
            number={'60'}
            status={'gain'}
            percent={'10'}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <BlueButtonGainLossCard 
            name={'Book Now Request'}
            number={'60'}
            status={'loss'}
            percent={'10'}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <BlueButtonGainLossCard 
            name={'Book Later Request'}
            number={'60'}
            status={'gain'}
            percent={'10'}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <button className='stat-card-button' onClick={() => {setPage('/booking-management/booking-details'); navigate('/booking-management/booking-details')}}>
            <BlueButtonGainLossCard 
              name={'Cancelled Request'}
              number={'60'}
              status={'loss'}
              percent={'10'}
            />
          </button>
        </Grid>
      </Grid>

      <Grid container spacing={1.5} className='booking-management-incoming-bidding-main-grid'>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={5} md={5} lg={5} container spacing={2} className='blue-button-side-grid'>
              <Grid item xs={6} sm={12} md={12} lg={12}>
                <BlueButtonGainLossCard
                  name={'Automatic Request'}
                  number={'60'}
                  status={'loss'}
                  percent={'10'}
                />
              </Grid>
              <Grid item xs={6} sm={12} md={12} lg={12}>
                <BlueButtonGainLossCard
                  name={'Av Wait Time'}
                  number={'60'}
                  status={'loss'}
                  percent={'10'}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={7} md={7} lg={7}>
              <div className='booking-management-incoming-bidding-div'>
                <p>Incoming Bidding</p>
                <div className='incoming-bidding-each-agent-div'>
                  <p>1</p>
                  <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image' />
                  <p className='incoming-bidding-each-agent-info-paragraph'><span>Nayah</span> placed 500frs on your bid</p>
                  <img src={greenarrowforward} alt='' className='green-arrow-forward'></img>
                </div>
                <div className='incoming-bidding-each-agent-div'>
                  <p>2</p>
                  <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image' />
                  <p className='incoming-bidding-each-agent-info-paragraph'><span>Nayah</span> placed 500frs on your bid</p>
                  <img src={greenarrowforward} alt='' className='green-arrow-forward'></img>
                </div>
                <div className='incoming-bidding-each-agent-div'>
                  <p>3</p>
                  <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image' />
                  <p className='incoming-bidding-each-agent-info-paragraph'><span>Nayah</span> placed 500frs on your bid</p>
                  <img src={greenarrowforward} alt='' className='green-arrow-forward'></img>
                </div>
                <button className='bidding-dashboard-link' onClick={() => {setPage('/booking-management/bidding-dashboard'); navigate('/booking-management/bidding-dashboard')}}>Bidding Dashboard</button>
              </div>
            </Grid>
          </Grid>

          <div className='booking-management-unassigned-request-div'>
            <p className='unassigned-request page-name-bold-text'>Unassigned Request</p>
            <div className='booking-management-unassigned-request-grid-div'>
              <FilterSearch/>
              <button onClick={() => {setPage('/booking-management/incoming-request-listing'); navigate('/booking-management/incoming-request-listing')}} className='booking-management-unassigned-request-see-all-button'>See All</button>
            </div>
            
            <div className='table-outer-div'>
              <div className='table-inner-div'>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ borderRadius: '10px 0px 0px 10px' }}></TableCell>
                      <TableCell>Name/Date</TableCell>
                      <TableCell>Trash Type</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Book Type</TableCell>
                      <TableCell style={{ borderRadius: '0px 10px 10px 0px' }}>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>
                        <img src={placeholderuserimage} alt='' className='table-user-image' />
                      </TableCell>
                      <TableCell>2 buckets</TableCell>
                      <TableCell>
                        <div className='table-amount-div'>300 XF</div>
                      </TableCell>
                      <TableCell className='table-booking-type now-booking-type'>Now</TableCell>
                      <TableCell>
                        <button className='booking-management-unassigned-request-table-view-button'>View</button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>
                        <img src={placeholderuserimage} alt='' className='table-user-image' />
                      </TableCell>
                      <TableCell>2 buckets</TableCell>
                      <TableCell>
                        <div className='table-amount-div'>300 XF</div>
                      </TableCell>
                      <TableCell className='table-booking-type now-booking-type'>Now</TableCell>
                      <TableCell>
                        <button className='booking-management-unassigned-request-table-view-button'>View</button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <TablePagination/>
            </div>

          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className='booking-management-upcoming-request-div'>
            <p className='upcoming-request'>Upcoming Request</p>
            <Grid container spacing={1.5} className='booking-management-upcoming-request-main-grid-div'>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <img src={trashimage} alt='' className='upcoming-request-trash-image'></img>
              </Grid>
              <Grid item xs={8} sm={8} md={8} lg={8}>
                <div className='booking-management-upcoming-request-upper-inner-grid-div'>
                  <ImageNameDateId/>
                  <div className='booking-management-upcoming-request-booking-type-div'>
                    <div className='booking-management-upcoming-request-booking-type-book-icon-div'>
                      <img src={bookicon} alt='Book Icon' className='booking-management-upcoming-request-booking-type-book-icon'></img>
                    </div>
                    <div>
                      <p className='booking-management-upcoming-request-booking-type-para'>Booking Type</p>
                      <p className='booking-management-upcoming-request-book-later-para'>Book Later</p>
                    </div>
                  </div>
                </div>
                <div className='booking-management-upcoming-request-blue-div'>
                  <div className='booking-management-upcoming-request-bottom-inner-grid-div'>
                    <div className='booking-management-upcoming-request-bottom-inner-date-grid-div'>
                      <div className='booking-management-upcoming-request-bottom-inner-date-white-div'>
                        <img src={calendaricon} alt='' className='booking-management-upcoming-request-calendar-icon'></img>
                      </div>
                      <span>07/20/2023</span>
                    </div>
                    <div className='booking-management-upcoming-request-bottom-inner-time-grid-div'>
                      <div className='booking-management-upcoming-request-bottom-inner-date-white-div'>
                        <img src={scheduleicon} alt='' className='booking-management-upcoming-request-schedule-icon'></img>
                      </div>
                      <span>12:48 AM</span>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>

          <div className='booking-management-ongoing-request-div'>
            <p>Ongoing Request</p>
          </div>
        </Grid>
      </Grid>

    </div>
  )
}

export default BookingManagement