import React, {useState} from 'react'
import { Dropdown, Table, Form } from 'react-bootstrap'
import calendaricon from '../../components/images/calendar-icon.svg'
import FilterSearch from '../../components/FilterSearch';
import BreadCrumb from '../../components/BreadCrumb';
import SuspendAgentModal from '../../components/SuspendAgentModal';
import TablePagination from '../../components/TablePagination';
import placeholderuserimage from '../../components/images/placeholder.svg'
import AgentDemographics from './AgentDemographics';
import ThreeDotsDropdown from '../../components/ThreeDotsDropdown';
import { useNavigate } from 'react-router-dom';
import DeleteModal from '../../components/DeleteModal';



const CohortListing = ({setPage}) => {
    const navigate = useNavigate()
    const page = 'cohort-listing'
    const[isCohortStatisticsActive, setIsCohortStatisticsActive] = useState(true)
    const[isSuspendAgentModalVisible, setIsSuspendAgentModalVisible] = useState(false)
    const[isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)

  return (
    <div>
        <BreadCrumb page={page}/>

        <div className='cohort-listing-upper-div'>
            <Dropdown className='cohort-listing-time-range-dropdown'>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className='time-range-dropdown-button'>
                    <img src={calendaricon} alt='Calendar Icon' className='dropdown-calendar-icon'></img> 1cohort0723
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <div>
                <p className='total-cohort-paragraph'>Total cohort: 500</p>
            </div>
        </div>

        <div className='listing-button-tab-div'>
            <button onClick={() => setIsCohortStatisticsActive(true)} className={isCohortStatisticsActive ? 'active' : ''}>Demographics</button>
            <button onClick={() => setIsCohortStatisticsActive(false)} className={!isCohortStatisticsActive ? 'active' : ''}>Listing</button>
        </div>
        <div className='cohort-listing-body-div'>
            {isCohortStatisticsActive ? 
                <div>
                    <AgentDemographics/>
                </div> : 
                <div>
                    <div className='listing-body-upper-div'>
                        <FilterSearch/>
                        <div className='listing-stats-paragraphs-div'>
                            <p>Total Agents:  1000</p>
                            <p>Active:  700</p>
                            <p>Inactive:  300</p>
                        </div>
                    </div>
                    
                    <div className='agent-listing-table-div'>
                        <Table responsive className='agent-listing-table'>
                            <thead className='agent-listing-table-head'>
                                <tr>
                                    <th></th>
                                    <th style={{borderRadius: '10px 0px 0px 10px'}}>#</th>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Sex</th>
                                    <th>Year of Birth</th>
                                    <th>Location</th>
                                    <th>Status</th>
                                    <th style={{borderRadius: '0px 10px 10px 0px'}}>Action</th>
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
                                        <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image'>
                                    </img></td>
                                    <td>John Peterson</td>
                                    <td>Female</td>
                                    <td>08/25/2000</td>
                                    <td>Jouvence</td>
                                    <td><div className='agent-listing-row-status-div'>Active</div></td>
                                    <td>
                                        <ThreeDotsDropdown
                                            page={page}
                                            navigate={navigate}
                                            setIsSuspendAgentModalVisible={setIsSuspendAgentModalVisible}
                                            setIsDeleteModalVisible={setIsDeleteModalVisible}
                                            setPage={setPage}
                                        />
                                        
                                    </td>
                                </tr>
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
                                    <td>Female</td>
                                    <td>08/25/2000</td>
                                    <td>Jouvence</td>
                                    <td><div className='agent-listing-row-status-div'>Active</div></td>
                                    <td>
                                        <ThreeDotsDropdown
                                            page={page}
                                            navigate={navigate}
                                            setIsSuspendAgentModalVisible={setIsSuspendAgentModalVisible}
                                            setIsDeleteModalVisible={setIsDeleteModalVisible}
                                            setPage={setPage}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <TablePagination/>
                    </div>
                </div>
            }
        </div>

        <DeleteModal 
          isDeleteModalVisible={isDeleteModalVisible} 
          setIsDeleteModalVisible={setIsDeleteModalVisible}
          page={page}
        />
        <SuspendAgentModal 
            isSuspendAgentModalVisible={isSuspendAgentModalVisible} 
            setIsSuspendAgentModalVisible={setIsSuspendAgentModalVisible}
        />
    </div>
  )
}

export default CohortListing