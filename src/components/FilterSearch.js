import React from 'react'
import searchicon from '../components/images/search.svg'
import filtericon from '../components/images/filter_list.svg'

const FilterSearch = () => {
  return (
    <div>
        <div className='listing-actions-div'>
            <button className='listing-filter-button'>
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
    </div>
  )
}

export default FilterSearch