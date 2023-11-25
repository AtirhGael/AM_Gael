import React, { useState } from 'react'
import './styles.css'
import FilterSearch from '../../components/FilterSearch'
import BreadCrumb from '../../components/BreadCrumb'
import ModalLayout from '../../components/ModalLayout'
import GreenCheckbox from '../../components/GreenCheckbox';
import ThreeDotsDropdown from '../../components/ThreeDotsDropdown';
import placeholderagentimage from '../../assets/images/Ellipse 110.svg'
import TrashDetailsModal from '../../components/TrashDetailsModal';
import { useNavigate } from 'react-router-dom';
import cancellationimage from '../../assets/images/news (10) 1.svg'
import TableNameTextGrid from '../../components/TableNameTextGrid'
import formatDate from '../../hooks/formatDate'
import { connect } from 'react-redux';
import TableLayout from '../../components/TableLayout'




const IncomingRequestListing = ({setPage, allUnassignedRequests}) => {
    const navigate = useNavigate()
    const page = 'incoming-request-listing'
    const section = 'booking-management'
    const[isSelectAssignModalVisible, setIsSelectAssignModalVisible] = useState(false)
    const[isRequestAssignedModalVisible, setIsRequestAssignedModalVisible] = useState(false)
    const[isTrashDetailsModalVisible, setIsTrashDetailsModalVisible] = useState(false)
    const[isCancellationReasonModalVisible, setIsCancellationReasonModalVisible] = useState(false)

  return (
    <div className='incoming-request-listing-div'>
        <BreadCrumb pageData={'Incoming Request Listing'} sectionData={'Booking Management'}/>

        <p className='page-name-bold-text'>Unassigned Request</p>

        <FilterSearch/>

        <TableLayout
            headData={['', '#', 'Name/Date', 'Trash Type', 'Amount', 'Book Type', 'Location', 'Action']}
            bodyData={
                Object.keys(allUnassignedRequests).length > 0 ?
                    allUnassignedRequests.data.map((object, index) => [
                        <GreenCheckbox/>,
                        (index + 1),
                        <TableNameTextGrid name={object.first_name} date={formatDate(object.booking_start_at)}/>,
                        <>{object.trash_items.quantity} {object.trash_items.category}{(object.trash_items.quantity > 1) ? 's' : null}</>,
                        <div className='table-amount-div'>{object.final_price} XF</div>,
                        <div className={`table-booking-type ${(object.booking_type === "now") ? 'now-booking-type' : null}`}>{object.booking_type}</div>,
                        <div className='table-location'>{object.address.name}</div>,
                        <ThreeDotsDropdown 
                            page={page} 
                            section={section}
                            setIsSelectAssignModalVisible={setIsSelectAssignModalVisible}
                            setIsTrashDetailsModalVisible={setIsTrashDetailsModalVisible}
                            setIsCancellationReasonModalVisible={setIsCancellationReasonModalVisible}
                        />
                    ]) :
                    []
            }
            dataObject={allUnassignedRequests}
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

const mapStateToProps = (state) => {
    console.log(state)
    return {
      allUnassignedRequests: state.allUnassignedRequests
    }
}

export default connect(mapStateToProps)(IncomingRequestListing)