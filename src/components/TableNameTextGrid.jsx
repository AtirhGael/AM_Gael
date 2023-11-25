import React from 'react'
import nayahimage from '../assets/images/Ellipse 330.png'

const TableNameTextGrid = ({name, date}) => {
  return (
    <div className='table-name-text-grid-div'>
        <img src={nayahimage} alt='' className='table-name-text-grid-div-user-image' />
        <div>
            <p className='image-name-date-id-name-para'>{name}</p>
            <p className='table-name-text-grid-div-date-time-para'>{date}</p>
            <p className='table-name-text-grid-div-date-time-para'>2 mins ago</p>
        </div>
    </div>
  )
}

export default TableNameTextGrid