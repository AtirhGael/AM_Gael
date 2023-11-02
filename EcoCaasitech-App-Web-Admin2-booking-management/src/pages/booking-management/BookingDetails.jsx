import React, {useState} from 'react'
import BreadCrumb from '../../components/BreadCrumb'
import FilterSearch from '../../components/FilterSearch'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import GreenCheckbox from '../../components/GreenCheckbox';
import nayahimage from '../../assets/images/Ellipse 330.png'
import ThreeDotsDropdown from '../../components/ThreeDotsDropdown';
import TablePagination from '../../components/TablePagination';
import cancellationimage from '../../assets/images/news (10) 1.svg'
import ModalLayout from '../../components/ModalLayout';

const BookingDetails = () => {
    const page = 'booking-details'
    const section = 'booking-management'
    const[isCancellationReasonModalVisible, setIsCancellationReasonModalVisible] = useState(false)
  return (
    <div className='booking-details-div'>
        <BreadCrumb page={page} section={section}/>

        <p className='page-name-bold-text'>Cancelled Requests</p>

        <div className='listing-button-tab-div'>
            <button>Book Now</button>
            <button className='active'>Book Later</button>
        </div>

        <div className='booking-details-filtersearch-grid-div listing-body-upper-div'>
            <FilterSearch/>
            <p>Total automatic request: 100</p>
        </div>

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
                            <img src={nayahimage} alt='' className='table-user-image' />
                        </TableCell>
                        <TableCell>2 buckets</TableCell>
                        <TableCell>
                            <div className='table-amount-div'>300 XF</div>
                        </TableCell>
                        <TableCell className='table-booking-type now-booking-type'>Now</TableCell>
                        <TableCell>Montee' Jouvence</TableCell>
                        <TableCell>
                            <ThreeDotsDropdown 
                                page={'booking-details/cancelled-requests'} 
                                section={section}
                                setIsCancellationReasonModalVisible={setIsCancellationReasonModalVisible}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <GreenCheckbox/>
                        </TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>
                            <img src={nayahimage} alt='' className='table-user-image' />
                        </TableCell>
                        <TableCell>2 buckets</TableCell>
                        <TableCell>
                            <div className='table-amount-div'>300 XF</div>
                        </TableCell>
                        <TableCell className='table-booking-type later-booking-type'>Later</TableCell>
                        <TableCell>Montee' Jouvence</TableCell>
                        <TableCell>
                            <ThreeDotsDropdown 
                                page={'booking-details/cancelled-requests'} 
                                section={section}
                                setIsCancellationReasonModalVisible={setIsCancellationReasonModalVisible}
                            />
                        </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
            </div>
            <TablePagination/>
        </div>

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
                        <p>Admin in charge of the canceled request</p>
                        <div className='cancellation-modal-footer-grid-div'>
                            <img src={nayahimage} alt='' className='table-user-image' />
                            <span>Caspa Clinton</span>
                        </div>
                    </div>
                </>
            }
        />

    </div>
  )
}

export default BookingDetails