import React, { useState, useEffect } from 'react'
import BreadCrumb from '../../components/BreadCrumb'
import { Grid } from '@mui/material'
import calendaricon from '../../assets/icons/calendar-icon.svg'
import scheduleicon from '../../assets/icons/schedule.svg'
import ImageNameDateId from '../../components/ImageNameDateId'
import trashimage from '../../assets/images/Rectangle 360.svg'
import bookicon from '../../assets/icons/import_contacts.svg'
import FilterSearch from '../../components/FilterSearch'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import TablePagination from '../../components/TablePagination';
import GreenCheckbox from '../../components/GreenCheckbox';
import TableNameTextGrid from '../../components/TableNameTextGrid'
import trash_image from '../../assets/images/Rectangle 378.svg'
import placeholderagentimage from '../../assets/images/Ellipse 110.svg'
import TrashDetailsModal from '../../components/TrashDetailsModal'
import CancellationModal from '../../components/CancellationModal'
import chevronright from '../../assets/icons/chevron_right.svg'
import CalendarComponent from '../../components/CalendarComponent'




const ScheduledRequest = () => {
  const page = 'scheduled-request'
  const section = 'booking-management'
  const[isTrashDetailsModalVisible, setIsTrashDetailsModalVisible] = useState(false)
  const[isCancellationReasonModalVisible, setIsCancellationReasonModalVisible] = useState(false)
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    function setButtonHeight() {
      const buttons = document.querySelectorAll('.react-calendar__tile');
      buttons.forEach((button) => {
        const buttonWidth = button.offsetWidth;
        button.style.height = `${buttonWidth}px`;
      });
    }
    setButtonHeight();

    window.addEventListener('resize', setButtonHeight);

    return () => {
      window.removeEventListener('resize', setButtonHeight);
    };
  }, []);

  return (
    <div className='scheduled-request-div'>
      <BreadCrumb pageData={'Scheduled Request'} sectionData={'Booking Management'}/>

      <p className='page-name-bold-text'>Book Later</p>

      <Grid container spacing={1.5}>
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <div className='white-curve-bordered-div upcoming-request-div'>
            <p className='upcoming-request'>Upcoming Request</p>
            <Grid container spacing={1.5}>
              <Grid item xs={12} sm={5} md={6} lg={6}>
                <img src={trashimage} alt='' className='upcoming-request-trash-image'></img>
              </Grid>
              <Grid item xs={12} sm={7} md={6} lg={6}>
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
                  <button className='button-link'>View</button>
              </Grid>
            </Grid>
          </div>

          <p className='all-upcoming-requests page-name-bold-text'>All Upcoming Requests</p>

          <div className='filtersearch-grid-div listing-body-upper-div'>
            <FilterSearch/>
            <p>Total book later request: 100</p>
          </div>
          <div className='table-outer-div'>
            <div className='table-inner-div'>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ borderRadius: '10px 0px 0px 10px' }}></TableCell>
                      <TableCell>#</TableCell>
                      <TableCell>Name/Date</TableCell>
                      <TableCell>Owner's Location</TableCell>
                      <TableCell>Image</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Agent</TableCell>
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
                        <TableCell>Montee' Jouvence</TableCell>
                        <TableCell>
                          <img src={trash_image} alt='Trash' className='trash-pickup-table-trash-image' />
                        </TableCell>
                        <TableCell>700XAF</TableCell>
                        <TableCell>
                          <div>
                            <div>
                                <div className="images-container">
                                    <div className="scheduled-request-circular-image">
                                      <img src={placeholderagentimage} alt='Agent User Headshot' className='scheduled-request-circular-image'></img>
                                    </div>
                                    <div className="scheduled-request-circular-image">
                                      <img src={placeholderagentimage} alt='Agent User Headshot' className='scheduled-request-circular-image'></img>
                                    </div>
                                    <div className="scheduled-request-circular-image">
                                      <div className='scheduled-request-table-circle-number-div scheduled-request-circular-image'>
                                        <span className='other-agents-plus-number'>+2</span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                            <button className='view-button' onClick={() => setIsTrashDetailsModalVisible(true)}>View</button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <GreenCheckbox/>
                        </TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>
                            <TableNameTextGrid/>
                        </TableCell>
                        <TableCell>Montee' Jouvence</TableCell>
                        <TableCell>
                          <img src={trash_image} alt='Trash' className='trash-pickup-table-trash-image' />
                        </TableCell>
                        <TableCell>700XAF</TableCell>
                        <TableCell>
                          <div>
                            <div>
                              <div className="images-container">
                                <div className="scheduled-request-circular-image">
                                  <img src={placeholderagentimage} alt='Agent User Headshot' className='scheduled-request-circular-image'></img>
                                </div>
                                <div className="scheduled-request-circular-image">
                                  <img src={placeholderagentimage} alt='Agent User Headshot' className='scheduled-request-circular-image'></img>
                                </div>
                                <div className="scheduled-request-circular-image">
                                  <div className='scheduled-request-table-circle-number-div scheduled-request-circular-image'>
                                    <span className='other-agents-plus-number'>+2</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                            <button className='view-button' onClick={() => setIsTrashDetailsModalVisible(true)}>View</button>
                        </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
            </div>
            <TablePagination/>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} className='scheduled-request-side-grid'>
          <div className='white-curve-bordered-div'>
            <p className='upcoming-request'>Upcoming Request</p>

            <CalendarComponent/>

            <div className='upcoming-request-agent-image-name-date-blue-div upcoming-request-blue-div'>
              <ImageNameDateId/>
              <div className='circle-arrow-white-div'>
                <img src={chevronright} alt=''></img>
              </div>
            </div>
            <div className='upcoming-request-agent-image-name-date-blue-div upcoming-request-blue-div'>
              <ImageNameDateId/>
              <div className='circle-arrow-white-div'>
                <img src={chevronright} alt=''></img>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <TrashDetailsModal 
        isTrashDetailsModalVisible={isTrashDetailsModalVisible} 
        setIsTrashDetailsModalVisible={setIsTrashDetailsModalVisible}
        page={page}
        setIsCancellationReasonModalVisible={setIsCancellationReasonModalVisible}
      />

      <CancellationModal 
        isCancellationReasonModalVisible={isCancellationReasonModalVisible}
        setIsCancellationReasonModalVisible={setIsCancellationReasonModalVisible}
      />
    </div>
  )
}

export default ScheduledRequest