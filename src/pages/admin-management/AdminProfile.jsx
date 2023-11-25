import React, {useEffect, useState} from 'react'
import { Container, Modal, Row, Col, Dropdown } from 'react-bootstrap'
import closeicon from '../../assets/icons/close.svg'
import placeholderagentimage from '../../assets/images/Ellipse 330.png'
import callicon from '../../assets/icons/call.svg'
import chaticon from '../../assets/icons/chat.svg'
import ratingstar from '../../assets/icons/star.svg'
import calendaricon from '../../assets/icons/calendar-icon.svg'
import nayahimage from '../../assets/images/Ellipse 330.png'
import upcomingtrashstatuscircle from '../../assets/images/upcoming-trash-circle.svg'
import pastbookingtrashstatuscircle from '../../assets/images/past-booking-color-circle.svg'
import TablePagination from '../../components/TablePagination'
import searchicon from '../../assets/icons/search.svg'
import filtericon from '../../assets/icons/filter_list.svg'
import HomeCharts from '../../components/HomeCharts'
import Subs from '../owner-management/Component/subs'
import { Grid, Stack } from '@mui/material'
import BlueButtonGainLossCard from '../../components/BlueButtonGainLossCard'
import TrashDetailsModal from '../../components/TrashDetailsModal'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useLocation, useNavigate } from 'react-router-dom'
import axiosServices from '../../services/axiosServices'
import { Table, TableHead, TableBody, TableRow, TableCell, Radio, FormControlLabel, FormControl, RadioGroup,TableContainer,Paper } from '@mui/material';
import BreadCrumb from '../../components/BreadCrumb'

export default function AdminProfile() {
    const page = 'agent-profile'
    const[isAgentOverviewActive, setIsAgentOverviewActive] = useState(true)
    const[isAgentBookingsActive, setIsAgentBookingsActive] = useState(false)
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

  return (
    <div style={{padding: '0px 3px'}}>
        <BreadCrumb sectionData={'Owner Listing'} pageData={'Owner Profiles'}/>
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
                            <p className='agent-name'>{singleUser?singleUser.first_name:'waiting...'} {singleUser?singleUser.last_name:'waiting...'}</p>
                            <div>
                                <span className='rating-paragraph'>4.5</span>
                                <img src={ratingstar} alt='Agent Rating Star Icon' className='agent-rating-star-icon'></img>
                                <img src={ratingstar} alt='Agent Rating Star Icon' className='agent-rating-star-icon'></img>
                                <img src={ratingstar} alt='Agent Rating Star Icon' className='agent-rating-star-icon'></img>
                                <img src={ratingstar} alt='Agent Rating Star Icon' className='agent-rating-star-icon'></img>
                            </div>
                            <p className='agent-cohort'>{singleUser?singleUser.country_name:'waiting...'}</p>
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
                                        <p>{singleUser?singleUser.first_name:'waiting...'}</p>
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={4} md={4} lg={4}>
                                    <div>
                                        <p className='agent-details-type-para'>Last Name</p>
                                        <p>{singleUser?singleUser.last_name:'waiting...'}</p>
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
                                        <p> {singleUser?singleUser.phone_number:'waiting...'}</p>
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
                </div>
                   :
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
                                <Grid item xs={12} md={7} lg={7}>
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
                                <Grid item xs={12} md={5} lg={5}>
                                 <HomeCharts 
                                 type={'trash'}
                                 marginTop={10}/>
                                </Grid>
                            </Grid>
                         
                        </div>

                        <div className='garbage-detail'>

                            {/*probably make this a component*/}
                            <div style={{fontWeight:'bolder' ,fontFamily:'Barlow' ,paddingTop:'30px'}} > Pickup Details</div>
                                <Grid container >
                                    <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
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
                                            <td className='action'>
                                                <button className='trash-pickup-table-view-button' onClick={() => setIsTrashAgentModalVisible(true)}>View</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <TablePagination/>
                            </div>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5} padding={1}>
                                          <div className='stat-section-div-for-ecoservices'>
                                            <div style={{fontWeight:'500',fontFamily:'Barlow',paddingTop:15,paddingLeft:10,paddingBottom:10}}> EcoServices Redeemed </div>   
                                            <div className='agent-listing-table-div'>
                                            {/*probably make this a component*/}
                                        <TableContainer >
                                            <Table className='agent-listing-table trash-pickup-listing-table'>
                                            <TableHead >
                                                <TableRow>
                                                <TableCell className='name-date'>Service Name</TableCell>
                                                <TableCell className='owners-location'>Service Type</TableCell>
                                                <TableCell className='trash-pickup-status'>Date Redeemed</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody className='agent-listing-table-body'>
                                                <TableRow>
                                                <TableCell >
                                                    <div>
                                                    <div>
                                                        <p>MTN</p>
                                                    </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <p>2Calls</p>
                                                </TableCell>
                                                <TableCell className='trash-pickup-status'>
                                                    <div>
                                                    09/08/2012
                                                    </div>
                                                </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                <TableCell className='name-date'>
                                                    <div className='trash-pickup-agent-info-grid-div'>
                                                    <div>
                                                        <p>MTN</p>
                                                    </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <p>2Calls</p>
                                                </TableCell>
                                                <TableCell className='trash-pickup-status'>
                                                    <div>
                                                    09/08/2012
                                                    </div>
                                                </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                <TableCell className='name-date'>
                                                    <div className='trash-pickup-agent-info-grid-div'>
                                                    <div>
                                                        <p>MTN</p>
                                                    </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <p>2Calls</p>
                                                </TableCell>
                                                <TableCell className='trash-pickup-status'>
                                                    <div>
                                                    09/08/2012
                                                    </div>
                                                </TableCell>
                                                </TableRow>
                                                {/* Additional rows... */}
                                            </TableBody>
                                            </Table>
                                            </TableContainer>

                                        <div style={{color:'#4CAC3E',fontFamily:'Barlow',fontWeight:'400',textAlign:'end',paddingRight:10}}>See More</div>
                            </div>
                                        </div>  
                                    </Grid>
                                </Grid>
                          
                            
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
        isTrashDetailsModalVisible={isTrashAgentModalVisible} 
        setIsTrashDetailsModalVisible={setIsTrashAgentModalVisible}
        page={'agent-profile'}
        ecopointBadgeVisible ={true}
        />
    </div>
  )
}
