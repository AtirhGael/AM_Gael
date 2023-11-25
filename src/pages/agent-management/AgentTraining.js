import React, {useState} from 'react'
import FilterSearch from '../../components/FilterSearch'
import { Modal, Dropdown, Table, Form } from 'react-bootstrap'
import closeicon from '../../components/images/close.svg'
import calendarmonthicon from '../../components/images/calendar_month.svg'
import BreadCrumb from '../../components/BreadCrumb'
import calendaricon from '../../components/images/calendar-icon.svg'
import ThreeDotsDropdown from '../../components/ThreeDotsDropdown'
import DeleteModal from '../../components/DeleteModal'
import SuspendAgentModal from '../../components/SuspendAgentModal'
import TablePagination from '../../components/TablePagination'


const AgentTraining = () => {
    const page = 'agent-training'
    const[isTrainingScheduleModalVisible, setIsTrainingScheduleModalVisible] = useState(false)
    const[isSuspendAgentModalVisible, setIsSuspendAgentModalVisible] = useState(false)
    const[isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
    const[isAddIdCertNumberModalVisible, setIsAddIdCertNumberModalVisible] = useState(false)
    const[isAgentAttendaceModalVisible, setIsAgentAttendaceModalVisible] = useState(false)

    const[weekCounter, setWeekCounter] = useState(3)

  return (
    <div>
        <BreadCrumb page={page}/>

        <div className='agent-training-upper-buttons-grid-div'>
            <button className='add-an-agent-button'>Add an agent</button>
            <button className='set-training-schedule-button' onClick={() => setIsTrainingScheduleModalVisible(true)}>Set training schedule</button>
            <Dropdown className=''>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className='time-range-dropdown-button'>
                    <img src={calendaricon} alt='Calendar Icon' className='dropdown-calendar-icon'></img> Cohort1
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
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
          <Table responsive className='agent-listing-table'>
            <thead className='agent-listing-table-head'>
              <tr className='agent-training-head-row'>
                <th style={{borderRadius: '10px 0px 0px 10px'}}></th>
                <th>#</th>
                <th>Photo</th>
                <th>Location</th>
                <th>Progress</th>
                <th>Status</th>
                <th>Badge ID</th>
                <th>Cert Number</th>
                <th>Status</th>
                <th style={{borderRadius: '0px 10px 10px 0px'}}>Action</th>
              </tr>
            </thead>
            <tbody className='agent-listing-table-body'>
                <tr className='agent-training-body-row'>
                    <td className='agent-training-body-row-td'>
                        <Form>
                            <Form.Check type='checkbox'></Form.Check>
                        </Form>
                    </td>
                    <td>1</td>
                    <td>1</td>
                    <td>John Peterson</td>
                    <td>
                        <div className='progress-outer-div'>
                            <div className='progress-inner-div'></div>
                        </div>
                    </td>
                    <td><div className='agent-listing-row-status-div training-table-status-div'>3 days left</div></td>
                    <td>CTA01234567</td>  
                    <td>N/A</td>
                    <td><div className='agent-listing-row-status-div'>Active</div></td>
                      <td>
                        <ThreeDotsDropdown 
                          setIsSuspendAgentModalVisible={setIsSuspendAgentModalVisible}
                          page={page}
                          setIsAddIdCertNumberModalVisible={setIsAddIdCertNumberModalVisible}
                          setIsAgentAttendaceModalVisible={setIsAgentAttendaceModalVisible}
                          setIsDeleteModalVisible={setIsDeleteModalVisible}
                        />                
                      </td>
                </tr>
                <tr>
                    <td className='agent-training-body-row-td'>
                        <Form>
                            <Form.Check type='checkbox'></Form.Check>
                        </Form>
                    </td>
                    <td>1</td>
                    <td>1</td>
                      <td>John Peterson</td>
                      <td>
                        <div className='progress-outer-div'>
                            <div className='progress-inner-div'></div>
                        </div>
                        </td>
                      <td><div className='agent-listing-row-status-div training-table-status-div'>Completed</div></td>
                      <td>CTA01234567</td>  
                      <td>N/A</td>
                      <td><div className='agent-listing-row-status-div'>Active</div></td>
                      <td>
                        <ThreeDotsDropdown 
                          setIsSuspendAgentModalVisible={setIsSuspendAgentModalVisible}
                          page={page}
                          setIsAddIdCertNumberModalVisible={setIsAddIdCertNumberModalVisible}
                          setIsAgentAttendaceModalVisible={setIsAgentAttendaceModalVisible}
                          setIsDeleteModalVisible={setIsDeleteModalVisible}
                        />                
                      </td>
                  </tr>
                </tbody>
            </Table>
            <TablePagination/>
        </div>
        
        <Modal show={isTrainingScheduleModalVisible} onHide={() => setIsTrainingScheduleModalVisible(false)}>
            <Modal.Body>
                <div className='modal-outer training-modal-div'>
                    <div className='modal-inner'>
                        <img src={closeicon} alt='Close Icon' className='close-icon' onClick={() => setIsTrainingScheduleModalVisible(false)}></img>
                        <div className='modal-content-div training-modal-content-div'>
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
                                <Form>
                                    <div className='training-modal-each-radio-div'>                                    
                                        <Form.Check type='radio'></Form.Check>
                                        <span>Endless</span>
                                    </div>
                                    <div className='training-modal-each-radio-div'>
                                        <Form.Check type='radio'></Form.Check>
                                        <span>End On</span>
                                    </div>
                                </Form>
                            </div>
                            <div className='training-modal-input-div'>
                                <input placeholder='End Date'></input>
                                <img src={calendarmonthicon} alt='Calendar Month Icon' className='calendar-month-icon'></img>
                            </div>
                        </div>
                    </div>
                    <div className='modal-prompt-div training-modal-prompt-div'>
                        <button className='modal-cancel-button modal-prompt-button' onClick={() => setIsTrainingScheduleModalVisible(false)}>Cancel</button>
                        <button className='modal-done-button modal-prompt-button'>Done</button>  
                    </div>
                </div>
            </Modal.Body>
        </Modal>

        <Modal show={isAddIdCertNumberModalVisible} onHide={() => setIsAddIdCertNumberModalVisible(false)}>
            <Modal.Body>
                <div className='modal-outer training-modal-div'>
                    <div className='modal-inner'>
                        <img src={closeicon} alt='Close Icon' className='close-icon' onClick={() => setIsAddIdCertNumberModalVisible(false)}></img>
                        <div className='modal-content-div training-modal-content-div'>
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
                    </div>
                </div>
            </Modal.Body>
        </Modal>

        <Modal show={isAgentAttendaceModalVisible} onHide={() => setIsAgentAttendaceModalVisible(false)}>
            <Modal.Body>
                <div className='modal-outer training-modal-div'>
                    <div className='modal-inner'>
                        <img src={closeicon} alt='Close Icon' className='close-icon' onClick={() => setIsAgentAttendaceModalVisible(false)}></img>
                        <div className='modal-content-div training-modal-content-div'>
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

export default AgentTraining