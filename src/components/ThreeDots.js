import React, {useRef} from 'react'
import threedot from '../components/images/more_horiz.svg';
import { Dropdown } from 'react-bootstrap';
import deleteicon from '../components/images/delete.svg';


const ThreeDots = ({onClick, setIsSuspendAgentModalVisible, page, setDeactivate, setIsAgentAttendaceModalVisible, setIsDeleteModalVisible, setPage}) => {
    const dropdownRef = useRef()
  return (
    <>
      <button className='agent-listing-action-button' onClick={() => setIsDeleteModalVisible(true)}>
        <img src={deleteicon} alt='Delete Icon' className='agent-listing-delete-icon'></img>
      </button>
      <button className='agent-listing-action-button' onClick={() => dropdownRef.current.click()}>
        <img src={threedot} alt='Three Dots Icon' className='agent-listing-three-dots-icon'></img>
      </button>
      <Dropdown className='cohort-listing-table-dropdown'>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className='cohort-listing-table-dropdown-button' ref={dropdownRef}></Dropdown.Toggle>
            <Dropdown.Menu>
              {/* {(page === 'agent-training') ? 
                <>
                  <Dropdown.Item onClick={() => setIsAddIdCertNumberModalVisible(true)}>Add ID/Certificate Number</Dropdown.Item>
                  <Dropdown.Item onClick={() => setIsSuspendAgentModalVisible(true)}>Suspend Agent</Dropdown.Item>
                  <Dropdown.Item onClick={() => setIsAgentAttendaceModalVisible(true)}>Agents Attendance</Dropdown.Item>
                </> :
                <>
                  <Dropdown.Item onClick={() => {setPage('agent-profile'); navigate('/agent-profile')}}>View Profile</Dropdown.Item>
                  <Dropdown.Item onClick={() => setIsSuspendAgentModalVisible(true)}>Suspend Agent</Dropdown.Item>
                </>
              } */}
              {page==='owner-listing' &&(
                <>
                   <Dropdown.Item onClick={onClick}>View Profile</Dropdown.Item>
                  <Dropdown.Item onClick={() => setIsSuspendAgentModalVisible(true)}>Suspend Owner</Dropdown.Item>
                  <Dropdown.Item onClick={() => setDeactivate(true)}>Deactivation Reason</Dropdown.Item>
                </>
              ) }
                            
            </Dropdown.Menu>
        </Dropdown>
    </>
  )
}

export default ThreeDots