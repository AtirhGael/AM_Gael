import React, {useState,useEffect} from 'react'
import { Table, Form } from 'react-bootstrap'
import SuspendAgentModal from '../../../components/SuspendAgentModal';
import DeleteModal from '../../../components/DeleteModal';
import TablePagination from '../../../components/TablePagination';
import placeholderuserimage from '../../../assets/images/placeholder.svg'
import { useNavigate } from 'react-router-dom';
import ThreeDotsDropdown from '../../../components/ThreeDotsDropdown';
import ModalLayout from '../../../components/ModalLayout';
import cancellationimage from '../../../assets/images/news (10) 1.svg'
import axiosServices from '../../../services/axiosServices';
import filtericon from '../../../assets/icons/filter_list.svg'
import searchicon from '../../../assets/icons/search.svg'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import GreenCheckbox from '../../../components/GreenCheckbox';
import BreadCrumb from '../../../components/BreadCrumb';


const ActiveTable = ({type}) =>{
    return(
        <td><div className={type==='active'?'agent-listing-row-status-div':'owner-listing-inactive'}>{type}</div></td>
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
    const [allOwner, setAllOwners] = useState([])
    const [search,setSearch] = useState('')

    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
      };

    const Owners = () =>{
      axiosServices.allOwners().then(res=>{
          // console.log(res.data);
          setAllOwners(Object.values(res.data.Owners))
      }).catch(error=>{
          console.log(error);
      })
  }
  useEffect(()=>{
      Owners()
  },[])
  

console.log(allOwner);
console.log(search);
  return (
    <div>
        <BreadCrumb sectionData={'Agent Management'} pageData={'Owner Listing'}/>
      <div className='listing-body-upper-div' style={{paddingBottom:10}}>
      <div className='listing-actions-div'>
            <button onClick={handleOpenMenu} className='listing-filter-button'>
                <img src={filtericon} alt='Filter Icon' className='listing-filter-icon'></img>
                <span>Filter</span>
            </button>
            <div className='listing-search-div'>
                <input placeholder='Search here' className='listing-search-input' onChange={(e)=>setSearch(e.target.value)}></input>
                <button className='listing-search-icon-button'>
                    <img src={searchicon} alt='Search Icon' className='listing-search-icon'></img>
                </button>
            </div>
        </div>
        <div className='listing-stats-paragraphs-div'>
       
          <p>Total Agents:  {allOwner.length}</p>
          <p>Active:  {allOwner.length}</p>
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
              {/* {allOwner.filter((item)=>{
                return search.toLowerCase() === ''? item: item.first_name.toLowerCase().includes(search);
              }).map((item, id)=>(
              <tr key={id}>
                    <td className='listing-checkbox-td'>
                      <GreenCheckbox/>
                    </td>
                    <td>{id}</td>
                    <td>
                      <img src={item.profile_photo_url?item.profile_photo_url:placeholderuserimage}  alt='' className='listing-table-placeholder-image'></img>
                    </td>
                      <td>{item.first_name} {item.last_name}</td>
                     
                      <td>
                        <div>
                          <span className='agent-listing-table-rating-number'>{item.country_name}</span>
                        </div>
                      </td>
                      <td>{item.owner_id}</td>
                     <ActiveTable type={item.account_status}/>
                      <td>
                      <ThreeDotsDropdown
                          page={page}
                          section={section}
                          setIsCancellationReasonModalVisible={setIsCancellationReasonModalVisible}
                          navigate={()=>navigate('/owner-profile',{state:item.owner_id})}
                          setIsSelectAssignModalVisible={setIsSuspendAgentModalVisible}
                          setIsDeleteModalVisible={setIsDeleteModalVisible}
                        />             
                      </td>
                  </tr>
              ))} */}
             
             <tr >
                    <td className='listing-checkbox-td'>
                      <GreenCheckbox/>
                    </td>
                    <td>9</td>
                    <td>
                      <img src={placeholderuserimage}  alt='' className='listing-table-placeholder-image'></img>
                    </td>
                      <td>John Wick</td>
                     
                      <td>
                        <div>
                          <span className='agent-listing-table-rating-number'>cameroon</span>
                        </div>
                      </td>
                      <td>'kajsjkjkjkjd</td>
                     <ActiveTable type={'active'}/>
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
         <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
            <div>
              <MenuItem >Status</MenuItem>
              <MenuItem >Book Type</MenuItem>
            </div> 
      </Menu>
    </div>
  )
}

export default OwnerListings