import React, { useState } from 'react';
import threedot from '../assets/icons/more_horiz.svg';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import deleteicon from '../assets/icons/delete.svg';
import editIcon from '../assets/icons/editIcon.svg';

const ThreeDotsDropdown = ({
  navigate,
  setIsSuspendAgentModalVisible,
  page,
  setIsAddIdCertNumberModalVisible,
  setIsAgentAttendanceModalVisible,
  setIsDeleteModalVisible,
  setPage,
  section,
  setIsSelectAssignModalVisible,
  setIsTrashDetailsModalVisible,
  setIsCancellationReasonModalVisible,
  onOpenEdit
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {(section === 'agent-management') ? (
        <button className='agent-listing-action-button' onClick={() => setIsDeleteModalVisible(true)}>
          <img src={deleteicon} alt='Delete Icon' className='agent-listing-delete-icon'></img>
        </button>
      ) : null}

      {(section === 'owner-management') ? (
        <button className='agent-listing-action-button' onClick={() => setIsDeleteModalVisible(true)}>
          <img src={deleteicon} alt='Delete Icon' className='agent-listing-delete-icon'></img>
        </button>
      ) : null}

      {(section === 'admin-management') ? (
          <div className='div-del-edit'>
           <div >
              <img src={deleteicon} alt='Delete Icon' className='agent-listing-delete-icon'></img>
           </div>
            <div>
              <img src={editIcon} alt='Delete Icon' className='agent-listing-delete-icon'></img>
            </div>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={navigate}>View Profile</MenuItem>
              <MenuItem onClick={onOpenEdit}>Edit Profile</MenuItem>
            </Menu>
        </div>
      ) : null}

      <button className='agent-listing-action-button' onClick={handleOpenMenu}>
        <img src={threedot} alt='Three Dots Icon' className='agent-listing-three-dots-icon'></img>
      </button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {(section === 'agent-management') ? (
          (page === 'agent-training') ? (
            <div>
              <MenuItem onClick={() => setIsAddIdCertNumberModalVisible(true)}>Add ID/Certificate Number</MenuItem>
              <MenuItem onClick={() => setIsSuspendAgentModalVisible(true)}>Suspend Agent</MenuItem>
              <MenuItem onClick={() => setIsAgentAttendanceModalVisible(true)}>Agents Attendance</MenuItem>
            </div>
          ) : (
            <div>
              <MenuItem onClick={() => { setPage('/agent-management/agent-profile'); navigate('/agent-management/agent-profile'); }}>View Profile</MenuItem>
              <MenuItem onClick={() => setIsSuspendAgentModalVisible(true)}>Suspend Agent</MenuItem>
            </div>
          )
        ) : null}
        {(section === 'booking-management') ? 
          (page === 'incoming-request-listing') ?
        
            <div>
              <MenuItem onClick={() => setIsTrashDetailsModalVisible(true)}>View Details</MenuItem>
              <MenuItem onClick={() => setIsSelectAssignModalVisible(true)}>Assign Agent(s)</MenuItem>
              <MenuItem onClick={() => setIsCancellationReasonModalVisible(true)}>Cancel Request</MenuItem>
            </div> :
            (page === 'booking-details/cancelled-requests') ?
              <div>
                <MenuItem>View Details</MenuItem>
                <MenuItem onClick={() => setIsCancellationReasonModalVisible(true)}>View Cancellation Reason</MenuItem>
              </div> :
              null 
        : null
        }
        {(section === 'owner-management') ? 
          (page === 'owner-listing') ?
            <div>
              <MenuItem onClick={navigate}>View Details</MenuItem>
              <MenuItem onClick={() => setIsSelectAssignModalVisible(true)}>Suspend Owner</MenuItem>
              <MenuItem onClick={() => setIsCancellationReasonModalVisible(true)}>Deactivation Reason</MenuItem>
            </div> :
              null //new pages go here
        : null
        }

        {(section === 'admin-management') ? 
          (page === 'dashboard') ?
            <div>
              <MenuItem onClick={navigate}>View Details</MenuItem>
              <MenuItem onClick={() => setIsSelectAssignModalVisible(true)}>Suspend Owner</MenuItem>
              <MenuItem onClick={() => setIsCancellationReasonModalVisible(true)}>Deactivation Reason</MenuItem>
            </div> :
              null //new pages go here
        : null
        }
        {(section === 'owner-management') ? 
          (page === 'dashboard-add-admin') ?
            <div>
              <MenuItem onClick={navigate}>View Profile</MenuItem>
              <MenuItem onClick={()=>onOpenEdit()}>Edit Profile</MenuItem>
            </div> :
              null //new pages go here
        : null
        }
      </Menu>
    </>
  );
};

export default ThreeDotsDropdown;