import React from 'react'
import chevronright from '../assets/icons/chevron_right.svg'

const BreadCrumb = ({sectionData, pageData}) => {
  return (
    <div className='bread-crumb-div'>
      <span>{sectionData}</span>
      <img src={chevronright} alt='Chevron Right Icon' className='chevron-right-icon'></img>
      {(typeof(pageData) === 'string') ?
        <span>{pageData}</span> :
        pageData
      }
    </div>
  )
}

export default BreadCrumb