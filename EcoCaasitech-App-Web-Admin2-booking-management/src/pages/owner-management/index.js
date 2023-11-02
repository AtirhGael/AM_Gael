import React,{useState} from 'react'
import { Row, Col, Dropdown, Modal, Table, Form } from 'react-bootstrap';
import bluestatbutton from '../../assets/icons/group_work.svg'
import gainarrowup from '../../assets/icons/gain_arrow_drop_up.svg'
import arrow_down from '../../assets/icons/arrow_drop_down.svg'
import calendaricon from '../../assets/icons/calendar-icon.svg'
import Subs from './Component/subs'
import FilterSearch from '../../components/FilterSearch';
import TablePagination from '../../components/TablePagination';
import { useNavigate } from 'react-router-dom';

import placeholderuserimage from '../../assets/images/placeholder.svg'
import HomeCharts from '../../components/HomeCharts';
import BlueButtonGainLossCard from '../../components/BlueButtonGainLossCard';
import { Grid, Stack } from '@mui/material';

const OwnerManagement = () => {
    const navigate = useNavigate()
    const[isAddCohortsModalVisible, setIsAddCohortsModalVisible] = useState(false)
    const[isCohortCreatedSuccessfulModalVisible, setIsCohortCreatedSuccessfulModalVisible] = useState(false)
    const[isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
    const[isSuspendAgentModalVisible, setIsSuspendAgentModalVisible] = useState(false)

    const page = 'agent-management'

    const addToCohort = (event) => {
        event.preventDefault()
        setIsAddCohortsModalVisible(false); 
        setIsCohortCreatedSuccessfulModalVisible(true);
    }
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
                  <Grid container  >
                  <Grid item xs={12} md={6} lg={3} xl={3} padding={1}>
                    <BlueButtonGainLossCard 
                                 name={'Subscription Request'}
                                 number={'60'}
                                 status={'gain'}
                                 percent={'10'}
                             />
                    </Grid>
                  <Grid item xs={12} md={6} lg={3} xl={3} padding={1}>
                    <BlueButtonGainLossCard 
                                 name={'Book Now Request'}
                                 number={'60'}
                                 status={'loss'}
                                 percent={'10'}
                             />
                    </Grid>
                  <Grid item xs={12} md={6} lg={3} xl={3} padding={1}>
                    <BlueButtonGainLossCard 
                                 name={'Book Later Request'}
                                 number={'60'}
                                 status={'gain'}
                                 percent={'10'}
                             />
                    </Grid>
                  <Grid item xs={12} md={6} lg={3} xl={3} padding={1}>
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
        <Grid container>
        <Grid container xs={12} md={3} lg={3}  >
                <Grid item xs={12} md={12} lg={12} padding={1}>
                <BlueButtonGainLossCard
                name={'Active Users'}
                number={'60'}
                status={'loss'}
                percent={'10'}
                />

                </Grid>
                <Grid item xs={12} md={12} lg={12} padding={1}>
                <BlueButtonGainLossCard
                name={'Disabled/Suspended Users'}
                number={'60'}
                status={'loss'}
                percent={'10'}
                />

                </Grid>

            </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9}>
            
            <Grid container>
                        
                        <Grid item xs={12} sm={12} md={4} lg={4} padding={1}>
                            <Subs 
                            type={'sub-main'}
                            onclick={()=>navigate('/owner-management/sub-ranking')}
                            heading={'Subscription'} title={'VIP'}/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} padding={1}>
                            <Subs
                            onclick={()=>navigate('/owner-management/booking-ranking')}
                            type={'sub-main'}
                            heading={'Booking'} title={'Book Now'}/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} padding={1}>
                            <Subs
                            onclick={()=>navigate('/owner-management/ecopoint-ranking')}
                            type={'sub-main'}
                            heading={'EcoPoint'} title={'Entry'}/>
                        </Grid>
                    </Grid>

        </Grid>
        

        </Grid>
        {/* second section ends here */}

            {/* third section starts here */}
                <Col xs={12} sm={12} md={6} lg={6} style={{marginTop:25}}>
                    
                <div style={{fontWeight:'bolder' ,fontFamily:'Barlow'}}> Ongoing Request  </div>
                        <div className='agent-listing-upper-div' style={{paddingBottom:10}}>
                        <FilterSearch/>
                        <div style={{
                            paddingTop:26,
                            justifySelf:'end'
                        }}>
                        <button className='agent-listing-see-all-button' 
                        onClick={() => {
                            // setPage('agent-listing');
                         navigate('/owner-listing')}}
                        >See all</button></div>
                    </div>
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
                            <tbody className='agent-listing-table-body'>
                                <tr>
                                    <td className='listing-checkbox-td'>
                                    <Form>
                                        <Form.Check type='checkbox'></Form.Check>
                                    </Form>
                                    </td>
                                    <td>1</td>
                                    <td>
                                        <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image'></img>
                                    </td>
                                    <td>John Peterson</td>
                                    <td>CTA01234567</td>
                                    <td><div className='agent-listing-row-status-div'>Active</div></td>
                                </tr>
                            </tbody>
                        </Table>
                        <TablePagination/>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} style={{marginTop:45}}>
                   <HomeCharts/>
                </Col>
        </Row>

       
    </div>
  )
}

export default OwnerManagement
