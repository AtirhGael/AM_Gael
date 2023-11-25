import React,{useEffect, useState} from 'react'
import { Row, Col, Dropdown, Modal, Table, Form } from 'react-bootstrap';
import calendaricon from '../../assets/icons/calendar-icon.svg'
import Subs from './Component/subs'
import FilterSearch from '../../components/FilterSearch';
import TablePagination from '../../components/TablePagination';
import { useNavigate } from 'react-router-dom';
import placeholderuserimage from '../../assets/images/placeholder.svg'
import HomeCharts from '../../components/HomeCharts';
import BlueButtonGainLossCard from '../../components/BlueButtonGainLossCard';
import { Grid, Stack } from '@mui/material';
import axiosServices from '../../services/axiosServices';
import GreenCheckbox from '../../components/GreenCheckbox';


const OwnerManagement = () => {
    const navigate = useNavigate()
    const[isAddCohortsModalVisible, setIsAddCohortsModalVisible] = useState(false)
    const[isCohortCreatedSuccessfulModalVisible, setIsCohortCreatedSuccessfulModalVisible] = useState(false)
    const[isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
    const[isSuspendAgentModalVisible, setIsSuspendAgentModalVisible] = useState(false)
    const [allOwner, setAllOwners] = useState([])
    const [ranking, setRanking] = useState([])
    const [rankingVip, setRankingVip] = useState([])
    const [rankingBooking, setRankingBooking] = useState([])


    const page = 'agent-management'

    const addToCohort = (event) => {
        event.preventDefault()
        setIsAddCohortsModalVisible(false); 
        setIsCohortCreatedSuccessfulModalVisible(true);
    }

    const Owners = () =>{
        axiosServices.allOwners().then(res=>{
            // console.log(res.data);
            setAllOwners(Object.values(res.data.Owners))
        }).catch(error=>{
            console.log(error);
        })
    }

    const subLevels = () =>{
        axiosServices.rankByEcopoint().then(res=>{
            console.log('ranked by ecopoint',res.data.data);
            setRanking(res.data.data)
        }).catch(error=>{
            console.log('ranked by ecopoint',error);
        })
    }

    useEffect(()=>{
        Owners()
        subLevels()
    },[])
    const entry = () =>{
        navigate('/owner-management/ecopoint-ranking')
        console.log('hello worls');
    }
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
       ];
       
       const rows = [
        { id: 1, firstName: 'John', lastName: 'Doe' },
        { id: 2, firstName: 'Jane', lastName: 'Doe' },
        // Add more rows as needed
       ];
    const [filterModel, setFilterModel] = React.useState({
    items: [{ columnField: 'firstName', operatorValue: 'contains', value: 'John' }],
    });
        console.log(allOwner);

       

  return (
    <div>
        <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
        <Stack sx={{justifyContent:'flex-end',alignItems:'flex-end'}}>
        <Dropdown className='time-range-dropdown'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='time-range-dropdown-button'>
                        <img src={calendaricon} alt='Calendar Icon' className='dropdown-calendar-icon'></img> Weekly
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
        </Stack>
                <div className='agent-stats-content-div'>
                  <Grid container spacing={1} >
                  <Grid item xs={6} md={6} lg={3} xl={3} >
                    <BlueButtonGainLossCard 
                                 name={'Subscription Request'}
                                 number={'60'}
                                 status={'gain'}
                                 percent={'10'}
                             />
                    </Grid>
                  <Grid item xs={6} md={6} lg={3} xl={3} >
                    <BlueButtonGainLossCard 
                                 name={'Book Now Request'}
                                 number={'60'}
                                 status={'loss'}
                                 percent={'10'}
                             />
                    </Grid>
                  <Grid item xs={6} md={6} lg={3} xl={3} >
                    <BlueButtonGainLossCard 
                                 name={'Book Later Request'}
                                 number={'60'}
                                 status={'gain'}
                                 percent={'10'}
                             />
                    </Grid>
                  <Grid item xs={6} md={6} lg={3} xl={3}>
                    <BlueButtonGainLossCard 
                                 name={'Total Owners'}
                                 number={'60'}
                                 status={'loss'}
                                 percent={'10'}
                             />
                    </Grid>
                  </Grid>
                </div>
        </Col>
        {/* first section ends */}


        {/* second section starts her  */}
        <Grid container paddingTop={2} spacing={1}>
        <Grid item xs={12} md={3} lg={3}   >
                <Grid container spacing={1}>
                    <Grid item xs={6} md={12} lg={12} >
                        <BlueButtonGainLossCard
                        name={'Active Users'}
                        number={'60'}
                        status={'loss'}
                        percent={'10'}
                        />

                    </Grid>
                    <Grid item xs={6} md={12} lg={12} >
                        <BlueButtonGainLossCard
                        name={'Disabled/ Suspended Users'}
                        number={'60'}
                        status={'loss'}
                        percent={'10'}
                        />

                    </Grid>
                </Grid>

            </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9}>
            
            <Grid container spacing={1}>
                        
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Subs 
                            type={'sub-main'}
                            onclick={()=>navigate('/owner-management/sub-ranking')}
                            heading={'Subscription'} title={'VIP'}
                            ranking={ranking}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Subs
                            onclick={()=>navigate('/owner-management/booking-ranking')}
                            type={'sub-main'}
                            heading={'Booking'} title={'Book Now'}
                            ranking={ranking}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Subs
                            onclick={()=>navigate('/owner-management/ecopoint-ranking')}
                            type={'sub-main'}
                            heading={'EcoPoint'} title={'Entry'}
                            ranking={ranking}
                            />
                        </Grid>
                       
                    </Grid>

        </Grid>
        

        </Grid>
        {/* second section ends here */}

            {/* third section starts here */}
                <Col xs={12} sm={12} md={6} lg={6} style={{marginTop:25}}>
                    
                <div style={{fontWeight:'bolder' ,fontFamily:'Barlow'}}> Ongoing Request  </div>
                <Grid container justifyContent="space-between" paddingBottom={2}>
                            <Grid item xs={12} md={6} lg={6}>
                                <FilterSearch />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6} container justifyContent="flex-end">
                                <div style={{
                                    paddingTop: 26,
                                }}>
                                    <button
                                        className='agent-listing-see-all-button'
                                        onClick={() => {
                                            // setPage('agent-listing');
                                            navigate('/owner-listing');
                                        }}
                                    >
                                        See all
                                    </button>
                                </div>
                            </Grid>
                        </Grid>
                                        
                
                        
              
                   
                    <div className='agent-listing-table-div'>
                        <Table responsive className='agent-listing-table'>
                            <thead className='agent-listing-table-head'>
                                <tr>
                                    <th style={{borderRadius: '10px 0px 0px 10px'}}></th>
                                    <th >#</th>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th> ID</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                           {allOwner.slice(0,2).map((item,id)=>(
                            <tbody className='agent-listing-table-body'>
                                <tr>
                                    <td className='listing-checkbox-td'>
                                    <GreenCheckbox/>
                                    </td>
                                    <td>{id}</td>
                                    <td>
                                        <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image'></img>
                                    </td>
                                    <td>{item.last_name}</td>
                                    <td>{item.phone_number}</td>
                                    <td><div className='agent-listing-row-status-div'>{item.account_status}</div></td>
                                </tr>
                            </tbody>
                           ))}
                
                        </Table>
                        <TablePagination/>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} style={{marginTop:45}}>
                   <HomeCharts
                   type={'trash'}
                   />
                </Col>
        </Row>

       
    </div>
  )
}

export default OwnerManagement
