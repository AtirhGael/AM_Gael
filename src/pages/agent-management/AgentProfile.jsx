import React, {useState} from 'react'
import './styles.css'
import placeholderagentimage from '../../assets/images/Ellipse 110.svg'
import callicon from '../../assets/icons/call.svg'
import chaticon from '../../assets/icons/chat.svg'
import ratingstar from '../../assets/icons/star.svg'
import nayahimage from '../../assets/images/Ellipse 330.png'
import trashimage from '../../assets/images/Rectangle 378.svg'
import upcomingtrashstatuscircle from '../../assets/images/upcoming-trash-circle.svg'
import pastbookingtrashstatuscircle from '../../assets/images/past-booking-color-circle.svg'
import FilterSearch from '../../components/FilterSearch'
import BreadCrumb from '../../components/BreadCrumb'
import { PieChart } from "react-minimal-pie-chart";
import TablePagination from '../../components/TablePagination'
import availabilityarrowback from '../../assets/icons/availability-arrow_back.svg'
import Grid from '@mui/material/Grid';
import BlueButtonGainLossCard from '../../components/BlueButtonGainLossCard';
import ModalLayout from '../../components/ModalLayout'
import TrashDetailsModal from '../../components/TrashDetailsModal'
import ButtonDropdown from '../../components/ButtonDropdown'
import { Table, TableHead, TableBody, TableRow, TableCell, Radio, FormControlLabel, FormControl, RadioGroup } from '@mui/material';
import GreenCheckbox from '../../components/GreenCheckbox'



