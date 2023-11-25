import React, {useState} from 'react'
import './styles.css'
import placeholderuserimage from '../../assets/images/placeholder.svg'
import closeicon from '../../assets/icons/close.svg'
import thumbsup from '../../assets/icons/thumb_up.svg'
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import 'chart.js';
import ChartDataLabels from "chartjs-plugin-datalabels";
import "chartjs-plugin-datalabels";
import keyboardarrowdown from '../../assets/icons/keyboard_arrow_down.svg'
import memberscloseicon from '../../assets/icons/cancel-icon-members.svg'
import SuspendAgentModal from '../../components/SuspendAgentModal';
import DeleteModal from '../../components/DeleteModal';
import ThreeDotsDropdown from '../../components/ThreeDotsDropdown';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import BlueButtonGainLossCard from '../../components/BlueButtonGainLossCard';
import ModalLayout from '../../components/ModalLayout';
import ButtonDropdown from '../../components/ButtonDropdown';
import GreenCheckbox from '../../components/GreenCheckbox';
import TableLayout from '../../components/TableLayout'


const AgentManagementPage = ({setPage}) => {
    const navigate = useNavigate()
    const[isAddCohortsModalVisible, setIsAddCohortsModalVisible] = useState(false)
    const[isCohortCreatedSuccessfulModalVisible, setIsCohortCreatedSuccessfulModalVisible] = useState(false)
    const[isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
    const[isSuspendAgentModalVisible, setIsSuspendAgentModalVisible] = useState(false)

    const page = 'agent-management'
    const section = 'agent-management'

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
    <div className='agent-management-div'>
        <Grid container spacing={1.5}>
            <Grid item xs={12} sm={12} md={12} lg={9}>
                <ButtonDropdown page={page}/>

                <div className='agent-stats-content-div'>
                    <Grid container spacing={1.5}>
                        <Grid item xs={6} sm={6} md={3} lg={3}>
                            <BlueButtonGainLossCard 
                                name={'Total'}
                                number={'60'}
                                status={'gain'}
                                percent={'10'}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3}>
                            <BlueButtonGainLossCard 
                                name={'Available'}
                                number={'60'}
                                status={'loss'}
                                percent={'10'}
                            />
                        </Grid>                     
                        <Grid item xs={6} sm={6} md={3} lg={3}>
                            <BlueButtonGainLossCard 
                                name={'Engaged'}
                                number={'60'}
                                status={'gain'}
                                percent={'10'}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3}>
                            <BlueButtonGainLossCard 
                                name={'Total hours'}
                                number={'60'}
                                status={'loss'}
                                percent={'10'}
                            />
                        </Grid>
                    </Grid>
                </div>

                <div className='agent-ranking-stat-div'>
                    <Grid container spacing={1.5}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <div className='most-performance-agents-div'>
                                <div className='most-performance-agents-upper-grid-div'>
                                    <p>Most Performance Agents</p>
                                    <button className='all-rankings-button' onClick={() => {setPage('/agent-management/agent-ranking'); navigate('/agent-management/agent-ranking')}}>All Rankings</button>
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
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} className='total-book-now-col'>
                            <div className='total-book-now-div'>
                                <p>Total Book Now, Later and Subscription</p>
                                <div className='bar-chart'>
                                    <Bar
                                        data={data}
                                        width={null}
                                        height={null}
                                        options={options}
                                    />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div className='agent-listing-div'>
                    <div className='agent-listing-upper-div'>
                        <p className='agent-listing-paragraph'>Agent Listing</p>
                        <button className='agent-listing-see-all-button see-all-button' onClick={() => {setPage('/agent-management/agent-listing'); navigate('/agent-management/agent-listing')}}>See all</button>
                    </div>
                    <div className='agent-listing-table-div'>
                        <TableLayout
                            headData={['#', 'Photo', 'Name', 'Category', 'Badge ID', 'Status', 'Action']}
                            bodyData={[
                                '1',
                                <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image'></img>,
                                'John Peterson',
                                <div className='agent-listing-row-category-div'>A1</div>,
                                'TA01234567',
                                <div className='table-green-text-status-div'>Active</div>,
                                <ThreeDotsDropdown 
                                    navigate={navigate}
                                    setIsSuspendAgentModalVisible={setIsSuspendAgentModalVisible}
                                    setIsDeleteModalVisible={setIsDeleteModalVisible}
                                    page={page}
                                    setPage={setPage}
                                    section={section}
                                />

                            ]}
                            dataObject={{}}
                        />
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3} className='agent-review-col'>
                <Grid container spacing={1.5}>
                    <Grid item xs={12} sm={12} md={6} lg={12}>
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
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={12}>
                        <div className='agents-cohort-div'>
                            <div>
                                {/* <Dropdown className='time-range-dropdown agent-management-time-range-dropdown'>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='time-range-dropdown-button'>
                                        <img src={calendaricon} alt='Calendar Icon' className='dropdown-calendar-icon'></img> 1cohort0723
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => {setPage('/agent-management/cohort-listing'); navigate('/agent-management/cohort-listing')}}>Cohort Listing</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown> */}
                                <ButtonDropdown page={'agent-management/cohort-listing'} setPage={setPage} navigate={navigate}/>
                            </div>
                            <div style={{marginTop: '50px'}}>
                                <Grid container spacing={1.5} style={{marginTop: '10px'}}>
                                    <Grid item lg={3} md={3} sm={2} xs={2}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Grid>
                                    <Grid item lg={9} md={9} sm={10} xs={10}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1.5} style={{marginTop: '10px'}}>
                                    <Grid item lg={3} md={3} sm={2} xs={2}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Grid>
                                    <Grid item lg={9} md={9} sm={10} xs={10}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1.5} style={{marginTop: '10px'}}>
                                    <Grid item lg={3} md={3} sm={2} xs={2}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Grid>
                                    <Grid item lg={9} md={9} sm={10} xs={10}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1.5} style={{marginTop: '10px'}}>
                                    <Grid item lg={3} md={3} sm={2} xs={2}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Grid>
                                    <Grid item lg={9} md={9} sm={10} xs={10}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className='agents-cohort-buttons-div'>
                                <button className='add-cohort-button' onClick={() => setIsAddCohortsModalVisible(true)}>Add Cohort</button>
                                <button className='agent-cohort-view-details'>View details</button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        <ModalLayout
            size={'large'}
            state={isAddCohortsModalVisible}
            stateFunction={setIsAddCohortsModalVisible}
            content={
                <>
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
                                    <GreenCheckbox/>
                                </div>
                                <div className='add-cohort-each-user-div'>
                                    <img src={placeholderuserimage} alt='' className='add-cohort-user-image'></img>
                                    <span>John Peterson</span>
                                    <GreenCheckbox/>
                                </div>
                                <div className='add-cohort-each-user-div'>
                                    <img src={placeholderuserimage} alt='' className='add-cohort-user-image'></img>
                                    <span>John Peterson</span>
                                    <GreenCheckbox/>
                                </div>
                            </div>
                            <button className='add-cohort-form-button' type='submit' name='submit'>ADD</button>
                    </form>
                </>
            }
        />

        <Dialog open={isCohortCreatedSuccessfulModalVisible} onClose={() => setIsCohortCreatedSuccessfulModalVisible(false)} className='small-modal'>
            <DialogContent>
                <div className='modal-outer'>
                    <div className='modal-inner'>
                        <img src={closeicon} alt='Close Icon' className='close-icon' onClick={() => setIsCohortCreatedSuccessfulModalVisible(false)}></img>
                        <div className='modal-content-div action-modal-div '>
                            <img src={thumbsup} alt='Thumbs Up Icon' className='thumbsup-icon-image'></img>
                            <p className='successful-modal-paragraph'>Cohort created successfully</p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>

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