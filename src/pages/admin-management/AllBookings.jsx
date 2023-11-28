import React, {useEffect, useState} from 'react'
import { Container, Modal, Row, Col, Dropdown } from 'react-bootstrap'
import closeicon from '../../assets/icons/close.svg'
import placeholderagentimage from '../../assets/images/Ellipse 330.png'
import nayahimage from '../../assets/images/Ellipse 330.png'
import upcomingtrashstatuscircle from '../../assets/images/upcoming-trash-circle.svg'
import pastbookingtrashstatuscircle from '../../assets/images/past-booking-color-circle.svg'
import TablePagination from '../../components/TablePagination'
import searchicon from '../../assets/icons/search.svg'
import filtericon from '../../assets/icons/filter_list.svg'
import blueDot from '../../assets/icons/blueDot.svg'
import payments from '../../assets/icons/payment.svg'
import { Grid, Stack } from '@mui/material'
import TrashDetailsModal from '../../components/TrashDetailsModal'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useLocation, useNavigate } from 'react-router-dom'
import axiosServices from '../../services/axiosServices'
import BreadCrumb from '../../components/BreadCrumb'
import TableLayout from '../../components/TableLayout'
import trashCan from '../../assets/images/trash.svg'
function AllBookings() {
    const page = 'agent-profile'
    const[isAgentOverviewActive, setIsAgentOverviewActive] = useState(0)
    const[isEditAgentDetailsModalVisible, setIsEditAgentDetailsModalVisible] = useState(false)
    const[isTrashAgentModalVisible, setIsTrashAgentModalVisible] = useState(false)
    const [singleUser, setSingleUser] = useState('')
    const navigate = useNavigate()
    // let dataOne = [
    //     { title: "One", value: 78, color: "#00B07426" },
    //     { title: "Two", value: 22, color: "#00B074" }
    // ];
    // let dataTwo = [
    //     { title: "One", value: 38, color: "#2D9CDB26" },
    //     { title: "Two", value: 62, color: "#0D77B9" }
    // ];
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
      };

      const id = useLocation()
      console.log(id.state);
      const user_id = id.state

      const IndividualUser = () =>{
        axiosServices.UserById(user_id).then(res=>{
            // console.log(Object.values(res.data),'ownerProfile');
            setSingleUser(res.data.owner_data)
            // localStorage.setItem('singleUser',JSON.stringify(res.data))
        }).catch(error=>{
            console.log(error);
        })
      }

   
    // console.log(singleUser.country_name,'single user');




      useEffect(()=>{
        IndividualUser()
        // users()
      },[])

      console.log(singleUser,'owner profiles');
      const section = 'owner-management'
  return (
    <div style={{padding: '0px 3px'}}>
        <BreadCrumb sectionData={'Admin Listing'} pageData={'Admin Profiles'}/>
        <div className='listing-button-tab-div agent-profile-listing-button-tab-div' style={{margin: '30px 0px 20px 0px'}}>
            <button onClick={() => {setIsAgentOverviewActive(0)}} className={isAgentOverviewActive ===0 ? 'active' : ''}>Book Now</button>
            <button onClick={() => {setIsAgentOverviewActive(1)}} className={isAgentOverviewActive ===1 ? 'active' : ''}>Book Later</button>
            <button onClick={() => setIsAgentOverviewActive(2)} className={isAgentOverviewActive ===2 ? 'active' : ''}>Subscription</button>
        </div>

        <div>
            {isAgentOverviewActive ===0 ?
                
                    <div>
                        <div style={{display: 'flex', justifyContent:'space-between',alignItems:'center'}}>
                                    <div className='listing-actions-div'>
                                            <button onClick={handleOpenMenu} className='listing-filter-button'>
                                                <img src={filtericon} alt='Filter Icon' className='listing-filter-icon'></img>
                                                <span>Filter</span>
                                            </button>
                                            <div className='listing-search-div'>
                                                <input placeholder='Search here' className='listing-search-input'></input>
                                                <button className='listing-search-icon-button'>
                                                    <img src={searchicon} alt='Search Icon' className='listing-search-icon'></img>
                                                </button>
                                            </div>
                                        </div>

                            <div>
                                <div className=''>Total Bookings: 100</div>
                                <div>Approved Request: 100</div>
                                <div>Rejected Request: 100</div>
                            </div>
                        </div>
                                        <TableLayout
                                        headData={['Name/Date', 'Trash Type', 'amount', 'Trash Image', 'Book Type ', 'Location', 'Action ', ]}
                                        bodyData={[
                                            [
                                            <div className='trash-pickup-agent-info-grid-div'>
                                                <div>
                                                    <img src={nayahimage} alt='Trash Pickup Agent Headshot' className='trash-pickup-agent-headshot-image' />
                                                </div>
                                                <div>
                                                    <p className='trash-pickup-name-paragraph'>Nayah</p>
                                                    <p className='trash-pickup-table-timedate-paragraph'>06/16/23 10:00 AM</p>
                                                </div>
                                            </div>
                                            ,
                                                '2 Buckets',
                                                '300 XAF',
                                         ,
                                        <img src={trashCan} alt='' style={{height:'90px',width:'70px',}}></img>,
                                        <div className='admin-listing-row-status-div'>
                                            Now
                                        </div>,
                                        'Montee’ Jouvence',
                                       <button className='admin-booking-table-btn' onClick={() => setIsTrashAgentModalVisible(true)}>
                                            View
                                       </button>,
                                        
                                    
                                    ],
                                    [
                                        <div className='trash-pickup-agent-info-grid-div'>
                                            <div>
                                                <img src={nayahimage} alt='Trash Pickup Agent Headshot' className='trash-pickup-agent-headshot-image' />
                                            </div>
                                            <div>
                                                <p className='trash-pickup-name-paragraph'>Nayah</p>
                                                <p className='trash-pickup-table-timedate-paragraph'>06/16/23 10:00 AM</p>
                                            </div>
                                        </div>
                                        ,
                                        '2 Buckets',
                                        '300 XAF',
                                    <img src={trashCan} alt='' style={{height:'90px',width:'70px',}}></img>,
                                    <div className='admin-listing-row-status-div'>
                                        Now
                                    </div>,
                                    'Montee’ Jouvence',
                                   <button className='admin-booking-table-btn' onClick={() => setIsTrashAgentModalVisible(true)}>
                                        View
                                   </button>,
                                    
                                
                                ]
                                        ]}
                                    dataObject={{name: 'John'}}
                                />
                    
                 
                </div>
                   :
                   isAgentOverviewActive ===1 ? 
                    <div>
                        hello book later
                    </div> :isAgentOverviewActive === 2?
                    <>
                    <div>hello subscription</div>
                    </>
                    :null
                   
            }
        </div>
        
        <Modal show={isEditAgentDetailsModalVisible} onHide={() => setIsEditAgentDetailsModalVisible(false)} className='edit-agent-details-modal'>
            <Modal.Body>
                <div className='modal-outer'>
                    <div className='modal-inner'>
                        <img src={closeicon} alt='Close Icon' className='close-icon' onClick={() => setIsEditAgentDetailsModalVisible(false)}></img>
                        <div className='modal-content-div'>
                            <p className='edit-personal-details-paragraph'>Edit Personal Details</p>
                            <form className='agent-edit-personal-details-form'>
                                <div className='agent-edit-input-grid-div'>
                                    <div className='edit-agent-name-div'>
                                        <p>First Name</p>
                                        <input></input>
                                    </div>
                                    <div className='edit-agent-name-div'>
                                        <p>Last Name</p>
                                        <input></input>
                                    </div>
                                </div>
                                <div className='agent-edit-input-grid-div'>
                                    <div className='edit-agent-name-div'>
                                        <p>Phone Number</p>
                                        <input></input>
                                    </div>
                                    <div className='edit-agent-name-div'>
                                        <p>Category</p>
                                        <input></input>
                                    </div>
                                </div>
                                <div className='agent-edit-input-grid-div'>
                                    <div className='edit-agent-name-div'>
                                        <p>Badge ID</p>
                                        <input></input>
                                    </div>
                                    <div className='edit-agent-name-div'>
                                        <p>Cert Number</p>
                                        <input></input>
                                    </div>
                                </div>
                                <div className='agent-edit-input-grid-div'>
                                    <div className='edit-agent-name-div'>
                                        <p>Location</p>
                                        <input></input>
                                    </div>
                                    <div className='edit-agent-name-div'>
                                        <p>Date Created</p>
                                        <input></input>
                                    </div>
                                </div>
                                <button>SUBMIT</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
        <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
            <div>
              <MenuItem >Last Week</MenuItem>
              <MenuItem >Last Month</MenuItem>
              <MenuItem >This Month</MenuItem>
              <MenuItem >Last Year</MenuItem>
              <MenuItem >Custom</MenuItem>
              <MenuItem >Book Type</MenuItem>
              <MenuItem >Trash Type</MenuItem>
            </div> 
      </Menu>

        <TrashDetailsModal
        isTrashDetailsModalVisible={isTrashAgentModalVisible} 
        setIsTrashDetailsModalVisible={setIsTrashAgentModalVisible}
        page={'agent-profile'}
        // ecopointBadgeVisible ={true}
        />
    </div>
  )
}

export default AllBookings
