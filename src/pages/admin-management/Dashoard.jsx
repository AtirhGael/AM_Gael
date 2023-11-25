import { Grid, Stack } from '@mui/material'
import React,{useState} from 'react'
import ButtonDropdown from '../../components/ButtonDropdown'
import BlueButtonGainLossCard from '../../components/BlueButtonGainLossCard'
import HomeCharts from '../../components/HomeCharts'
import placeholderuserimage from '../../assets/images/placeholder.svg'
import vipTrophy from '../../assets/icons/vipTrophy.svg'
import TrashDetailsModal from '../../components/TrashDetailsModal'
import './styles.css'
import searchicon from '../../assets/icons/search.svg'
import filtericon from '../../assets/icons/filter_list.svg'
import TableLayout from '../../components/TableLayout'
import ThreeDotsDropdown from '../../components/ThreeDotsDropdown'
import Gift from '../../assets/icons/celebrate.svg'
import deleteicon from '../../assets/icons/delete.svg';
import editIcon from '../../assets/icons/editIcon.svg';
import { Menu,MenuItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import threedot from '../../assets/icons/more_horiz.svg';


export default function AdminManagemtDashoard() {
    const[isTrashAgentModalVisible, setIsTrashAgentModalVisible] = useState(false)
    const [isAgentBookingsActive,setIsAgentBookingsActive] = useState(false)
    const [isAgentOverviewActive,setIsAgentOverviewActive] = useState(false)
    const [subscriptionDaysModalVisible,setIsSubscriptionDaysModalVisible] = useState(false)
    const [endSubscriptionModalVisible,setIsEndSubscriptionModalVisible] = useState(false)
    const [deleteModalVisible,setIsDeleteModalVisible] = useState(false)
    const [page,setPage] =useState('incoming-request-listing')

    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleCloseMenu = () => {
      setAnchorEl(null);
    };
  return (
    <>
      <Stack direction="horizontal" style={{justifyContent:'space-between'}}>
                <div className='heading-text'>
                    
                </div>
                <ButtonDropdown
                page = {'admin-management'}
                />
        </Stack>
        <div className='agent-bookings-stats-content-div'>
            <Grid container spacing={1.5}>
                <Grid item xs={6} md={4} lg={3}>
                    <BlueButtonGainLossCard
                     name={'Total Request'}
                     status={'gain'}
                     percent={10}
                     number={60}
                    />
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                <BlueButtonGainLossCard
                     name={'Canceled Request'}
                     status={'lose'}
                     percent={10}
                     number={60}
                    />
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                <BlueButtonGainLossCard
                     name={'Canceled Request'}
                     status={'gain'}
                     percent={10}
                     number={60}
                    />
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                <BlueButtonGainLossCard
                     name={'Average Wait Time'}
                     status={'gain'}
                     percent={10}
                     number={60}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={1.5} paddingBottom={2}>
                <Grid item xs={12} lg={6} md={6}  className='admin-dasboard-chart'>
                    <HomeCharts
                    type={'lineChart'}
                    />
                </Grid>
                <Grid item xs={12} lg={6} md={6} >
                    <div className='white-box'>
                        <div style={{
                            padding:20,
                            gap:5,
                            display:'flex',
                            alignItems:'center'
                        }}>
                            <span style={{fontWeight:500,fontSize:20,lineHeight:1,fontStyle:'Barlow'}}>Top 5 performance admin</span>
                            <img alt='' src={Gift} />
                        </div>

                    
                        <Stack direction={'row'} justifyContent={'space-between'} sx={{paddingLeft:3,paddingRight:3,alignItems:'center'}}>
                            <Stack direction={'row'} alignItems={'center'}  gap={3}> 
                                <img src={vipTrophy} alt='' style={{display:'-ms-grid',height:24,width:24}}/>
                                <img src={placeholderuserimage} alt='' style={{height:45,width:35}}></img>
                                <div>
                                    <div className='subs-text'>John Peterson</div>
                                    <div className='image-name-date-id-para'>1st</div>
                                </div>
                            </Stack>
                           <div style={{color:'#0D77B9',fontWeight:'400',fontSize:18}}>100 hours</div>
                           <button className='admin-view-button' onClick={() => setIsTrashAgentModalVisible(true)}>View</button>
                        </Stack>
                        <Stack direction={'row'} justifyContent={'space-between'} sx={{paddingLeft:3,paddingRight:3,alignItems:'center',paddingTop:3}}>
                            <Stack direction={'row'} alignItems={'center'}  gap={3}> 
                                <img src={vipTrophy} alt='' style={{display:'-ms-grid',height:24,width:24}}/>
                                <img src={placeholderuserimage} alt='' style={{height:45,width:35}}></img>
                                <div>
                                    <div className='subs-text'>John Peterson</div>
                                    <div className='image-name-date-id-para'>1st</div>
                                </div>
                            </Stack>
                           <div style={{color:'#0D77B9',fontWeight:'400',fontSize:18}}>100 hours</div>
                           <button className='admin-view-button' onClick={() => setIsTrashAgentModalVisible(true)}>View</button>
                        </Stack>
                       
                    </div>

                </Grid>
            </Grid>

            <Grid container spacing={1.5}>
                    <Grid item xs={12} md={6} lg={6} paddingTop={1}>
                        <div style={{fontWeight:500,fontSize:20}}>Admin Listing</div>
                        <div className='admin-button-tab-div' style={{margin: '10px 0px 0px 0px'}}>
                            <button onClick={() => {setIsAgentOverviewActive(true); setIsAgentBookingsActive(false)}} className={isAgentOverviewActive ? 'sactive' : ''}>Admin</button>
                            <button onClick={() => {setIsAgentBookingsActive(true); setIsAgentOverviewActive(false)}} className={isAgentBookingsActive ? 'sactive' : ''}>Super Admin</button>
                        </div>
                        <Grid container justifyContent="space-between"  paddingTop={2}>
                            <Grid item xs={12} md={6} lg={6}>
                            <div className='listing-actions-div-for-admin'>
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
                            </Grid>
                            <Grid item xs={12} md={6} lg={6} container justifyContent="flex-end">
                                <div style={{
                                    // paddingTop: 26,
                                }}>
                                    <button
                                        className='agent-listing-see-all-button'
                                        onClick={() => {
                                            // setPage('agent-listing');
                                            navigate('/admin-management/admin-listing');
                                        }}
                                    >
                                        See all
                                    </button>
                                </div>
                            </Grid>
                        </Grid>
                        <TableLayout
                            headData={['#', 'Photo', 'Name', 'Role ', 'Action ', ]}
                            bodyData={[
                                [
                            1,
                            <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image'></img>,
                            
                            <div className='table-green-text-status-div'>John Peterson</div>,
                            <div style={{color:'#00B074',fontWeight:'400',fontFamily:'Barlow'}}>Booking Manager</div>,
                            
                            <div className='div-del-edit'>
                            <div >
                                <img src={deleteicon} alt='Delete Icon' className='agent-listing-delete-icon'></img>
                            </div>
                                <div>
                                <img src={editIcon} alt='Delete Icon' className='agent-listing-delete-icon'></img>
                                </div>
                                <button className='agent-listing-action-button' onClick={handleOpenMenu}>
                                    <img src={threedot} alt='Three Dots Icon' className='agent-listing-three-dots-icon'></img>
                                </button>
                               
                            </div>
                        ],
                    ]}
                    dataObject={{name: 'John'}}
                />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                     <div className='white-box'>
                        <HomeCharts
                         type={'trash'}
                         calender={true}
                         seeDetails={true}
                        />
                     </div>
                    </Grid>
            </Grid>

        </div>

        <TrashDetailsModal
            isTrashDetailsModalVisible={isTrashAgentModalVisible} 
            setIsTrashDetailsModalVisible={setIsTrashAgentModalVisible}
            page={'agent-profile'}
            />
                                <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleCloseMenu}
                                >
                                <MenuItem onClick={navigate}>View Profile</MenuItem>
                                <MenuItem onClick={() => setIsSelectAssignModalVisible(true)}>Edit Prifile</MenuItem>
                                </Menu>
    </>
  )
}
