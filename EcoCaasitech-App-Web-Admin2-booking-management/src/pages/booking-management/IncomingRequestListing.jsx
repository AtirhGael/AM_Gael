import React, {useState} from 'react'
import './styles.css'
import FilterSearch from '../../components/FilterSearch'
import BreadCrumb from '../../components/BreadCrumb'
import ModalLayout from '../../components/ModalLayout'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import nayahimage from '../../assets/images/Ellipse 330.png'
import TablePagination from '../../components/TablePagination';
import GreenCheckbox from '../../components/GreenCheckbox';
import ThreeDotsDropdown from '../../components/ThreeDotsDropdown';
import placeholderagentimage from '../../assets/images/Ellipse 110.svg'
import TrashDetailsModal from '../../components/TrashDetailsModal';
import { useNavigate } from 'react-router-dom';
import cancellationimage from '../../assets/images/news (10) 1.svg'


const IncomingRequestListing = ({setPage}) => {
    const navigate = useNavigate()
    const page = 'incoming-request-listing'
    const section = 'booking-management'
    const[isSelectAssignModalVisible, setIsSelectAssignModalVisible] = useState(false)
    const[isRequestAssignedModalVisible, setIsRequestAssignedModalVisible] = useState(false)
    const[isTrashDetailsModalVisible, setIsTrashDetailsModalVisible] = useState(false)
    const[isCancellationReasonModalVisible, setIsCancellationReasonModalVisible] = useState(false)

  return (
    <div className='incoming-request-listing-div'>
        <BreadCrumb page={page} section={section}/>

        <p className='page-name-bold-text'>Unassigned Request</p>

        <FilterSearch/>

        <div className='table-outer-div'>
            <div className='table-inner-div'>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ borderRadius: '10px 0px 0px 10px' }}></TableCell>
                      <TableCell>#</TableCell>
                      <TableCell>Name/Date</TableCell>
                      <TableCell>Trash Type</TableCell>
                      <TableCell>Amount</TableCell>
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
                                page={page} 
                                section={section}
                                setIsSelectAssignModalVisible={setIsSelectAssignModalVisible}
                                setIsTrashDetailsModalVisible={setIsTrashDetailsModalVisible}
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
                                page={page} 
                                section={section}
                                setIsSelectAssignModalVisible={setIsSelectAssignModalVisible}
                                setIsTrashDetailsModalVisible={setIsTrashDetailsModalVisible}
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

        <TrashDetailsModal
            page={page}
            isTrashDetailsModalVisible={isTrashDetailsModalVisible}
            setIsTrashDetailsModalVisible={setIsTrashDetailsModalVisible}
            setIsSelectAssignModalVisible={setIsSelectAssignModalVisible}
            setIsCancellationReasonModalVisible={setIsCancellationReasonModalVisible}
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

export default IncomingRequestListing