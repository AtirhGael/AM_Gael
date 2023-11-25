import React from 'react'
import nayahimage from '../assets/images/Ellipse 330.png'


const ImageNameGrid = ({name}) => {
  return (
    <>
        <div className='image-name-date-id-grid-div'>
            <img src={nayahimage} alt='' className='image-name-date-id-agent-headshot-image'></img>     
            <p className='image-name-date-id-name-para'>{name}</p>  
        </div>
    </>
  )
}

export default ImageNameGrid