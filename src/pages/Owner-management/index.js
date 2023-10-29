import React,{useState} from 'react'
import { Row, Col, Dropdown, Modal, Table, Form } from 'react-bootstrap';
import bluestatbutton from '../../components/images/group_work.svg'
import gainarrowup from '../../components/images/gain_arrow_drop_up.svg'
import arrow_down from '../../components/images/arrow_drop_down.svg'
import calendaricon from '../../components/images/calendar-icon.svg'
import Subs from './Component/Subs';
import FilterSearch from '../../components/FilterSearch';
import TablePagination from '../../components/TablePagination';
import { useNavigate } from 'react-router-dom';

import placeholderuserimage from '../../components/images/placeholder.svg'
import HomeCharts from '../../components/HomeCharts';

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
                <div className='agent-stats-content-div'>
                    <Row>
                        <Col xs={6} sm={6} md={3} lg={3} className='stat-section-each-col'>
                            <div className='stat-section-div'>
                                <Row>
                                    <Col lg={3} md={4} sm={4} xs={4}>
                                        <div className='agent-stat-button-icon-div'>
                                            <img src={bluestatbutton} alt='Agent Stat Button Icon' className='agent-stat-button-icon'></img>
                                        </div>
                                    </Col>
                                    <Col lg={9} md={8} sm={8} xs={8}>
                                        <div className='status-stat-div'>
                                            <p className='total-paragraph'>Subscription Request</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={3} md={4} sm={4} xs={4}>
                                        <p className='agent-stat-number-paragraph'>60</p>
                                    </Col>
                                    <Col lg={9} md={8} sm={8} xs={8}>
                                        <div className='status-stat-div'>
                                            <p className='agent-stat-percentages'><img src={gainarrowup} alt='' className='gain-arrow-up'></img> 10% increase</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} lg={3} className='stat-section-each-col'>
                            <div className='stat-section-div'>
                                <Row>
                                    <Col lg={3} md={4} sm={4} xs={4}>
                                        <div className='agent-stat-button-icon-div'>
                                            <img src={bluestatbutton} alt='Agent Stat Button Icon' className='agent-stat-button-icon'></img>
                                        </div>
                                    </Col>
                                    <Col lg={9} md={8} sm={8} xs={8}>
                                        <div className='status-stat-div'>
                                            <p className='total-paragraph'>Book Now Request</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={3} md={4} sm={4} xs={4}>
                                        <p className='agent-stat-number-paragraph'>60</p>
                                    </Col>
                                    <Col lg={9} md={8} sm={8} xs={8}>
                                        <div className='status-stat-div'>
                                            <p className='agent-stat-percentages-decrease '><img src={arrow_down} alt='' className='gain-arrow-up'></img> 10% increase</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} lg={3} className='stat-section-each-col'>
                            <div className='stat-section-div'>
                                <Row>
                                    <Col lg={3} md={4} sm={4} xs={4}>
                                        <div className='agent-stat-button-icon-div'>
                                            <img src={bluestatbutton} alt='Agent Stat Button Icon' className='agent-stat-button-icon'></img>
                                        </div>
                                    </Col>
                                    <Col lg={9} md={8} sm={8} xs={8}>
                                        <div className='status-stat-div'>
                                            <p className='total-paragraph'>Book Later Request</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={3} md={4} sm={4} xs={4}>
                                        <p className='agent-stat-number-paragraph'>60</p>
                                    </Col>
                                    <Col lg={9} md={8} sm={8} xs={8}>
                                        <div className='status-stat-div'>
                                            <p className='agent-stat-percentages'><img src={gainarrowup} alt='' className='gain-arrow-up'></img> 10% increase</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} lg={3} className='stat-section-each-col'>
                            <div className='stat-section-div'>
                                <Row>
                                    <Col lg={3} md={4} sm={4} xs={4}>
                                        <div className='agent-stat-button-icon-div'>
                                            <img src={bluestatbutton} alt='Agent Stat Button Icon' className='agent-stat-button-icon'></img>
                                        </div>
                                    </Col>
                                    <Col lg={9} md={8} sm={8} xs={8}>
                                        <div className='status-stat-div'>
                                            <p className='total-paragraph'>Total Owners</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={3} md={4} sm={4} xs={4}>
                                        <p className='agent-stat-number-paragraph'>60</p>
                                    </Col>
                                    <Col lg={9} md={8} sm={8} xs={8}>
                                        <div className='status-stat-div'>
                                            <p className='agent-stat-percentages-decrease '><img src={arrow_down} alt='' className='gain-arrow-up'></img> 10% decrease</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
        </Col>
        {/* first section ends */}


        {/* second section starts her  */}
        <Col xs={12} sm={12} md={12} lg={12}>
            <div className='agent-stats-content-div'>
            <Row>
                        <Col xs={6} sm={6} md={3} lg={3} className='stat-section-each-col'>
                           <div style={{marginBottom:10}}>
                           <div className='stat-section-div' >
                                <Row>
                                    <Col lg={3} md={4} sm={4} xs={4}>
                                        <div className='agent-stat-button-icon-div'>
                                            <img src={bluestatbutton} alt='Agent Stat Button Icon' className='agent-stat-button-icon'></img>
                                        </div>
                                    </Col>
                                    <Col lg={9} md={8} sm={8} xs={8}>
                                        <div className='status-stat-div'>
                                            <p className='total-paragraph'>Active Users</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={3} md={4} sm={4} xs={4}>
                                        <p className='agent-stat-number-paragraph'>60</p>
                                    </Col>
                                    <Col lg={9} md={8} sm={8} xs={8}>
                                        <div className='status-stat-div'>
                                            <p className='agent-stat-percentages-decrease '><img src={arrow_down} alt='' className='gain-arrow-up'></img> 10% decrease</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                           </div>
                           <div >
                           <div className='stat-section-div' >
                                <Row>
                                    <Col lg={3} md={4} sm={4} xs={4}>
                                        <div className='agent-stat-button-icon-div'>
                                            <img src={bluestatbutton} alt='Agent Stat Button Icon' className='agent-stat-button-icon'></img>
                                        </div>
                                    </Col>
                                    <Col lg={9} md={8} sm={8} xs={8}>
                                        <div className='status-stat-div'>
                                            <p className='total-paragraph'>Disabled/Suspended Users</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={3} md={4} sm={4} xs={4}>
                                        <p className='agent-stat-number-paragraph'>60</p>
                                    </Col>
                                    <Col lg={9} md={8} sm={8} xs={8}>
                                        <div className='status-stat-div'>
                                            <p className='agent-stat-percentages-decrease '><img src={arrow_down} alt='' className='gain-arrow-up'></img> 10% decrease</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                           </div>
                           
                        </Col>
                        <Col xs={6} sm={6} md={3} lg={3} className='stat-section-each-col'>
                            <Subs 
                            type={'sub-main'}
                            onclick={()=>navigate('/sub-ranking')}
                            heading={'Subscription'} title={'VIP'}/>
                        </Col>
                        <Col xs={6} sm={6} md={3} lg={3} className='stat-section-each-col'>
                            <Subs
                            onclick={()=>navigate('/booking-ranking')}
                            type={'sub-main'}
                            heading={'Booking'} title={'Book Now'}/>
                        </Col>
                        <Col xs={6} sm={6} md={3} lg={3} className='stat-section-each-col'>
                            <Subs
                            onclick={()=>navigate('/ecopoint-ranking')}
                            type={'sub-main'}
                            heading={'EcoPoint'} title={'Entry'}/>
                        </Col>
                    </Row>
            </div>
        </Col>
        {/* second section ends here */}

            {/* third section starts here */}
                <Col xs={12} sm={12} md={6} lg={6} style={{marginTop:25}}>
                    
                <div style={{fontWeight:'bolder' ,fontFamily:'Barlow'}}> Ongoing Request </div>
                        <div className='agent-listing-upper-div'>
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
