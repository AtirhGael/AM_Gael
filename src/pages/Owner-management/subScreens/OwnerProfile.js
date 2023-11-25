import React, {useState} from 'react'
import { Container, Modal, Row, Col, Dropdown, Table, Form, Stack } from 'react-bootstrap'
import closeicon from '../../../components/images/close.svg'
import placeholderagentimage from '../../../components/images/Ellipse 110.svg'
import callicon from '../../../components/images/call.svg'
import chaticon from '../../../components/images/chat.svg'
import ratingstar from '../../../components/images/star.svg'
import calendaricon from '../../../components/images/calendar-icon.svg'
import bluestatbutton from '../../../components/images/group_work.svg'
import nayahimage from '../../../components/images/Ellipse 330.png'
import trashimage from '../../../components/images/Rectangle 378.svg'
import upcomingtrashstatuscircle from '../../../components/images/upcoming-trash-circle.svg'
import pastbookingtrashstatuscircle from '../../../components/images/past-booking-color-circle.svg'
import trashmodalimage from '../../../components/images/Rectangle 360.svg'
import bookicon from '../../../components/images/import_contacts.svg'
import arrow_down from '../../../components/images/arrow_drop_down.svg'
import FilterSearch from '../../../components/FilterSearch'
import BreadCrumb from '../../../components/BreadCrumb'
import { PieChart } from "react-minimal-pie-chart";
import TablePagination from '../../../components/TablePagination'
import gainarrowup from '../../../components/images/gain_arrow_drop_up.svg'
import availabilityarrowback from '../../../components/images/availability-arrow_back.svg'
import searchicon from '../../../components/images/search.svg'
import filtericon from '../../../components/images/filter_list.svg'
import HomeCharts from '../../../components/HomeCharts'
import Subs from '../Component/Subs'



