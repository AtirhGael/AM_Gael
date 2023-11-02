import React, {useState} from 'react'
import { Container, Modal, Row, Col, Dropdown, Table, Form } from 'react-bootstrap'
import closeicon from '../../../assets/icons/close.svg'
import placeholderagentimage from '../../../assets/images/Ellipse 330.png'
import callicon from '../../../assets/icons/call.svg'
import chaticon from '../../../assets/icons/chat.svg'
import ratingstar from '../../../assets/icons/star.svg'
import calendaricon from '../../../assets/icons/calendar-icon.svg'
import bluestatbutton from '../../../assets/icons/group_work.svg'
import nayahimage from '../../../assets/images/Ellipse 330.png'
import upcomingtrashstatuscircle from '../../../assets/images/upcoming-trash-circle.svg'
import pastbookingtrashstatuscircle from '../../../assets/images/past-booking-color-circle.svg'
import trashmodalimage from '../../../assets/images/Rectangle 360.svg'
import bookicon from '../../../assets/icons/import_contacts.svg'
import arrow_down from '../../../assets/icons/arrow_drop_down.svg'
// import FilterSearch from '../../../components/FilterSearch'
// import BreadCrumb from '../../../components/BreadCrumb'
// import { PieChart } from "react-minimal-pie-chart";
import TablePagination from '../../../components/TablePagination'
import gainarrowup from '../../../assets/icons/gain_arrow_drop_up.svg'
// import availabilityarrowback from '../../../assets/icons/availability-arrow_back.svg'
import searchicon from '../../../assets/icons/search.svg'
import filtericon from '../../../assets/icons/filter_list.svg'
import HomeCharts from '../../../components/HomeCharts'
import Subs from '../Component/subs'
import Bread from '../../../components/Bread'
import { Grid, Stack } from '@mui/material'
import BlueButtonGainLossCard from '../../../components/BlueButtonGainLossCard'
import TrashDetailsModal from '../../../components/TrashDetailsModal'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom'

