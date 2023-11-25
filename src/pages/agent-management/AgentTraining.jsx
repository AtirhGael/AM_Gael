import React, {useState} from 'react'
import './styles.css'
import FilterSearch from '../../components/FilterSearch'
import { Form } from 'react-bootstrap'
import calendarmonthicon from '../../assets/icons/calendar_month.svg'
import BreadCrumb from '../../components/BreadCrumb'
import ThreeDotsDropdown from '../../components/ThreeDotsDropdown'
import DeleteModal from '../../components/DeleteModal'
import SuspendAgentModal from '../../components/SuspendAgentModal'
import TablePagination from '../../components/TablePagination'
import GreenCheckbox from '../../components/GreenCheckbox'
import ModalLayout from '../../components/ModalLayout'
import ButtonDropdown from '../../components/ButtonDropdown'
import { Table, TableBody, TableCell, TableHead, TableRow, Radio, FormControlLabel, FormControl, RadioGroup } from '@mui/material';


const AgentTraining = () => {
    const page = 'agent-training'
    const section = 'agent-management'
    const[isTrainingScheduleModalVisible, setIsTrainingScheduleModalVisible] = useState(false)
    const[isSuspendAgentModalVisible, setIsSuspendAgentModalVisible] = useState(false)
    const[isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
    const[isAddIdCertNumberModalVisible, setIsAddIdCertNumberModalVisible] = useState(false)
    const[isAgentAttendanceModalVisible, setIsAgentAttendanceModalVisible] = useState(false)

    const[weekCounter, setWeekCounter] = useState(3)

  return (
    <div>
        <BreadCrumb pageData={'Training Agent'} sectionData={'Agent Management'}/>

        <div className='agent-training-upper-buttons-grid-div'>
            <button className='add-an-agent-button'>Add an agent</button>
            <button className='set-training-schedule-button' onClick={() => setIsTrainingScheduleModalVisible(true)}>Set training schedule</button>
            <ButtonDropdown page={page}/>
        </div>

        <div className='listing-body-upper-div'>
            <FilterSearch/>
            <div className='listing-stats-paragraphs-div'>
                <p>Total Agents:  1000</p>
                <p>Active:  700</p>
                <p>Inactive:  300</p>
            </div>
        </div>

        <div className='agent-listing-table-div agent-training-listing-table'>
            <div className='table-outer-div'>
                <div className='table-inner-div'>
                    <Table className='agent-listing-table' aria-label='Agent Listing Table'>
                        <TableHead>
                            <TableRow className='agent-training-head-row'>
                                <TableCell style={{ borderRadius: '10px 0px 0px 10px' }}></TableCell>
                                <TableCell>#</TableCell>
                                <TableCell>Photo</TableCell>
                                <TableCell>Location</TableCell>
                                <TableCell>Progress</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Badge ID</TableCell>
                                <TableCell>Cert Number</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell style={{ borderRadius: '0px 10px 10px 0px' }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className='agent-listing-table-body'>
                            <TableRow className='agent-training-body-row'>
                                <TableCell className='agent-training-body-row-td'>
                                    <GreenCheckbox/>
                                </TableCell>
                                <TableCell>1</TableCell>
                                <TableCell>1</TableCell>
                                <TableCell>John Peterson</TableCell>
                                <TableCell>
                                <div className='progress-outer-div'>
                                    <div className='progress-inner-div'></div>
                                </div>
                                </TableCell>
                                <TableCell>
                                    <div className='table-green-text-status-div'>3 days left</div>
                                </TableCell>
                                <TableCell>CTA01234567</TableCell>
                                <TableCell>N/A</TableCell>
                                <TableCell>
                                <div className='table-green-text-status-div'>Active</div>
                                </TableCell>
                                <TableCell>
                                <ThreeDotsDropdown
                                    setIsSuspendAgentModalVisible={setIsSuspendAgentModalVisible}
                                    page={page}
                                    setIsAddIdCertNumberModalVisible={setIsAddIdCertNumberModalVisible}
                                    setIsAgentAttendanceModalVisible={setIsAgentAttendanceModalVisible}
                                    setIsDeleteModalVisible={setIsDeleteModalVisible}
                                    section={section}
                                />
                                </TableCell>
                            </TableRow>
                            <TableRow className='agent-training-body-row'>
                                <TableCell className='agent-training-body-row-td'>
                                    <GreenCheckbox/>
                                </TableCell>
                                <TableCell>1</TableCell>
                                <TableCell>1</TableCell>
                                <TableCell>John Peterson</TableCell>
                                <TableCell>
                                <div className='progress-outer-div'>
                                    <div className='progress-inner-div'></div>
                                </div>
                                </TableCell>
                                <TableCell>
                                <div className='table-green-text-status-div'>Completed</div>
                                </TableCell>
                                <TableCell>CTA01234567</TableCell>
                                <TableCell>N/A</TableCell>
                                <TableCell>
                                <div className='table-green-text-status-div'>Active</div>
                                </TableCell>
                                <TableCell>
                                <ThreeDotsDropdown
                                    setIsSuspendAgentModalVisible={setIsSuspendAgentModalVisible}
                                    page={page}
                                    setIsAddIdCertNumberModalVisible={setIsAddIdCertNumberModalVisible}
                                    setIsAgentAttendanceModalVisible={setIsAgentAttendanceModalVisible}
                                    setIsDeleteModalVisible={setIsDeleteModalVisible}
                                    section={section}
                                />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <TablePagination/>
            </div> 
        </div>
        
        <ModalLayout
            size={'small'}
            state={isTrainingScheduleModalVisible}
            stateFunction={setIsTrainingScheduleModalVisible}
            content={
                <>
                    <div className='training-modal-content-div'>
                        <p className='set-training-schedule-paragraph modal-heading-para'>Set Training Schedule</p>
                        <div className='training-modal-input-div'>
                            <input placeholder='Start Date'></input>
                            <img src={calendarmonthicon} alt='Calendar Month Icon' className='calendar-month-icon'></img>
                        </div>
                        <div className='training-modal-incremental-week-grid-div'>
                            <span>Occurs every</span>
                            <div className='training-modal-incremental-week-div'>
                                <button onClick={() => {if(weekCounter > 1) {setWeekCounter(weekCounter - 1)}}}>-</button>
                                <span>{weekCounter}</span>
                                <button onClick={() => {setWeekCounter(weekCounter + 1)}}>+</button>
                            </div>
                            <span className='training-modal-incremental-weeks-span'>Week(s)</span>
                        </div>
                        <div className='days-grid-div'>
                            <div className='active-day-div'>
                                <span>S</span>
                            </div>
                            <div className='active-day-div'>
                                <span>M</span>
                            </div>
                            <div className='inactive-day-div'>
                                <span>T</span>
                            </div>
                            <div className='inactive-day-div'>
                                <span>W</span>
                            </div>
                            <div className='inactive-day-div'>
                                <span>T</span>
                            </div>
                            <div className='active-day-div'>
                                <span>F</span>
                            </div>
                            <div className='inactive-day-div'>
                                <span>S</span>
                            </div>
                        </div>
                        <div className='training-modal-radio-div'>
                            <p>Ending Time</p>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                >
                                    <FormControlLabel value="Endless" control={<Radio sx={{color: 'rgba(76, 172, 62, 1)', '&.Mui-checked': {color: 'rgba(76, 172, 62, 1)',}, }}/>} label="Endless" />
                                    <FormControlLabel value="End On" control={<Radio sx={{color: 'rgba(76, 172, 62, 1)', '&.Mui-checked': {color: 'rgba(76, 172, 62, 1)',}, }}/>} label="End On" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className='training-modal-input-div'>
                            <input placeholder='End Date'></input>
                            <img src={calendarmonthicon} alt='Calendar Month Icon' className='calendar-month-icon'></img>
                        </div>
                    </div>   
                </>
            }
        />

        <ModalLayout
            size={'small'}
            state={isAddIdCertNumberModalVisible}
            stateFunction={setIsAddIdCertNumberModalVisible}
            content={
                <>
                    <div className='training-modal-content-div'>
                        <p className='modal-heading-para'>Add ID/Cert Number</p>
                        <form>
                            <div className='training-modal-input-div add-id-cert-number-modal-input-div'>
                                <input placeholder='Badge ID'></input>
                            </div>
                            <input type='checkbox' className='add-id-cert-checkbox'></input> <span>Auto-generate badge ID</span>
                            <div className='training-modal-input-div add-id-cert-number-modal-input-div'>
                                <input placeholder='Certificate Number'></input>
                            </div>
                            <input type='checkbox' className='add-id-cert-checkbox'></input> <span>Auto-generate certificate number</span>
                            <button className='add-id-cert-modal-form-button'>Create</button>
                        </form>
                    </div>
                </>
            }
        />

        <ModalLayout
            size={'small'}
            state={isAgentAttendanceModalVisible}
            stateFunction={setIsAgentAttendanceModalVisible}
            content={
                <>
                   <div className='training-modal-content-div'>
                        <p className='modal-heading-para'>Agents Attendance</p>
                        <form className='agent-attendance-modal-form'>
                            <div className='availability-day-grid-div'>
                                <p>Mon</p>
                                <div className='checked-div'>
                                    <Form>
                                        <Form.Check type='checkbox'></Form.Check>
                                    </Form>
                                </div>
                                <div className='unchecked-div agent-attedance-uncheck-div'>
                                    <Form>
                                        <Form.Check type='checkbox'></Form.Check>
                                    </Form>
                                </div>
                            </div>
                            <div className='availability-day-grid-div'>
                                <p>Tue</p>
                                <div className='checked-div'>
                                    <Form>
                                        <Form.Check type='checkbox'></Form.Check>
                                    </Form>
                                </div>
                                <div className='unchecked-div agent-attedance-uncheck-div'>
                                    <Form>
                                        <Form.Check type='checkbox'></Form.Check>
                                    </Form>
                                </div>
                            </div>
                            <div className='availability-day-grid-div'>
                                <p>Wed</p>
                                <div className='checked-div'>
                                    <Form>
                                        <Form.Check type='checkbox'></Form.Check>
                                    </Form>
                                </div>
                                <div className='unchecked-div agent-attedance-uncheck-div'>
                                    <Form>
                                        <Form.Check type='checkbox'></Form.Check>
                                    </Form>
                                </div>
                            </div>
                            <div className='availability-day-grid-div'>
                                <p>Thu</p>
                                <div className='checked-div'>
                                    <Form>
                                        <Form.Check type='checkbox'></Form.Check>
                                    </Form>
                                </div>
                                <div className='unchecked-div agent-attedance-uncheck-div'>
                                    <Form>
                                        <Form.Check type='checkbox'></Form.Check>
                                    </Form>
                                </div>
                            </div>
                            <div className='availability-day-grid-div'>
                                <p>Fri</p>
                                <div className='checked-div'>
                                    <Form>
                                        <Form.Check type='checkbox'></Form.Check>
                                    </Form>
                                </div>
                                <div className='unchecked-div agent-attedance-uncheck-div'>
                                    <Form>
                                        <Form.Check type='checkbox'></Form.Check>
                                    </Form>
                                </div>
                            </div>
                            <div className='availability-day-grid-div'>
                                <p>Sat</p>
                                <div className='checked-div'>
                                    <Form>
                                        <Form.Check type='checkbox'></Form.Check>
                                    </Form>
                                </div>
                                <div className='unchecked-div agent-attedance-uncheck-div'>
                                    <Form>
                                        <Form.Check type='checkbox'></Form.Check>
                                    </Form>
                                </div>
                            </div>
                            <div className='availability-day-grid-div'>
                                <p>Sun</p>
                                <div className='checked-div'>
                                    <Form>
                                        <Form.Check type='checkbox'></Form.Check>
                                    </Form>
                                </div>
                                <div className='unchecked-div agent-attedance-uncheck-div'>
                                    <Form>
                                        <Form.Check type='checkbox'></Form.Check>
                                    </Form>
                                </div>
                            </div>
                        </form>
                        <button className='agent-attendance-button'>Done</button>
                    </div> 
                </>
            }
        />

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

export default AgentTraining