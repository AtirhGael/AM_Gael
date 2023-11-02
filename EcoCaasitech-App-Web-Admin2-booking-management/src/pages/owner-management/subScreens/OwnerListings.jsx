import React, {useState} from 'react'
import FilterSearch from '../../../components/FilterSearch'
// import BreadCrumb from '../../../components/BreadCrumb'
import { Table, Form } from 'react-bootstrap'
import SuspendAgentModal from '../../../components/SuspendAgentModal';
import DeleteModal from '../../../components/DeleteModal';
// import ThreeDotsDropdown from '../../../components/ThreeDotsDropdown';
import TablePagination from '../../../components/TablePagination';
// import star from '../../../components/images/star.svg'
import placeholderuserimage from '../../../assets/images/placeholder.svg'
import { useNavigate } from 'react-router-dom';
import ThreeDots from '../../../components/ThreeDots';
import Bread from '../../../components/Bread';
import DeactivationReason from '../../../components/ModalDeactivationReason';
import ThreeDotsDropdown from '../../../components/ThreeDotsDropdown';
import ModalLayout from '../../../components/ModalLayout';
import cancellationimage from '../../../assets/images/news (10) 1.svg'


const ActiveTable = ({type}) =>{
    return(
        <td><div className={type==='Active'?'agent-listing-row-status-div':'owner-listing-inactive'}>{type}</div></td>
    )
}

const OwnerListings = ({setPage}) => {
    const navigate = useNavigate()
    const page = 'owner-listing'
    const section = 'owner-management'
    const[isSuspendAgentModalVisible, setIsSuspendAgentModalVisible] = useState(false)
    const[isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
    const [deactivate,setDeactivate] = useState(false)
    const[isCancellationReasonModalVisible, setIsCancellationReasonModalVisible] = useState(false)
  
  return (
    <div>
       <Bread
        prevPage={'Agent Management'}
        mainPage={'Owner Listing'}
        />

      <div className='listing-body-upper-div' style={{paddingBottom:10}}>
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
                <th>location</th>
                <th>ID</th>
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
                     
                      <td>
                        <div>
                          <span className='agent-listing-table-rating-number'>juvance</span>
                        </div>
                      </td>
                      <td>CTA01234567</td>
                     <ActiveTable type={'Active'}/>
                      <td>
                      <ThreeDotsDropdown
                          page={page}
                          section={section}
                          setIsCancellationReasonModalVisible={setIsCancellationReasonModalVisible}
                          navigate={()=>navigate('/owner-profile')}
                          setIsSelectAssignModalVisible={setIsSuspendAgentModalVisible}
                          setIsDeleteModalVisible={setIsDeleteModalVisible}
                        />             
                      </td>
                  </tr>
              <tr>
                    <td className='listing-checkbox-td'>
                      <Form>
                        <Form.Check type='checkbox'></Form.Check>
                      </Form>
                    </td>
                    <td>2</td>
                    <td>
                      <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image'></img>
                    </td>
                      <td>John Peterson</td>
                     
                      <td>
                        <div>
                          <span className='agent-listing-table-rating-number'>juvance</span>
                        </div>
                      </td>
                      <td>CTA01234567</td>
                     <ActiveTable type={'Inactive'}/>
                      <td>
                      <ThreeDotsDropdown
                          page={page}
                          section={section}
                          setIsCancellationReasonModalVisible={setIsCancellationReasonModalVisible}
                          navigate={()=>navigate('/owner-profile')}
                          setIsSelectAssignModalVisible={setIsSuspendAgentModalVisible}
                          setIsDeleteModalVisible={setIsDeleteModalVisible}
                        />             
                      </td>
                  </tr>
              <tr>
                    <td className='listing-checkbox-td'>
                      <Form>
                        <Form.Check type='checkbox'></Form.Check>
                      </Form>
                    </td>
                    <td>3</td>
                    <td>
                      <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image'></img>
                    </td>
                      <td>John Peterson</td>
                     
                      <td>
                        <div>
                          <span className='agent-listing-table-rating-number'>juvance</span>
                        </div>
                      </td>
                      <td>CTA01234567</td>
                     <ActiveTable type={'Inactive'}/>
                      <td>
                      <ThreeDotsDropdown
                          page={page}
                          section={section}
                          setIsCancellationReasonModalVisible={setIsCancellationReasonModalVisible}
                          navigate={()=>navigate('/owner-profile')}
                          setIsSelectAssignModalVisible={setIsSuspendAgentModalVisible}
                          setIsDeleteModalVisible={setIsDeleteModalVisible}
                        />            
                      </td>
                  </tr>
              <tr>
                    <td className='listing-checkbox-td'>
                      <Form>
                        <Form.Check type='checkbox'></Form.Check>
                      </Form>
                    </td>
                    <td>4</td>
                    <td>
                      <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image'></img>
                    </td>
                      <td>John Peterson</td>
                     
                      <td>
                        <div>
                          <span className='agent-listing-table-rating-number'>juvance</span>
                        </div>
                      </td>
                      <td>CTA01234567</td>
                     <ActiveTable type={'Inactive'}/>
                      <td>
                      <ThreeDotsDropdown
                          page={page}
                          section={section}
                          setIsCancellationReasonModalVisible={setIsCancellationReasonModalVisible}
                          navigate={()=>navigate('/owner-profile')}
                          setIsSelectAssignModalVisible={setIsSuspendAgentModalVisible}
                          setIsDeleteModalVisible={setIsDeleteModalVisible}
                        />              
                      </td>
                  </tr>
              <tr>
                    <td className='listing-checkbox-td'>
                      <Form>
                        <Form.Check type='checkbox'></Form.Check>
                      </Form>
                    </td>
                    <td>5</td>
                    <td>
                      <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image'></img>
                    </td>
                      <td>John Peterson</td>
                     
                      <td>
                        <div>
                          <span className='agent-listing-table-rating-number'>juvance</span>
                        </div>
                      </td>
                      <td>CTA01234567</td>
                     <ActiveTable type={'Active'}/>
                      <td>
                      <ThreeDotsDropdown
                          page={page}
                          section={section}
                          setIsCancellationReasonModalVisible={setIsCancellationReasonModalVisible}
                          navigate={()=>navigate('/owner-profile')}
                          setIsSelectAssignModalVisible={setIsSuspendAgentModalVisible}
                          setIsDeleteModalVisible={setIsDeleteModalVisible}
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
     
        <ModalLayout
            size={'medium'}
            state={isCancellationReasonModalVisible}
            stateFunction={setIsCancellationReasonModalVisible}
            content={
                <>
                    <div className='action-modal-div'>
                        <img src={cancellationimage} alt='' className='cancellation-modal-image'></img>
                        <p>Suspension Reason</p>
                        <input placeholder='This request is cancelled because the owner of the trash has not been present for
                        up to 10times for trash pickup.' type='text' className='cancellation-modal-input'></input>
                    </div>
                    <div className='cancellation-modal-button-div'>
                        <button className='cancellation-modal-submit-button'>Submit</button>
                        <button className='cancellation-modal-cancel-button' onClick={() => setIsCancellationReasonModalVisible(false)}>Cancel</button>
                    </div>
                </>
            }
        />
        <SuspendAgentModal 
          isSuspendAgentModalVisible={isSuspendAgentModalVisible} 
          setIsSuspendAgentModalVisible={setIsSuspendAgentModalVisible}
          page={page}
        />
    </div>
  )
}

export default OwnerListings