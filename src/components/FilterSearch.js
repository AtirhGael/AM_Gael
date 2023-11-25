import React, { useRef } from 'react'
import searchicon from '../components/images/search.svg'
import filtericon from '../components/images/filter_list.svg'
import { Dropdown } from 'react-bootstrap';

const FilterSearch = () => {
    const dropdownRef = useRef()
    
  return (
    <div> 
        <div className='listing-actions-div'>
            <button className='listing-filter-button' onClick={() => dropdownRef.current.click()}>
                <img src={filtericon} alt='Filter Icon' className='listing-filter-icon'></img>
                <span>Filter</span>
            </button>
            <div className='listing-search-div'>
                <input placeholder='Search here' className='listing-search-input'></input>
                <button className='listing-search-icon-button'>
                    <img src={searchicon} alt='Search Icon' className='listing-search-icon'></img>
                </button>
            </div>
        </div>
        <Dropdown className='cohort-listing-table-dropdown'>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className='cohort-listing-table-dropdown-button' ref={dropdownRef}></Dropdown.Toggle>
            <Dropdown.Menu>
                  <Dropdown.Item >Status</Dropdown.Item>
                  <Dropdown.Item >Book Type</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default FilterSearch