const OwnerProfile = () => {
    const page = 'agent-profile'
    const[isAgentOverviewActive, setIsAgentOverviewActive] = useState(true)
    const[isAgentBookingsActive, setIsAgentBookingsActive] = useState(false)
    const[isEditAgentDetailsModalVisible, setIsEditAgentDetailsModalVisible] = useState(false)
    const[isTrashAgentModalVisible, setIsTrashAgentModalVisible] = useState(false)
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

  return (
    <div style={{padding: '0px 3px'}}>
        {/* <BreadCrumb page={page}/> */}
        <Bread
        prevPage={'Owner Listing'}
        mainPage={'Owner Profile'}
        />
        <div className='listing-button-tab-div agent-profile-listing-button-tab-div' style={{margin: '30px 0px 20px 0px'}}>
            <button onClick={() => {setIsAgentOverviewActive(true); setIsAgentBookingsActive(false)}} className={isAgentOverviewActive ? 'active' : ''}>Overview</button>
            <button onClick={() => {setIsAgentBookingsActive(true); setIsAgentOverviewActive(false)}} className={isAgentBookingsActive ? 'active' : ''}>Bookings</button>
        </div>

        <div>
            {isAgentOverviewActive ?
                <div>
                    <div className='agent-details-upper-div'>
                        <img src={placeholderagentimage} alt='Agent User Headshot' className='agent-user-image'></img>
                        <div className='agent-main-details-div'>
                            <p className='agent-name'>John Peterson</p>
                            <div>
                                <span className='rating-paragraph'>4.5</span>
                                <img src={ratingstar} alt='Agent Rating Star Icon' className='agent-rating-star-icon'></img>
                                <img src={ratingstar} alt='Agent Rating Star Icon' className='agent-rating-star-icon'></img>
                                <img src={ratingstar} alt='Agent Rating Star Icon' className='agent-rating-star-icon'></img>
                                <img src={ratingstar} alt='Agent Rating Star Icon' className='agent-rating-star-icon'></img>
                            </div>
                            <p className='agent-cohort'>1cohort0723</p>
                            <div className='agent-details-contact-icons-grid-div'>
                                <div>
                                    <img src={callicon} alt='Phone Icon' className='agent-details-phone-icon'></img>
                                </div>
                                <div>
                                    <img src={chaticon} alt='Phone Icon' className='agent-details-chat-icon'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='agent-personal-details-div'>
                        <p className='agent-personal-details-paragraph'>Personal Details</p>
                        <Container fluid className='agent-personal-details-container'>
                            <Row>
                                <Col xs={6} sm={4} md={4} lg={4}>
                                    <div>
                                        <p className='agent-details-type-para'>First Name</p>
                                        <p>John</p>
                                    </div>
                                </Col>
                                <Col xs={6} sm={4} md={4} lg={4}>
                                    <div>
                                        <p className='agent-details-type-para'>Last Name</p>
                                        <p>Peterson</p>
                                    </div>
                                </Col>
                                <Col xs={6} sm={4} md={4} lg={4}>
                                    <div>
                                        <p className='agent-details-type-para'>Category</p>
                                        <p>A1</p>
                                    </div>
                                </Col>
                                <Col xs={6} sm={4} md={4} lg={4}>
                                    <div>
                                        <p className='agent-details-type-para'>Phone</p>
                                        <p>+237 671717171</p>
                                    </div>
                                </Col>
                                <Col xs={6} sm={4} md={4} lg={4}>
                                    <div>
                                        <p className='agent-details-type-para'>Badge ID</p>
                                        <p>CTA01456322</p>
                                    </div>
                                </Col>
                                <Col xs={6} sm={4} md={4} lg={4}>
                                    <div>
                                        <p className='agent-details-type-para'>Certificate Number</p>
                                        <p>CERT028954322</p>
                                    </div>
                                </Col>
                                <Col xs={6} sm={4} md={4} lg={4}>
                                    <div>
                                        <p className='agent-details-type-para'>Location</p>
                                        <p>Jouvence</p>
                                    </div>
                                </Col>
                                <Col xs={6} sm={4} md={4} lg={4}>
                                    <div>
                                        <p className='agent-details-type-para'>Date Created</p>
                                        <p>5th/07/2023</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className='agent-status-div'>
                        <p className='agent-overview-status-heading'>Status</p>
                        <Form>
                            <div style={{
                                display:'flex',
                                gap:15
                            }}>
                                <div style={{
                                display:'flex',
                                gap:10
                            }}>
                                    <Form.Check type="radio" aria-label="radio 1" />
                                    <span>Activated</span>
                                </div>
                                <div style={{
                                display:'flex',
                                gap:10
                            }}>
                                    <Form.Check type="radio" aria-label="radio 2" />
                                    <span>Deactivated</span>
                                </div>
                                <div style={{
                                display:'flex',
                                gap:10
                            }}>
                                    <Form.Check type="radio" aria-label="radio 3" />
                                    <span>Suspended</span>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div> :
                isAgentBookingsActive ? 
                    <div>
                        <Stack sx={{justifyContent:'flex-end', alignItems:'flex-end'}} >
                            <Dropdown className='agent-bookings-time-range-dropdown'>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className='time-range-dropdown-button'>
                                    <img src={calendaricon} alt='Calendar Icon' className='dropdown-calendar-icon'></img> This Week
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Stack>

                        <div className='agent-bookings-stats-content-div'>
                            <Grid container>
                                <Grid item xs={12} md={6} lg={6}>
                                    <Grid container >
                                        <Grid item xs={12}  md={6} lg={6} padding={1}> 
                                            <BlueButtonGainLossCard
                                            name={'Book Now'}
                                            status={'gain'}
                                            percent={10}
                                            number={30}
                                            />
                                        </Grid>
                                        <Grid item xs={12}  md={6} lg={6} padding={1}> 
                                            <BlueButtonGainLossCard
                                                name={'Book Later'}
                                                status={'gain'}
                                                percent={13}
                                                number={15}
                                                />
                                        </Grid>
                                        <Grid item xs={12}  md={6} lg={6} padding={1}> 
                                            <BlueButtonGainLossCard
                                                name={'Expense'}
                                                status={'loss'}
                                                percent={13}
                                                number={10}
                                                />
                                        </Grid>
                                        <Grid item xs={12}  md={6} lg={6} padding={1}> 
                                                <Subs
                                            type={'floadCard'}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={6} lg={6}>
                                 <HomeCharts marginTop={10}/>
                                </Grid>
                            </Grid>
                         
                        </div>

                        <div className='garbage-details-table'>

                            {/*probably make this a component*/}
                            <div style={{fontWeight:'bolder' ,fontFamily:'Barlow' ,paddingTop:'30px'}} > Pickup Details</div>
                                <Row>
                                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <Stack direction="horizontal" style={{justifyContent:'space-between',paddingBottom:13}}>
                                        
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
                                        
                                            <div style={{
                                                paddingTop:26,
                                                justifySelf:'end'
                                            }}>
                                            <button className='agent-listing-see-all-button' 
                                            onClick={() => {
                                                // setPage('agent-listing');
                                             navigate('/owner-management/owner-profile')}}
                                            >See all</button></div>
                                        </Stack>
                                    <div className='agent-listing-table-div'>
                                {/*probably make this a component*/}
                                <Table responsive className='agent-listing-table trash-pickup-listing-table'>
                                    <thead className='agent-listing-table-head'>
                                        <tr>
                                            <th style={{borderRadius: '10px 0px 0px 10px'}} className='name-date'>Name/Date</th>
                                            <th className='owners-location'>Trash Quantity</th>
                                            <th className='trash-pickup-status'>Status</th>
                                            <th style={{borderRadius: '0px 10px 10px 0px'}} className='action'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className='agent-listing-table-body'>
                                        <tr>
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
                                            <td className='owners-location'><p>2 Bags</p></td>
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
                                            <td className='owners-location'><p>3 bags</p></td>
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
                                    </Col>
                                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                          <div className='stat-section-div'>
                                            <div style={{fontWeight:'500',fontFamily:'Barlow'}}> EcoServices Redeemed </div>   
                                            <div className='agent-listing-table-div'>
                                {/*probably make this a component*/}
                                <Table responsive className='agent-listing-table trash-pickup-listing-table'>
                                    <thead className='agent-listing-table-head'>
                                        <tr>
                                            <th style={{borderRadius: '10px 0px 0px 10px'}} className='name-date'>Service Name</th>
                                            <th className='owners-location'>Service Type</th>
                                            <th className='trash-pickup-status'>Date Redeemed</th>
                                        </tr>
                                    </thead>
                                    <tbody className='agent-listing-table-body'>
                                        <tr>
                                            <td className='name-date'>
                                                <div className='trash-pickup-agent-info-grid-div'>
                                                  
                                                    <div>
                                                        <p>MTN</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td ><p>2Calls</p></td>
                                            <td className='trash-pickup-status'>
                                                <div >
                                                09/08/2012
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='name-date'>
                                                <div className='trash-pickup-agent-info-grid-div'>
                                                    <div>
                                                        <p >MTN</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td ><p>Data</p></td>
                                            <td>
                                                09/08/2012
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='name-date'>
                                                <div className='trash-pickup-agent-info-grid-div'>
                                                  
                                                    <div>
                                                        <p>MTN</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td ><p>2Calls</p></td>
                                            <td className='trash-pickup-status'>
                                                <div >
                                                09/08/2012
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='name-date'>
                                                <div className='trash-pickup-agent-info-grid-div'>
                                                    <div>
                                                        <p >MTN</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td ><p>Data</p></td>
                                            <td>
                                                09/08/2012
                                            </td>
                                        </tr>

                                    </tbody>
                                </Table>
                                        <div style={{color:'#4CAC3E',fontFamily:'Barlow',fontWeight:'400',textAlign:'end'}}>See More</div>
                            </div>
                                        </div>  
                                    </Col>
                                </Row>
                          
                            
                        </div>

                        

                    </div> :null
                   
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
              <MenuItem >Status</MenuItem>
              <MenuItem >Book Type</MenuItem>
            </div> 
      </Menu>

        <TrashDetailsModal
        isTrashAgentModalVisible={isTrashAgentModalVisible} 
        setIsTrashAgentModalVisible={setIsTrashAgentModalVisible}
        page={'owner-profile'}
        />
    </div>
  )
}

export default OwnerProfile