import React, {useState} from 'react'
import './styles.css'
import FilterSearch from '../../components/FilterSearch';
import BreadCrumb from '../../components/BreadCrumb';
import SuspendAgentModal from '../../components/SuspendAgentModal';
import TablePagination from '../../components/TablePagination';
import placeholderuserimage from '../../assets/images/placeholder.svg'
import AgentDemographics from './AgentDemographics';
import ThreeDotsDropdown from '../../components/ThreeDotsDropdown';
import { useNavigate } from 'react-router-dom';
import DeleteModal from '../../components/DeleteModal';
import GreenCheckbox from '../../components/GreenCheckbox';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import ButtonDropdown from '../../components/ButtonDropdown';




const CohortListing = ({setPage}) => {
    const navigate = useNavigate()
    const page = 'cohort-listing'
    const section = 'agent-management'
    const[isCohortStatisticsActive, setIsCohortStatisticsActive] = useState(true)
    const[isSuspendAgentModalVisible, setIsSuspendAgentModalVisible] = useState(false)
    const[isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)

  return (
    <div>
        <BreadCrumb page={page} section={section}/>

        <div className='cohort-listing-upper-div'>
            <div>
                <ButtonDropdown page={page}/>
            </div>
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
                        <div className='table-outer-div'>
                            <div className='table-inner-div'>
                                <Table>
                                    <TableHead className='agent-listing-table-head'>
                                    <TableRow>
                                        <TableCell style={{ borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}></TableCell>
                                        <TableCell>#</TableCell>
                                        <TableCell>Photo</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Sex</TableCell>
                                        <TableCell>Year of Birth</TableCell>
                                        <TableCell>Location</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell style={{ borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }}>Action</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody className='agent-listing-table-body'>
                                    <TableRow>
                                        <TableCell className='listing-checkbox-td'>
                                        <GreenCheckbox/>
                                        </TableCell>
                                        <TableCell>1</TableCell>
                                        <TableCell>
                                        <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image' />
                                        </TableCell>
                                        <TableCell>John Peterson</TableCell>
                                        <TableCell>Female</TableCell>
                                        <TableCell>08/25/2000</TableCell>
                                        <TableCell>Jouvence</TableCell>
                                        <TableCell><div className='agent-listing-row-status-div'>Active</div></TableCell>
                                        <TableCell>
                                        <ThreeDotsDropdown
                                            page={page}
                                            navigate={navigate}
                                            setIsSuspendAgentModalVisible={setIsSuspendAgentModalVisible}
                                            setIsDeleteModalVisible={setIsDeleteModalVisible}
                                            setPage={setPage}
                                            section={section}
                                        />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className='listing-checkbox-td'>
                                        <GreenCheckbox/>
                                        </TableCell>
                                        <TableCell>1</TableCell>
                                        <TableCell>
                                        <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image' />
                                        </TableCell>
                                        <TableCell>John Peterson</TableCell>
                                        <TableCell>Female</TableCell>
                                        <TableCell>08/25/2000</TableCell>
                                        <TableCell>Jouvence</TableCell>
                                        <TableCell><div className='agent-listing-row-status-div'>Active</div></TableCell>
                                        <TableCell>
                                        <ThreeDotsDropdown
                                            page={page}
                                            navigate={navigate}
                                            setIsSuspendAgentModalVisible={setIsSuspendAgentModalVisible}
                                            setIsDeleteModalVisible={setIsDeleteModalVisible}
                                            setPage={setPage}
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