import React from 'react'
import ecopointlevellogoimage from '../assets/images/Ecopoint Level Logo.svg'

const EcopointLevelBadge = () => {
  return (
    <>
        <div className='ecopoint-level-badge-div'>
            <div className='ecopoint-badge-background-image-div'>
                <img src={ecopointlevellogoimage} alt='Ecopoint Level Logo' className='ecopoint-level-logo-image' ></img>
            </div>
            <div>
                <p className='ecopoint-level-text'>EcoPoint Level</p>
                <p className='ecopoint-level-level'>Entry</p>
            </div>
        </div>
    </>
  )
}

export default EcopointLevelBadge