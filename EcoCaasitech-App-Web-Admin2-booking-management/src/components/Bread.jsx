import React from 'react'
import chevronright from '../assets/icons/chevron_right.svg'

const Bread = ({prevPage,mainPage}) => {
  return (
    <div className='bread-crumb-div'>
      <span>{prevPage}</span>
      <img src={chevronright} alt='Chevron Right Icon' className='chevron-right-icon'></img>
      <span>{mainPage}</span>
    </div>
  )
}

export default Bread