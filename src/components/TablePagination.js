import React from 'react'
import chevronleft from './images/table-chevron_left.svg'
import chevronright from './images/table-chevron_right.svg'
import arrowdropdown from './images/arrow_drop_down.svg'
const TablePagination = () => {
  return (
    <div className='table-pagination-div'>
        <span>Rows per page</span>
        <button>
            <span>100</span>
            <img src={arrowdropdown} alt='Dropdown Arrow Icon' className='table-pagination-dropdown-arrow'></img>
        </button>
        <span>1-10 of 20</span>
        <button className='table-pagination-button'>
            <img src={chevronleft} alt='' className='table-pagination-chevron'></img>
        </button>
        <button className='table-pagination-button'>
            <img src={chevronright} alt='' className='table-pagination-chevron'></img>
        </button>
    </div>
  )
}

export default TablePagination