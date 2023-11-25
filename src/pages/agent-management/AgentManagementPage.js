import React, {useState} from 'react'
import { Row, Col, Dropdown, Modal, Table, Form } from 'react-bootstrap';
import bluestatbutton from '../../components/images/group_work.svg'
import calendaricon from '../../components/images/calendar-icon.svg'
import placeholderuserimage from '../../components/images/placeholder.svg'
import closeicon from '../../components/images/close.svg'
import thumbsup from '../../components/images/thumb_up.svg'
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import 'chart.js';
import ChartDataLabels from "chartjs-plugin-datalabels";
import "chartjs-plugin-datalabels";
import keyboardarrowdown from '../../components/images/keyboard_arrow_down.svg'
import memberscloseicon from '../../components/images/cancel-icon-members.svg'
import SuspendAgentModal from '../../components/SuspendAgentModal';
import DeleteModal from '../../components/DeleteModal';
import ThreeDotsDropdown from '../../components/ThreeDotsDropdown';
import TablePagination from '../../components/TablePagination';
import gainarrowup from '../../components/images/gain_arrow_drop_up.svg'
import { useNavigate } from 'react-router-dom';


const AgentManagementPage = ({setPage}) => {
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

    const agentReviewRatingData = {
        labels: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'],
        datasets: [{
            label: 'Frequency',
            data: [70, 85, 49, 65, 42],
            backgroundColor: [
              'rgba(2, 99, 255, 1)',
              'rgba(255, 119, 35, 1)',
              'rgba(142, 48, 255, 1)',
              'rgba(18, 64, 6, 1)',
              'rgba(124, 253, 191, 1)'
            ],
            borderWidth: 0,
            barThickness: 4,
        }],
    }
    
    const data = {
        labels: ['Book Later', 'Book Now', 'Subscription'],
        datasets: [{
            label: 'Frequency',
            data: [40, 88, 60],
            backgroundColor: [
              'rgba(2, 99, 255, 1)',
              'rgba(255, 119, 35, 1)',
              'rgba(142, 48, 255, 1)'
            ],
            borderWidth: 0,
            barThickness: 15,
        }],
    };
    
    const options = {
        indexAxis: 'y', // Display bars horizontally
        responsive: true,
        barValueSpacing: 20,
        plugins: {
            legend: {
              display: false,
            },
            datalabels: {
                display: true,
                color: "black",
                align: "end",
                anchor: "end",
                font: { size: "14" }
            }
        },
        type:'bar',
        scales: {
          x: {
            beginAtZero: true,
            grid: {
                display: false, 
                drawBorder: false,
            },
            border: {
                display: false,
            },
            ticks: {
                font: {
                    weight: 400,
                    size: 12
                }
            }
          },
          y: {
            grid: {
              display: false,
              drawBorder: false,
            },
            border: {
                display: false,
            },
            ticks: {
                font: {
                    weight: 400,
                    size: 12
                },
            }
          },
        },
        layout: {
            padding: {
                left: 0
            }
        },
        tooltips: {
            callbacks: {
               title: function() {}
            }
        },
    };
    const agentReviewRatingOptions = {
        indexAxis: 'y',
        responsive: true,
        barValueSpacing: 20,
        plugins: {
            legend: {
              display: false,
            },
            datalabels: {
                display: true,
                color: "black",
                align: "end",
                anchor: "end",
                font: { size: "14" }
            }
        },
        type:'bar',
        scales: {
          x: {
            beginAtZero: true,
            grid: {
                display: false, 
                drawBorder: false,
            },
            border: {
                display: false,
            },
            ticks: {
                font: {
                    weight: 400,
                    size: 12
                }
            }
          },
          y: {
            grid: {
              display: false,
              drawBorder: false,
            },
            border: {
                display: false,
            },
            ticks: {
                font: {
                    weight: 500,
                    size: 8
                },
            }
          },
        },
        layout: {
            padding: {
                left: 0
            }
        },
        tooltips: {
            callbacks: {
               title: function() {}
            }
        },
    };

    Chart.register(ChartDataLabels);

  return (
    <div>
        <Row>
            <Col xs={12} sm={12} md={12} lg={9}>
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
                                            <p className='total-paragraph'>Total</p>
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
                                            <p className='total-paragraph'>Available</p>
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
                                            <p className='total-paragraph'>Engaged</p>
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
                                            <p className='total-paragraph'>Total hours</p>
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
                    </Row>
                </div>

                <div className='agent-ranking-stat-div'>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} className='most-performance-agents-col'>
                            <div className='most-performance-agents-div'>
                                <div className='most-performance-agents-upper-grid-div'>
                                    <p>Most Performance Agents</p>
                                    <button className='all-rankings-button' onClick={() => {setPage('agent-ranking'); navigate('/agent-ranking')}}>All Rankings</button>
                                </div>
                                
                                <div className='most-performant-agents-bar-div'>
                                    <div className='most-perfomant-agents-grid-div'>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='most-perfomant-agents-placeholderuserimage'></img>
                                        <p>John</p>
                                        <div className='most-perfomant-agent-bar-div first-bar-div' style={{width: `${100}%`}}></div>
                                        <p>1st</p>
                                    </div>
                                    <div className='most-perfomant-agents-grid-div'>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='most-perfomant-agents-placeholderuserimage'></img>
                                        <p>John</p>
                                        <div className='most-perfomant-agent-bar-div second-bar-div' style={{width: `${80}%`}}></div>
                                        <p>2nd</p>
                                    </div>
                                    <div className='most-perfomant-agents-grid-div'>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='most-perfomant-agents-placeholderuserimage'></img>
                                        <p>John</p>
                                        <div className='most-perfomant-agent-bar-div third-bar-div' style={{width: `${60}%`}}></div>
                                        <p>3rd</p>
                                    </div>
                                    <div className='most-perfomant-agents-grid-div'>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='most-perfomant-agents-placeholderuserimage'></img>
                                        <p>John</p>
                                        <div className='most-perfomant-agent-bar-div fourth-bar-div' style={{width: `${40}%`}}></div>
                                        <p>4th</p>
                                    </div>
                                    <div className='most-perfomant-agents-grid-div'>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='most-perfomant-agents-placeholderuserimage'></img>
                                        <p>John</p>
                                        <div className='most-perfomant-agent-bar-div fifth-bar-div' style={{width: `${20}%`}}></div>
                                        <p>5th</p>
                                    </div>
                                </div>
                                
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} className='total-book-now-col'>
                            <div className='total-book-now-div'>
                                <p>Total Book Now, Later and Subscription</p>
                                <div className='bar-chart book-type-bar-chart-div'>
                                    <Bar
                                        data={data}
                                        width={null}
                                        height={null}
                                        options={options}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className='agent-listing-div'>
                    <div className='agent-listing-upper-div'>
                        <p className='agent-listing-paragraph'>Agent Listing</p>
                        <button className='agent-listing-see-all-button' onClick={() => {setPage('agent-listing'); navigate('/agent-listing')}}>See all</button>
                    </div>
                    <div className='agent-listing-table-div'>
                        <Table responsive className='agent-listing-table'>
                            <thead className='agent-listing-table-head'>
                                <tr>
                                    <th style={{borderRadius: '10px 0px 0px 10px'}}>#</th>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Badge ID</th>
                                    <th>Status</th>
                                    <th style={{borderRadius: '0px 10px 10px 0px'}}>Action</th>
                                </tr>
                            </thead>
                            <tbody className='agent-listing-table-body'>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image'></img>
                                    </td>
                                    <td>John Peterson</td>
                                    <td><div className='agent-listing-row-category-div'>A1</div></td>
                                    <td>CTA01234567</td>
                                    <td><div className='agent-listing-row-status-div'>Active</div></td>
                                    <td>
                                        <ThreeDotsDropdown 
                                            navigate={navigate}
                                            setIsSuspendAgentModalVisible={setIsSuspendAgentModalVisible}
                                            setIsDeleteModalVisible={setIsDeleteModalVisible}
                                            page={page}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image'></img>
                                    </td>
                                    <td>John Peterson</td>
                                    <td><div className='agent-listing-row-category-div'>A1</div></td>
                                    <td>CTA01234567</td>
                                    <td><div className='agent-listing-row-status-div'>Active</div></td>
                                    <td>
                                        <ThreeDotsDropdown 
                                            navigate={navigate}
                                            setIsSuspendAgentModalVisible={setIsSuspendAgentModalVisible}
                                            setIsDeleteModalVisible={setIsDeleteModalVisible}
                                            page={page}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <TablePagination/>
                    </div>
                </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={3} className='agent-review-col'>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={12}>
                        <div className='agent-review-div'>
                            <p>Agents Review</p>
                            <div className='bar-chart agent-review-barchart-div'>
                                <Bar
                                    data={agentReviewRatingData}
                                    width={null}
                                    height={null}
                                    options={agentReviewRatingOptions}
                                />
                            </div>
                            <button className='all-reviews-button'>All Reviews</button>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={12}>
                        <div className='agents-cohort-div'>
                            <div>
                                <Dropdown className='time-range-dropdown agent-management-time-range-dropdown'>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='time-range-dropdown-button'>
                                        <img src={calendaricon} alt='Calendar Icon' className='dropdown-calendar-icon'></img> 1cohort0723
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => {setPage('cohort-listing'); navigate('/cohort-listing')}}>Cohort Listing</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div style={{marginTop: '70px'}}>
                                <Row style={{marginTop: '10px'}}>
                                    <Col lg={3} md={3} sm={2} xs={2}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Col>
                                    <Col lg={9} md={9} sm={10} xs={10}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '10px'}}>
                                    <Col lg={3} md={3} sm={2} xs={2}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Col>
                                    <Col lg={9} md={9} sm={10} xs={10}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '10px'}}>
                                    <Col lg={3} md={3} sm={2} xs={2}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Col>
                                    <Col lg={9} md={9} sm={10} xs={10}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '10px'}}>
                                    <Col lg={3} md={3} sm={2} xs={2}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Col>
                                    <Col lg={9} md={9} sm={10} xs={10}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Col>
                                </Row>
                            </div>
                            <div className='agents-cohort-buttons-div'>
                                <button className='add-cohort-button' onClick={() => setIsAddCohortsModalVisible(true)}>Add Cohort</button>
                                <button className='agent-cohort-view-details'>View details</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>

        <Modal show={isAddCohortsModalVisible} onHide={() => setIsAddCohortsModalVisible(false)} className='add-cohort-modal'>
            <Modal.Body>
                <div className='modal-outer'>
                    <div className='modal-inner'>
                        <img src={closeicon} alt='Close Icon' className='close-icon' onClick={() => setIsAddCohortsModalVisible(false)}></img>
                        <div className='modal-content-div'>
                            <p className='add-a-new-cohort-paragraph'>Add a new cohort</p>
                            <form className='add-cohort-form' onSubmit={addToCohort}>
                                <div className='add-cohort-text-input-div'>
                                    <input placeholder='Cohort Name' className='add-cohort-text-input'></input>
                                    <input placeholder='Date Created' className='add-cohort-text-input'></input>
                                </div>
                                <div className='add-cohort-member-div'>
                                    <p className='members-paragraph'>Members</p>
                                    <div className='members-list-div'>
                                        <div className='members-list-each-div'>
                                            <span>John Peterson</span>
                                            <img src={memberscloseicon} alt='Member Close Icon' className='member-close-icon'></img>
                                        </div>
                                        <div className='members-list-each-div'>
                                            <span>John Peterson</span>
                                            <img src={memberscloseicon} alt='Member Close Icon' className='member-close-icon'></img>
                                        </div>
                                        <img src={keyboardarrowdown} alt='Keyboard Arrow Down Icon' className='keyboard-arrow-down-icon'></img>
                                    </div>
                                </div>
                                <div className='add-cohort-checkbox-div'>
                                    <div className='add-cohort-each-user-div'>
                                        <img src={placeholderuserimage} alt='' className='add-cohort-user-image'></img>
                                        <span>John Peterson</span>
                                        <Form>
                                            <Form.Check type='checkbox'></Form.Check>
                                        </Form>
                                    </div>
                                    <div className='add-cohort-each-user-div'>
                                        <img src={placeholderuserimage} alt='' className='add-cohort-user-image'></img>
                                        <span>John Peterson</span>
                                        <Form>
                                            <Form.Check type='checkbox'></Form.Check>
                                        </Form>
                                    </div>
                                    <div className='add-cohort-each-user-div'>
                                        <img src={placeholderuserimage} alt='' className='add-cohort-user-image'></img>
                                        <span>John Peterson</span>
                                        <Form>
                                            <Form.Check type='checkbox'></Form.Check>
                                        </Form>
                                    </div>
                                </div>
                                <button className='add-cohort-form-button' type='submit' name='submit'>ADD</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>

        <Modal show={isCohortCreatedSuccessfulModalVisible} onHide={() => setIsCohortCreatedSuccessfulModalVisible(false)} className='cohort-created-modal'>
            <Modal.Body>
                <div className='modal-outer'>
                    <div className='modal-inner'>
                        <img src={closeicon} alt='Close Icon' className='close-icon' onClick={() => setIsCohortCreatedSuccessfulModalVisible(false)}></img>
                        <div className='modal-content-div cohort-created-div'>
                            <img src={thumbsup} alt='Thumbs Up Icon' className='thumbsup-icon-image'></img>
                            <p className='cohort-created-paragraph'>Cohort created successfully</p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>

        <DeleteModal 
            isDeleteModalVisible={isDeleteModalVisible} 
            setIsDeleteModalVisible={setIsDeleteModalVisible} 
            page={page}
        />
        <SuspendAgentModal 
            isSuspendAgentModalVisible={isSuspendAgentModalVisible}
            setIsSuspendAgentModalVisible={setIsSuspendAgentModalVisible}
            page={page}
        />
    </div>
  )
}

export default AgentManagementPage