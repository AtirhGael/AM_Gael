import React, {useState} from 'react'
import './styles.css'
import {Grid} from '@mui/material';
import BlueButtonGainLossCard from '../../components/BlueButtonGainLossCard';
import { useNavigate } from 'react-router-dom';
import FilterSearch from '../../components/FilterSearch';
import placeholderuserimage from '../../assets/images/placeholder.svg'
import greenarrowforward from '../../assets/icons/green-arrow_forward.svg'
import trashimage from '../../assets/images/Rectangle 360.svg'
import calendaricon from '../../assets/icons/calendar-icon.svg'
import scheduleicon from '../../assets/icons/schedule.svg'
import bookicon from '../../assets/icons/import_contacts.svg'
import ImageNameDateId from '../../components/ImageNameDateId';
import placeholderagentimage from '../../assets/images/Ellipse 110.svg'
import onthewaygreencircle from '../../assets/images/Ellipse 385.svg'
import TableNameTextGrid from '../../components/TableNameTextGrid';
import formatDate from '../../hooks/formatDate'
import { connect } from 'react-redux';
import TableLayout from '../../components/TableLayout';
import GreenCheckbox from '../../components/GreenCheckbox';
import TrashDetailsModal from '../../components/TrashDetailsModal';
import ModalLayout from '../../components/ModalLayout';
import cancellationimage from '../../assets/images/news (10) 1.svg'



