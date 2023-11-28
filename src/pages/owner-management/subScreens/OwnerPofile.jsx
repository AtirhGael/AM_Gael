import React, {useState} from 'react'
import FilterSearch from '../../../components/FilterSearch'
import { Table, Form } from 'react-bootstrap'
import SuspendAgentModal from '../../../components/SuspendAgentModal';
import DeleteModal from '../../../components/DeleteModal';
import TablePagination from '../../../components/TablePagination';
import { useNavigate } from 'react-router-dom';
import ModalLayout from '../../../components/ModalLayout';
import cancellationimage from '../../../assets/images/news (10) 1.svg'
import { Typography } from '@mui/material';
import TrashDetailsModal from '../../../components/TrashDetailsModal';
import nayahimage from '../../../assets/images/Ellipse 330.png'
import upcomingtrashstatuscircle from '../../../assets/images/upcoming-trash-circle.svg'
import pastbookingtrashstatuscircle from '../../../assets/images/past-booking-color-circle.svg'
import GreenCheckbox from '../../../components/GreenCheckbox';
import BreadCrumb from '../../../components/BreadCrumb';



const OwnerProf = ({setPage}) => {
    const navigate = useNavigate()
    const page = 'owner-listing'
    const section = 'owner-management'
    const[isSuspendAgentModalVisible, setIsSuspendAgentModalVisible] = useState(false)
    const[isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
    const [deactivate,setDeactivate] = useState(false)
    const[isCancellationReasonModalVisible, setIsCancellationReasonModalVisible] = useState(false)
    const[isTrashAgentModalVisible, setIsTrashAgentModalVisible] = useState(false)




  
  return (
    <div>
     
         <BreadCrumb sectionData={'Agent Management'} pageData={'Owner Listing'}/>
        <Typography sx={{
            fontWeight:500,
            fontFamily:'Barlow',
            color:'#000',
            fontSize:20
        }}> Pickup Details</Typography>
      <div className='listing-body-upper-div' style={{paddingBottom:10}}>
        <FilterSearch
        />
        <div className='listing-stats-paragraphs-div'>
          <p>Total Agents:  1000</p>
          <p>Active:  700</p>
          <p>Inactive:  300</p>
        </div>
      </div>

        <div className='agent-listing-table-div'>
        <Table responsive className='agent-listing-table trash-pickup-listing-table'>
                                    <thead className='agent-listing-table-head'>
                                        <tr>
                                            <th style={{borderRadius: '10px 0px 0px 10px'}} className='name-date'></th>
                                            <th  className='owners-location'>Name/Date</th>
                                            <th className='owners-location'>Location</th>
                                            <th className='owners-location'>Trash Quantity</th>
                                            <th className='trash-pickup-status'>Amount</th>
                                            <th className='trash-pickup-status'>Status</th>
                                            <th style={{borderRadius: '0px 10px 10px 0px'}} className='action'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className='agent-listing-table-body'>
                                        <tr>
                                        <td className='owners-location'>
                                                <GreenCheckbox/>
                                                </td>
                                            <td className='name-date'>
                                                <div className='trash-pickup-agent-info-grid-div'>
                                                    <div>
                                                        <img src={nayahimage} alt='Trash Pickup Agent Headshot' className='trash-pickup-agent-headshot-image'></img>
                                                    </div>
                                                    <div>
                                                        <p className='trash-pickup-name-paragraph'>Nayah</p>
                                                        <p className='trash-pickup-table-timedate-paragraph'>06/16/23  10:00 AM</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='owners-location'><p>Carrefour Jouvence</p></td>
                                            <td className='owners-location'><p>2 Bags</p></td>
                                            <td className='owners-location'><p>100 XAF</p></td>
                                            <td className='trash-pickup-status'>
                                                <div className='trash-pickup-table-status-div upcoming'>
                                                    <img src={upcomingtrashstatuscircle} alt='Upcoming Trash Status Circle' className='trash-status-circle'></img>
                                                    Upcoming
                                                </div>
                                            </td>
                                            <td className='action'>
                                                <button className='trash-pickup-table-view-button' onClick={() => setIsTrashAgentModalVisible(true)}>View</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='owners-location'>
                                                <GreenCheckbox/>
                                                </td>
                                            <td className='name-date'>
                                                <div className='trash-pickup-agent-info-grid-div'>
                                                    <div>
                                                        <img src={nayahimage} alt='Trash Pickup Agent Headshot' className='trash-pickup-agent-headshot-image'></img>
                                                    </div>
                                                    <div>
                                                        <p className='trash-pickup-name-paragraph'>Nayah</p>
                                                        <p className='trash-pickup-table-timedate-paragraph'>06/16/23  10:00 AM</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='owners-location'><p>Carrefour Jouvence</p></td>
                                            <td className='owners-location'><p>2 Bags</p></td>
                                            <td className='owners-location'><p>100 XAF</p></td>
                                            <td>
                                                <div className='trash-pickup-table-status-div past-booking'>
                                                    <img src={pastbookingtrashstatuscircle} alt='Upcoming Trash Status Circle' className='trash-status-circle'></img>
                                                    Past Booking
                                                </div>
                                            </td>
                                            <td>
                                                <button className='trash-pickup-table-view-button' onClick={() => setIsTrashAgentModalVisible(true)}>View</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <TablePagination/>
        </div>
        <DeleteModal 
          isDeleteModalVisible={isDeleteModalVisible} 
          setIsDeleteModalVisible={setIsDeleteModalVisible}
          page={page}
        />
     
        <ModalLayout
            size={'medium'}
            state={isCancellationReasonModalVisible}
            stateFunction={setIsCancellationReasonModalVisible}
            content={
                <>
                    <div className='action-modal-div'>
                        <img src={cancellationimage} alt='' className='cancellation-modal-image'></img>
                        <p>Suspension Reason</p>
                        <input placeholder='This request is cancelled because the owner of the trash has not been present for
                        up to 10times for trash pickup.' type='text' className='cancellation-modal-input'></input>
                    </div>
                    <div className='cancellation-modal-button-div'>
                        <button className='cancellation-modal-submit-button'>Submit</button>
                        <button className='cancellation-modal-cancel-button' onClick={() => setIsCancellationReasonModalVisible(false)}>Cancel</button>
                    </div>
                </>
            }
        />
        <SuspendAgentModal 
          isSuspendAgentModalVisible={isSuspendAgentModalVisible} 
          setIsSuspendAgentModalVisible={setIsSuspendAgentModalVisible}
          page={page}
        />
         <TrashDetailsModal
            isTrashDetailsModalVisible={isTrashAgentModalVisible} 
            setIsTrashDetailsModalVisible={setIsTrashAgentModalVisible}
            page={'agent-profile'}
            ecopointBadgeVisible ={true}
            />
    </div>
  )
}

export default OwnerProf