import React, {useState} from 'react'
import './styles.css'
import FilterSearch from '../../components/FilterSearch'
import BreadCrumb from '../../components/BreadCrumb'
import SuspendAgentModal from '../../components/SuspendAgentModal';
import DeleteModal from '../../components/DeleteModal';
import ThreeDotsDropdown from '../../components/ThreeDotsDropdown';
import TablePagination from '../../components/TablePagination';
import star from '../../assets/icons/star.svg'
import placeholderuserimage from '../../assets/images/placeholder.svg'
import { useNavigate } from 'react-router-dom';
import GreenCheckbox from '../../components/GreenCheckbox';
import {  Table,  TableHead,  TableBody,  TableRow, TableCell } from '@mui/material';


const AgentListing = ({setPage}) => {
    const navigate = useNavigate()
    const page = 'agent-listing'
    const section = 'agent-management'
    const[isSuspendAgentModalVisible, setIsSuspendAgentModalVisible] = useState(false)
    const[isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  
  return (
    <div>
      <BreadCrumb pageData={'Agent Listing'} sectionData={'Agent Management'}/>

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
              <Table className='agent-listing-table'>
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ borderRadius: '10px 0px 0px 10px' }}></TableCell>
                        <TableCell>#</TableCell>
                        <TableCell>Photo</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Ratings</TableCell>
                        <TableCell>Badge ID</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell style={{ borderRadius: '0px 10px 10px 0px' }}>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <GreenCheckbox/>
                        </TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>
                          <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image' />
                        </TableCell>
                        <TableCell>John Peterson</TableCell>
                        <TableCell>
                          <div className='agent-listing-row-category-div a1'>A1</div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <span className='agent-listing-table-rating-number'>4.5</span>
                            <img src={star} alt='Star Icon' className='agent-listing-rating-star-icon' />
                            <img src={star} alt='Star Icon' className='agent-listing-rating-star-icon' />
                            <img src={star} alt='Star Icon' className='agent-listing-rating-star-icon' />
                            <img src={star} alt='Star Icon' className='agent-listing-rating-star-icon' />
                            <img src={star} alt='Star Icon' className='agent-listing-rating-star-icon' />
                          </div>
                        </TableCell>
                        <TableCell>CTA01234567</TableCell>
                        <TableCell>
                          <div className='table-green-text-status-div'>Active</div>
                        </TableCell>
                        <TableCell>
                          <ThreeDotsDropdown
                            navigate={navigate}
                            setIsSuspendAgentModalVisible={setIsSuspendAgentModalVisible}
                            setIsDeleteModalVisible={setIsDeleteModalVisible}
                            page={page}
                            setPage={setPage}
                            section={section}
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <GreenCheckbox/>
                        </TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>
                          <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image' />
                        </TableCell>
                        <TableCell>John Peterson</TableCell>
                        <TableCell>
                          <div className='agent-listing-row-category-div a2'>A2</div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <span className='agent-listing-table-rating-number'>4.5</span>
                            <img src={star} alt='Star Icon' className='agent-listing-rating-star-icon' />
                            <img src={star} alt='Star Icon' className='agent-listing-rating-star-icon' />
                            <img src={star} alt='Star Icon' className='agent-listing-rating-star-icon' />
                            <img src={star} alt='Star Icon' className='agent-listing-rating-star-icon' />
                            <img src={star} alt='Star Icon' className='agent-listing-rating-star-icon' />
                          </div>
                        </TableCell>
                        <TableCell>CTA01234567</TableCell>
                        <TableCell>
                          <div className='table-green-text-status-div'>Active</div>
                        </TableCell>
                        <TableCell>
                          <ThreeDotsDropdown
                            navigate={navigate}
                            setIsSuspendAgentModalVisible={setIsSuspendAgentModalVisible}
                            setIsDeleteModalVisible={setIsDeleteModalVisible}
                            page={page}
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

export default AgentListing