const AgentProfile = () => {
    const page = 'agent-profile'
    const section = 'agent-management'
    const[isAgentOverviewActive, setIsAgentOverviewActive] = useState(true)
    const[isAgentBookingsActive, setIsAgentBookingsActive] = useState(false)
    const[isEditAgentDetailsModalVisible, setIsEditAgentDetailsModalVisible] = useState(true)
    const[isTrashDetailsModalVisible, setIsTrashDetailsModalVisible] = useState(false)

    let dataOne = [
        { title: "One", value: 78, color: "#00B07426" },
        { title: "Two", value: 22, color: "#00B074" }
    ];
    let dataTwo = [
        { title: "One", value: 38, color: "#2D9CDB26" },
        { title: "Two", value: 62, color: "#0D77B9" }
    ];

  return (
    <div style={{padding: '0px 3px'}} className='agent-profile-div'>
        <BreadCrumb pageData={'Agent Profile'} sectionData={'Agent Management'}/>
        
        <div className='listing-button-tab-div agent-profile-listing-button-tab-div' style={{margin: '30px 0px 20px 0px'}}>
            <button onClick={() => {setIsAgentOverviewActive(true); setIsAgentBookingsActive(false)}} className={isAgentOverviewActive ? 'active' : ''}>Overview</button>
            <button onClick={() => {setIsAgentBookingsActive(true); setIsAgentOverviewActive(false)}} className={isAgentBookingsActive ? 'active' : ''}>Bookings</button>
            <button onClick={() => {setIsAgentOverviewActive(false); setIsAgentBookingsActive(false)}} className={(!isAgentOverviewActive && !isAgentBookingsActive) ? 'active' : ''}>Other</button>
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
                            <Grid container spacing={2} className='agent-personal-details-container'>
                                <Grid item xs={6} sm={4} md={4} lg={4}>
                                    <div>
                                        <p className='agent-details-type-para'>First Name</p>
                                        <p>John</p>
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={4} md={4} lg={4}>
                                    <div>
                                        <p className='agent-details-type-para'>Last Name</p>
                                        <p>Peterson</p>
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={4} md={4} lg={4}>
                                    <div>
                                        <p className='agent-details-type-para'>Category</p>
                                        <p>A1</p>
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={4} md={4} lg={4}>
                                    <div>
                                        <p className='agent-details-type-para'>Phone</p>
                                        <p>+237 671717171</p>
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={4} md={4} lg={4}>
                                    <div>
                                        <p className='agent-details-type-para'>Badge ID</p>
                                        <p>CTA01456322</p>
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={4} md={4} lg={4}>
                                    <div>
                                        <p className='agent-details-type-para'>Certificate Number</p>
                                        <p>CERT028954322</p>
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={4} md={4} lg={4}>
                                    <div>
                                        <p className='agent-details-type-para'>Location</p>
                                        <p>Jouvence</p>
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={4} md={4} lg={4}>
                                    <div>
                                        <p className='agent-details-type-para'>Date Created</p>
                                        <p>5th/07/2023</p>
                                    </div>
                                </Grid>
                            </Grid>
                    </div>
                    <div className='agent-status-div'>
                        <p className='agent-overview-status-heading'>Status</p>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="Activated" control={<Radio sx={{color: 'black', '&.Mui-checked': {color: 'black',}, }}/>} label="Activated" />
                                <FormControlLabel value="Deactivated" control={<Radio sx={{color: 'black', '&.Mui-checked': {color: 'black',}, }}/>} label="Deactivated" />
                                <FormControlLabel value="Suspended" control={<Radio sx={{color: 'black', '&.Mui-checked': {color: 'black',}, }}/>} label="Suspended" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div> :
                isAgentBookingsActive ? 
                    <div>
                        <div>
                            <ButtonDropdown page={page}/>
                        </div>

                        <div className='agent-bookings-stats-content-div'>
                            <Grid container spacing={1}>
                                <Grid item xs={6} sm={6} md={3} lg={3}>
                                    <BlueButtonGainLossCard 
                                        name={'Book Now'}
                                        number={'10'}
                                        status={'gain'}
                                        percent={'10'}
                                    />
                                </Grid>                            
                                <Grid item xs={6} sm={6} md={3} lg={3}>
                                    <BlueButtonGainLossCard 
                                        name={'Book Later'}
                                        number={'20'}
                                        status={'gain'}
                                        percent={'10'}
                                    />
                                </Grid>                            
                                <Grid item xs={6} sm={6} md={3} lg={3}>
                                    <BlueButtonGainLossCard 
                                        name={'Subscription'}
                                        number={'10'}
                                        status={'gain'}
                                        percent={'10'}
                                    />
                                </Grid>    
                                <Grid item xs={6} sm={6} md={3} lg={3}>
                                    <BlueButtonGainLossCard 
                                        name={'Earnings'}
                                        number={'60k'}
                                        status={'gain'}
                                        percent={'10'}
                                    />
                                </Grid>                            
                            </Grid>
                        </div>

                        <div className='garbage-details-table'>

                            <div className='listing-body-upper-div' style={{paddingTop: '30px'}}>
                                <FilterSearch/>
                                <div className='listing-stats-paragraphs-div'>
                                    <p>Total Pickups:  1000</p>
                                    <p>Active:  700</p>
                                    <p>Inactive:  300</p>
                                </div>
                            </div>

                            <div className='agent-listing-table-div'>
                                <div className='table-outer-div'>
                                    <div className='table-inner-div'>
                                    <Table className='agent-listing-table trash-pickup-listing-table'>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell style={{ borderRadius: '10px 0px 0px 10px' }} className='name-date'>
                                                Name/Date
                                                </TableCell>
                                                <TableCell className='owners-location'>Owner's Location</TableCell>
                                                <TableCell className='trash-image'>Trash Image</TableCell>
                                                <TableCell className='trash-pickup-status'>Status</TableCell>
                                                <TableCell className='book-type'>Book Type</TableCell>
                                                <TableCell style={{ borderRadius: '0px 10px 10px 0px' }} className='action'>
                                                Action
                                                </TableCell>
                                            </TableRow>
                                            </TableHead>
                                            <TableBody className='agent-listing-table-body'>
                                            <TableRow>
                                                <TableCell className='name-date'>
                                                <div className='trash-pickup-agent-info-grid-div'>
                                                    <div>
                                                    <img src={nayahimage} alt='Trash Pickup Agent Headshot' className='trash-pickup-agent-headshot-image' />
                                                    </div>
                                                    <div>
                                                    <p className='trash-pickup-name-paragraph'>Nayah</p>
                                                    <p className='trash-pickup-table-timedate-paragraph'>06/16/23 10:00 AM</p>
                                                    </div>
                                                </div>
                                                </TableCell>
                                                <TableCell className='owners-location'>
                                                <p>Carrefour Jouvence</p>
                                                </TableCell>
                                                <TableCell className='trash-image'>
                                                <img src={trashimage} alt='Trash' className='trash-pickup-table-trash-image' />
                                                </TableCell>
                                                <TableCell className='trash-pickup-status'>
                                                <div className='trash-pickup-table-status-div upcoming'>
                                                    <img src={upcomingtrashstatuscircle} alt='Upcoming Trash Status Circle' className='trash-status-circle' />
                                                    Upcoming
                                                </div>
                                                </TableCell>
                                                <TableCell className='book-type'>Later</TableCell>
                                                <TableCell className='action'>
                                                    <button className='view-button' onClick={() => setIsTrashDetailsModalVisible(true)}>View</button>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className='name-date'>
                                                <div className='trash-pickup-agent-info-grid-div'>
                                                    <div>
                                                    <img src={nayahimage} alt='Trash Pickup Agent Headshot' className='trash-pickup-agent-headshot-image' />
                                                    </div>
                                                    <div>
                                                    <p className='trash-pickup-name-paragraph'>Nayah</p>
                                                    <p className='trash-pickup-table-timedate-paragraph'>06/16/23 10:00 AM</p>
                                                    </div>
                                                </div>
                                                </TableCell>
                                                <TableCell className='owners-location'>
                                                <p>Carrefour Jouvence</p>
                                                </TableCell>
                                                <TableCell className='trash-image'>
                                                <img src={trashimage} alt='Trash' className='trash-pickup-table-trash-image' />
                                                </TableCell>
                                                <TableCell className='trash-pickup-status'>
                                                <div className='trash-pickup-table-status-div past-booking'>
                                                    <img src={pastbookingtrashstatuscircle} alt='Past Booking Trash Status Circle' className='trash-status-circle' />
                                                    Past Booking
                                                </div>
                                                </TableCell>
                                                <TableCell className='book-type'>Later</TableCell>
                                                <TableCell className='action'>
                                                    <button className='view-button' onClick={() => setIsTrashDetailsModalVisible(true)}>View</button>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                    </div>
                                    <TablePagination/>
                                </div>
                            </div>
                        </div>

                        

                    </div> :
                    <div>
                        <div>
                            <ButtonDropdown page={page}/>
                        </div>

                        <div className='agent-other-stats-content-div'>
                            <div className='agent-other-stats-content-grid-div'>
                                <div className='availability-div'>
                                    <p className='availability-div-heading-para'>Availability</p>

                                    <p className='availability-div-text'>
                                        <img src={availabilityarrowback} alt='' className='availability-arrow-back'></img>
                                        Aug 17 - Aug 23
                                    </p>
                                    <div className='availability-day-grid-div availability-time-div'>
                                        <div style={{width: '80px'}}></div>
                                        <span className='availability-div-text'>5AM - 12PM</span>
                                        <span className='availability-div-text'>12PM - 7PM</span>
                                    </div>
                                    <div className='availability-day-grid-div'>
                                        <p>Mon</p>
                                        <div className='checked-div'>
                                            <GreenCheckbox/>
                                        </div>
                                        <div className='checked-div'>
                                            <GreenCheckbox/>
                                        </div>
                                    </div>
                                    <div className='availability-day-grid-div'>
                                        <p>Tue</p>
                                        <div className='checked-div'>
                                            <GreenCheckbox/>
                                        </div>
                                        <div className='checked-div'>
                                            <GreenCheckbox/>
                                        </div>
                                    </div>
                                    <div className='availability-day-grid-div'>
                                        <p>Wed</p>
                                        <div className='checked-div'>
                                            <GreenCheckbox/>
                                        </div>
                                        <div className='checked-div'>
                                            <GreenCheckbox/>
                                        </div>
                                    </div>
                                    <div className='availability-day-grid-div'>
                                        <p>Thu</p>
                                        <div className='checked-div'>
                                            <GreenCheckbox/>
                                        </div>
                                        <div className='checked-div'>
                                            <GreenCheckbox/>
                                        </div>
                                    </div>
                                    <div className='availability-day-grid-div'>
                                        <p>Fri</p>
                                        <div className='checked-div'>
                                            <GreenCheckbox/>
                                        </div>
                                        <div className='checked-div'>
                                            <GreenCheckbox/>
                                        </div>
                                    </div>
                                    <div className='availability-day-grid-div'>
                                        <p>Sat</p>
                                        <div className='checked-div'>
                                            <GreenCheckbox/>
                                        </div>
                                        <div className='checked-div'>
                                            <GreenCheckbox/>
                                        </div>
                                    </div>
                                    <div className='availability-day-grid-div'>
                                        <p>Sun</p>
                                        <div className='checked-div'>
                                            <GreenCheckbox/>
                                        </div>
                                        <div className='checked-div'>
                                            <GreenCheckbox/>
                                        </div>
                                    </div>
                                </div>
                                <PieChart
                                    center={[50, 50]}
                                    data={dataOne}
                                    lineWidth={50}
                                    lengthAngle={360}
                                    paddingAngle={0}
                                    radius={50}
                                    startAngle={0}
                                    viewBoxSize={[100, 100]}
                                    className='agent-profile-booking-pie-chart'
                                >
                                    <g>
                                        <text x="50%" y="50%" textAnchor="middle" stroke="#1D2B4F" strokeWidth="0.4px" dy=".3em" className='pie-number'>22%</text>
                                    </g>
                                </PieChart>
                                <PieChart
                                    center={[50, 50]}
                                    data={dataTwo}
                                    lineWidth={50}
                                    lengthAngle={360}
                                    paddingAngle={0}
                                    radius={50}
                                    startAngle={0}
                                    viewBoxSize={[100, 100]}
                                    className='agent-profile-booking-pie-chart'
                                >
                                    <g>
                                        <text x="50%" y="50%" textAnchor="middle" stroke="#1D2B4F" strokeWidth="0.4px" dy=".3em" className='pie-number'>62%</text>
                                    </g>
                                </PieChart>
                            </div>
                        </div>
                    </div>
            }
        </div>
        


        <ModalLayout
            size={'large'}
            state={isEditAgentDetailsModalVisible}
            stateFunction={setIsEditAgentDetailsModalVisible}
            content={
                <>
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
                </>
            }
        />

        <TrashDetailsModal 
            isTrashDetailsModalVisible={isTrashDetailsModalVisible} 
            setIsTrashDetailsModalVisible={setIsTrashDetailsModalVisible}
            page={page}
            trashDetailsModalStatusParagraphVisible={true}
        />
    </div>
  )
}

export default AgentProfile