import React, {useState} from 'react'
import FilterSearch from '../../components/FilterSearch'
import BreadCrumb from '../../components/BreadCrumb'
import { Table, Form } from 'react-bootstrap'
import SuspendAgentModal from '../../components/SuspendAgentModal';
import DeleteModal from '../../components/DeleteModal';
import ThreeDotsDropdown from '../../components/ThreeDotsDropdown';
import TablePagination from '../../components/TablePagination';
import star from '../../components/images/star.svg'
import placeholderuserimage from '../../components/images/placeholder.svg'
import { useNavigate } from 'react-router-dom';


const AgentListing = ({setPage}) => {
    const navigate = useNavigate()
    const page = 'agent-listing'
    const[isSuspendAgentModalVisible, setIsSuspendAgentModalVisible] = useState(false)
    const[isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  
  return (
    <div>
      <BreadCrumb page={page}/>

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
                <th style={{borderRadius: '10px 0px 0px 10px'}}></th>
                <th>#</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Category</th>
                <th>Ratings</th>
                <th>Badge ID</th>
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
                      <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image'></img>
                    </td>
                      <td>John Peterson</td>
                      <td><div className='agent-listing-row-category-div a1'>A1</div></td>
                      <td>
                        <div>
                          <span className='agent-listing-table-rating-number'>4.5</span>
                          <img src={star} alt='Star Icon' className='agent-listing-rating-star-icon'></img>
                          <img src={star} alt='Star Icon' className='agent-listing-rating-star-icon'></img>
                          <img src={star} alt='Star Icon' className='agent-listing-rating-star-icon'></img>
                          <img src={star} alt='Star Icon' className='agent-listing-rating-star-icon'></img>
                          <img src={star} alt='Star Icon' className='agent-listing-rating-star-icon'></img>
                        </div>
                      </td>
                      <td>CTA01234567</td>
                      <td><div className='agent-listing-row-status-div'>Active</div></td>
                      <td>
                        <ThreeDotsDropdown 
                          navigate={navigate} 
                          setIsSuspendAgentModalVisible={setIsSuspendAgentModalVisible}
                          setIsDeleteModalVisible={setIsDeleteModalVisible}
                          page={page}
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
                      <td><div className='agent-listing-row-category-div a2'>A2</div></td>
                      <td>
                        <div>
                          <span className='agent-listing-table-rating-number'>4.5</span>
                          <img src={star} alt='Star Icon' className='agent-listing-rating-star-icon'></img>
                          <img src={star} alt='Star Icon' className='agent-listing-rating-star-icon'></img>
                          <img src={star} alt='Star Icon' className='agent-listing-rating-star-icon'></img>
                          <img src={star} alt='Star Icon' className='agent-listing-rating-star-icon'></img>
                          <img src={star} alt='Star Icon' className='agent-listing-rating-star-icon'></img>
                        </div>
                      </td>
                      <td>CTA01234567</td>
                      <td><div className='agent-listing-row-status-div'>Active</div></td>
                      <td>
                        <ThreeDotsDropdown 
                          navigate={navigate} 
                          setIsSuspendAgentModalVisible={setIsSuspendAgentModalVisible}
                          setIsDeleteModalVisible={setIsDeleteModalVisible}
                          page={page}
                          setPage={setPage}
                        />                
                      </td>
                  </tr>
                </tbody>
              </Table>
              <TablePagination/>
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