const BookingManagement = ({setPage, allBookingMgtMetrics, allUnassignedRequests, allAutomaticRequests}) => {
  const page = 'booking-management'
  const section = 'booking-management'
  const navigate = useNavigate()
  const[isTrashDetailsModalVisible, setIsTrashDetailsModalVisible] = useState(false)
  const[isSelectAssignModalVisible, setIsSelectAssignModalVisible] = useState(false)
  const[isRequestAssignedModalVisible, setIsRequestAssignedModalVisible] = useState(false)
  const[isCancellationReasonModalVisible, setIsCancellationReasonModalVisible] = useState(false)
  
  return (
    <div className='booking-management-div'>
      <Grid container spacing={1} className='booking-management-stats-upper-div'>
        <Grid item xs={6} sm={6} md={3} lg={3} className='booking-management-stat-card-col'>
          <button className='stat-card-button'>
            <BlueButtonGainLossCard 
              name={'Total Request'}
              number={`${(Object.keys(allBookingMgtMetrics).length > 0) ? allBookingMgtMetrics.metrics.totalRequests : 0}`}
              status={'gain'}
              percent={'10'}
              page={page}
            />
          </button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} className='booking-management-stat-card-col'>
          <button className='stat-card-button'>
            <BlueButtonGainLossCard 
              name={'Book Now Request'}
              number={`${(Object.keys(allBookingMgtMetrics).length > 0) ? allBookingMgtMetrics.metrics.totalbookNow : 0}`}
              status={'loss'}
              percent={'10'}
              page={page}
            />
          </button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} className='booking-management-stat-card-col'>
          <button className='stat-card-button'>
            <BlueButtonGainLossCard 
              name={'Book Later Request'}
              number={`${(Object.keys(allBookingMgtMetrics).length > 0) ? allBookingMgtMetrics.metrics.totalBookLater : 0}`}
              status={'gain'}
              percent={'10'}
              page={page}
            />
          </button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} className='booking-management-stat-card-col'>
          <button className='stat-card-button' onClick={() => {setPage('/booking-management/booking-details'); navigate('/booking-management/booking-details')}}>
            <BlueButtonGainLossCard 
              name={'Cancelled Request'}
              number={`${(Object.keys(allBookingMgtMetrics).length > 0) ? allBookingMgtMetrics.metrics.totalCancelled: 0}`}
              status={'loss'}
              percent={'10'}
              page={page}
            />
          </button>
        </Grid>
      </Grid>

      <Grid container spacing={1.5} className='booking-management-incoming-bidding-main-grid'>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={5} md={5} lg={5} container spacing={2} className='blue-button-side-grid'>
              <Grid item xs={6} sm={12} md={12} lg={12} className='booking-management-stat-card-col'>
                <button className='stat-card-button' onClick={() => {setPage('/booking-management/listing'); navigate('/booking-management/listing')}}>
                  <BlueButtonGainLossCard
                    name={'Automatic Request'}
                    number={`${(Object.keys(allAutomaticRequests).length > 0) ? allAutomaticRequests.totalAutomaticRequest : 0}`}
                    status={'loss'}
                    percent={'10'}
                    page={page}
                  />
                </button>
              </Grid>
              <Grid item xs={6} sm={12} md={12} lg={12} className='booking-management-stat-card-col'>
                <button className='stat-card-button'>
                  <BlueButtonGainLossCard
                    name={'Av Wait Time'}
                    number={'60'}
                    status={'loss'}
                    percent={'10'}
                    page={page}
                  />
                </button>
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
                <button className='button-link' onClick={() => {setPage('/booking-management/bidding-dashboard'); navigate('/booking-management/bidding-dashboard')}}>Bidding Dashboard</button>
              </div>
            </Grid>
          </Grid>

          <div className='booking-management-unassigned-request-div'>
            <p className='unassigned-request page-name-bold-text'>Unassigned Request</p>
            <div className='booking-management-unassigned-request-grid-div'>
              <FilterSearch/>
              <button onClick={() => {setPage('/booking-management/incoming-request-listing'); navigate('/booking-management/incoming-request-listing')}} className='booking-management-unassigned-request-see-all-button'>See All</button>
            </div>

            <TableLayout
              headData={['', '#', 'Name/Date', 'Trash Type', 'Amount', 'Book Type', 'Action']}
              bodyData={
                Object.keys(allUnassignedRequests).length > 0 ?
                  allUnassignedRequests.data.map((object, index) => [
                    <GreenCheckbox/>,
                    (index + 1),
                    <TableNameTextGrid name={object.first_name} date={formatDate(object.booking_start_at)}/>,
                    <>{object.trash_items.quantity} {object.trash_items.category}{(object.trash_items.quantity > 1) ? 's' : null}</>,
                    <div className='table-amount-div'>{object.final_price} XF</div>,
                    <div className={`table-booking-type ${(object.booking_type === "now") ? 'now-booking-type' : null}`}>{object.booking_type}</div>,
                    <button className='view-button' onClick={() => setIsTrashDetailsModalVisible(true)}>View</button>
                  ]) :
                  []
              }
              dataObject={allUnassignedRequests}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className='booking-management-upcoming-request-div'>
            <p className='upcoming-request'>Upcoming Request</p>
            <Grid container spacing={1.5} className='booking-management-upcoming-request-main-grid-div'>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <img src={trashimage} alt='' className='upcoming-request-trash-image'></img>
              </Grid>
              <Grid item xs={12} sm={8} md={8} lg={8}>
                <div className='booking-management-upcoming-request-upper-inner-grid-div'>
                  <ImageNameDateId/>
                  <div className='booking-management-upcoming-request-booking-type-div'>
                    <div className='booking-management-upcoming-request-booking-type-book-icon-div'>
                      <img src={bookicon} alt='Book Icon' className='booking-management-upcoming-request-booking-type-book-icon'></img>
                    </div>
                    <div>
                      <p className='booking-type-paragraph'>Booking Type</p>
                      <p className='booking-management-upcoming-request-book-later-para'>Book Later</p>
                    </div>
                  </div>
                </div>
                <div className='booking-management-upcoming-request-blue-div upcoming-request-blue-div'>
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
            <button className='button-link' onClick={() => {setPage('/booking-management/scheduled-request'); navigate('/booking-management/scheduled-request')}}>View All</button>
          </div>

          <div className='booking-management-ongoing-request-div'>
            <p>Ongoing Request</p>

            <div className='booking-management-outgoing-request-grid-div'>
              <div className='booking-management-outgoing-request-agent-grid-div'>
                <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                <div>
                  <p className='active-agent-name'>John Peterson</p>
                  <p className='active-agent-badge-id'>Badge ID: CTA11234</p>
                </div>
              </div>
              <div className='active-agent-status-grid-div'>
                <span className='active-agent-status-span'>ON THE WAY</span>
                <img src={onthewaygreencircle} alt='On the way green circle' className='on-the-way-green-circle'></img>
              </div>
              <img src={greenarrowforward} alt='' className='green-arrow-forward'></img>
            </div>
            <div className='booking-management-outgoing-request-grid-div'>
              <div className='booking-management-outgoing-request-agent-grid-div'>
                <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                <div>
                  <p className='active-agent-name'>John Peterson</p>
                  <p className='active-agent-badge-id'>Badge ID: CTA11234</p>
                </div>
              </div>
              <div className='active-agent-status-grid-div'>
                <span className='active-agent-status-span'>ON THE WAY</span>
                <img src={onthewaygreencircle} alt='On the way green circle' className='on-the-way-green-circle'></img>
              </div>
              <img src={greenarrowforward} alt='' className='green-arrow-forward'></img>
            </div>
            <div className='booking-management-outgoing-request-grid-div'>
              <div className='booking-management-outgoing-request-agent-grid-div'>
                <img src={placeholderagentimage} alt='Agent User Headshot' className='active-agent-user-image'></img>
                <div>
                  <p className='active-agent-name'>John Peterson</p>
                  <p className='active-agent-badge-id'>Badge ID: CTA11234</p>
                </div>
              </div>
              <div className='active-agent-status-grid-div'>
                <span className='active-agent-status-span'>ON THE WAY</span>
                <img src={onthewaygreencircle} alt='On the way green circle' className='on-the-way-green-circle'></img>
              </div>
              <img src={greenarrowforward} alt='' className='green-arrow-forward'></img>
            </div>
            <button className='button-link'>View All</button>
          </div>
        </Grid>
      </Grid>

      <TrashDetailsModal
        page={page}
        isTrashDetailsModalVisible={isTrashDetailsModalVisible}
        setIsTrashDetailsModalVisible={setIsTrashDetailsModalVisible}
        setIsSelectAssignModalVisible={setIsSelectAssignModalVisible}
        setIsCancellationReasonModalVisible={setIsCancellationReasonModalVisible}
      />

      <ModalLayout 
            size={'small'} 
            state={isSelectAssignModalVisible} 
            stateFunction={setIsSelectAssignModalVisible}
            content = {
                <>
                    <p className='modal-heading-para select-assign-type-modal-heading'>Select assign type</p>
                    <button className='select-assign-type-modal-button green-button-white-text' onClick={() => {setPage('/agent-management/find-assign-agent'); navigate('/agent-management/find-assign-agent')}}>Assign Manually</button>
                    <button className='select-assign-type-modal-button assign-automatically' onClick={() => {setIsSelectAssignModalVisible(false); setIsRequestAssignedModalVisible(true)}}>Assign Automatically</button>
                </>
            }
        />

        <ModalLayout
            size={'small'}
            state={isRequestAssignedModalVisible} 
            stateFunction={setIsRequestAssignedModalVisible}
            content={
                <>
                    <div className='request-assigned-modal-div'>
                        <img src={placeholderagentimage} alt='' style={{height: '60px', width: '60px'}}></img>
                        <p>This request has been assigned to John</p>
                    </div>
                </>
            }
        />

        <ModalLayout
          size={'medium'}
          state={isCancellationReasonModalVisible}
          stateFunction={setIsCancellationReasonModalVisible}
          content={
                <>
                    <div className='action-modal-div'>
                        <img src={cancellationimage} alt='' className='cancellation-modal-image'></img>
                        <p>Cancellation Reason</p>
                        <input placeholder='Enter reasons for canceling this request' type='text' className='cancellation-modal-input'></input>
                    </div>
                    <div className='cancellation-modal-button-div'>
                        <button className='cancellation-modal-submit-button'>Submit</button>
                        <button className='cancellation-modal-cancel-button' onClick={() => setIsCancellationReasonModalVisible(false)}>Cancel</button>
                    </div>
                </>
          }
        />
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    allBookingMgtMetrics: state.allBookingMgtMetrics, 
    allUnassignedRequests: state.allUnassignedRequests, 
    allAutomaticRequests: state.allAutomaticRequests
  }
}

export default connect(mapStateToProps)(BookingManagement)