const OwnerProfile = () => {
    const page = 'agent-profile'
    const[isAgentOverviewActive, setIsAgentOverviewActive] = useState(true)
    const[isAgentBookingsActive, setIsAgentBookingsActive] = useState(false)
    const[isEditAgentDetailsModalVisible, setIsEditAgentDetailsModalVisible] = useState(false)
    const[isTrashAgentModalVisible, setIsTrashAgentModalVisible] = useState(false)

    let dataOne = [
        { title: "One", value: 78, color: "#00B07426" },
        { title: "Two", value: 22, color: "#00B074" }
    ];
    let dataTwo = [
        { title: "One", value: 38, color: "#2D9CDB26" },
        { title: "Two", value: 62, color: "#0D77B9" }
    ];

  return (
    <div style={{padding: '0px 3px'}}>
        <BreadCrumb page={page}/>
        
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
                            <div className='agent-status-radio-group-div'>
                                <div className='agent-status-radio-item-div'>
                                    <Form.Check type="radio" aria-label="radio 1" />
                                    <span>Activated</span>
                                </div>
                                <div className='agent-status-radio-item-div'>
                                    <Form.Check type="radio" aria-label="radio 2" />
                                    <span>Deactivated</span>
                                </div>
                                <div className='agent-status-radio-item-div'>
                                    <Form.Check type="radio" aria-label="radio 3" />
                                    <span>Suspended</span>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div> :
                isAgentBookingsActive ? 
                    <div>
                        <div className='agent-time-range-dropdown-div'>
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
                        </div>

                        <div className='agent-bookings-stats-content-div'>
                            <Row>
                                <Col xs={6} sm={6} md={6} lg={6} className='stat-section-each-col'>
                                    <Row style={{marginBottom:10}}>
                                        <Col  xs={12} sm={12} md={6} lg={6}> 
                                        <div className='stat-section-div'>
                                        <Row>
                                            <Col lg={3} md={4} sm={4} xs={4}>
                                                <div className='agent-stat-button-icon-div'>
                                                    <img src={bluestatbutton} alt='Agent Stat Button Icon' className='agent-stat-button-icon'></img>
                                                </div>
                                            </Col>
                                            <Col lg={9} md={8} sm={8} xs={8}>
                                                <div className='status-stat-div'>
                                                    <p className='total-paragraph'>Book Now</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={3} md={4} sm={4} xs={4}>
                                                <p className='agent-stat-number-paragraph'>10</p>
                                            </Col>
                                            <Col lg={9} md={8} sm={8} xs={8}>
                                                <div className='status-stat-div'>
                                                    <p className='agent-stat-percentages'><img src={gainarrowup} alt='' className='gain-arrow-up'></img> 10% increase</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                        </Col>
                                        <Col  xs={12} sm={12} md={6} lg={6}> 
                                        <div className='stat-section-div'>
                                        <Row>
                                            <Col lg={3} md={4} sm={4} xs={4}>
                                                <div className='agent-stat-button-icon-div'>
                                                    <img src={bluestatbutton} alt='Agent Stat Button Icon' className='agent-stat-button-icon'></img>
                                                </div>
                                            </Col>
                                            <Col lg={9} md={8} sm={8} xs={8}>
                                                <div className='status-stat-div'>
                                                    <p className='total-paragraph'>Book Later</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={3} md={4} sm={4} xs={4}>
                                                <p className='agent-stat-number-paragraph'>15</p>
                                            </Col>
                                            <Col lg={9} md={8} sm={8} xs={8}>
                                                <div className='status-stat-div'>
                                                    <p className='agent-stat-percentages-decrease '><img src={arrow_down} alt='' className='gain-arrow-up'></img> 10% increase</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col  xs={12} sm={12} md={6} lg={6}> 
                                        <div className='stat-section-div'>
                                        <Row>
                                            <Col lg={3} md={4} sm={4} xs={4}>
                                                <div className='agent-stat-button-icon-div'>
                                                    <img src={bluestatbutton} alt='Agent Stat Button Icon' className='agent-stat-button-icon'></img>
                                                </div>
                                            </Col>
                                            <Col lg={9} md={8} sm={8} xs={8}>
                                                <div className='status-stat-div'>
                                                    <p className='total-paragraph'>Expense</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={3} md={4} sm={4} xs={4}>
                                                <p className='agent-stat-number-paragraph'>30k</p>
                                            </Col>
                                            <Col lg={9} md={8} sm={8} xs={8}>
                                                <div className='status-stat-div'>
                                                    <p className='agent-stat-percentages-decrease '><img src={arrow_down} alt='' className='gain-arrow-up'></img> 10% Decrease</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                        </Col>
                                        <Col  xs={12} sm={12} md={6} lg={6}> 
                                       

                                       {/* to be edited */}
                                       <Subs
                                       type={'floadCard'}
                                       />
                                        </Col>
                                    </Row>
                                   
                                    
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={6} >
                                    <HomeCharts marginTop={-6}/>
                                </Col>

                                
                            </Row>
                        </div>

                        <div className='garbage-details-table'>

                            {/*probably make this a component*/}
                            <div style={{fontWeight:'bolder' ,fontFamily:'Barlow' ,paddingTop:'30px'}} > Pickup Details</div>
                                <Row>
                                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <Stack direction="horizontal" style={{justifyContent:'space-between'}}>
                                        
                                        <div className='listing-actions-div'>
                                            <button className='listing-filter-button'>
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
                                            // onClick={() => {
                                                // setPage('agent-listing');
                                            //  navigate('/owner-listing')}}
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

        <Modal show={isTrashAgentModalVisible} onHide={() => setIsTrashAgentModalVisible(false)} className='trash-agent-modal'>
            <Modal.Body>
                <div className='modal-outer'>
                    <div className='modal-inner'>
                        <img src={closeicon} alt='Close Icon' className='close-icon' onClick={() => setIsTrashAgentModalVisible(false)}></img>
                        <div className='modal-content-div'>
                            <div className='trash-pickup-agent-info-modal-upper-div'>
                                <div className='trash-pickup-agent-info-grid-div'>
                                    <div>
                                        <img src={nayahimage} alt='Trash Pickup Agent Headshot' className='trash-pickup-agent-headshot-image'></img>
                                    </div>
                                    <div>
                                        <p className='trash-pickup-name-paragraph'>Nayah</p>
                                        <p className='trash-pickup-modal-agent-id-paragraph'>ID: TO1234567</p>
                                    </div>
                                </div>
                                <div className='trash-pickup-agent-info-modal-upper-div-inner-left-div'>
                                    <div className='trash-pickup-info-modal-book-icon-div'>
                                        <img src={bookicon} alt='Book Icon' className='trash-agent-details-modal-book-icon'></img>
                                    </div>
                                    <div>
                                        <p className='trash-pickup-modal-booking-type-paragraph'>Booking Type</p>
                                        <p className='trash-pickup-modal-type-paragraph'>Book later</p>
                                        <p className='trash-pickup-modal-status-paragraph upcoming'>Upcoming</p>
                                    </div>
                                </div>
                            </div>
                            <div className='trash-pickup-agent-info-modal-middle-div'>
                                <img src={trashmodalimage} alt='Trash' className='trash-modal-image'></img>
                                <div className='trash-pickup-agent-info-text-div'>
                                    <p className='request-id-paragraph'>Request ID</p>
                                    <p className='request-id'>TPU012289468</p>

                                    <Container fluid className='trash-pickup-agent-info-text-container'>
                                        <Row>
                                            <Col xs={6} sm={6} md={6} lg={6}>
                                                <p className='trash-pickup-agent-details-type-para'>Pickup Location</p>
                                                <p className='trash-pickup-agent-details-text-para'>Carrefour Jouvance</p>
                                            </Col>
                                            <Col xs={6} sm={6} md={6} lg={6}>
                                                <p className='trash-pickup-agent-details-type-para'>Amount</p>
                                                <p className='trash-pickup-agent-details-text-para'>350 cfa</p>
                                            </Col>
                                            <Col xs={6} sm={6} md={6} lg={6}>
                                                <p className='trash-pickup-agent-details-type-para'>Date</p>
                                                <p className='trash-pickup-agent-details-text-para'>Friday May 1st  2023</p>
                                            </Col>
                                            <Col xs={6} sm={6} md={6} lg={6}>
                                                <p className='trash-pickup-agent-details-type-para'>Trash Quantity</p>
                                                <p className='trash-pickup-agent-details-text-para'>2 Bags</p>
                                            </Col>
                                            <Col xs={6} sm={6} md={6} lg={6}>
                                                <p className='trash-pickup-agent-details-type-para'>Time</p>
                                                <p className='trash-pickup-agent-details-text-para'>10:10 am</p>
                                            </Col>
                                            <Col xs={6} sm={6} md={6} lg={6}>
                                                <p className='trash-pickup-agent-details-type-para'>Past Request Made</p>
                                                <p className='trash-pickup-agent-details-text-para'>10 Pickups</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                            <button className='trash-pickup-agent-info-modal-reassign-button'>Reassign</button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    </div>
  )
}

export default OwnerProfile