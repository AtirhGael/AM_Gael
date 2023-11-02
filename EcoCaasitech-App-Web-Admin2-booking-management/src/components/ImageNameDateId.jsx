import React from 'react'
import nayahimage from '../assets/images/Ellipse 330.png'

const ImageNameDateId = () => {
  return (
    <>
        <div className='image-name-date-id-grid-div'>
            <img src={nayahimage} alt='' className='image-name-date-id-agent-headshot-image'></img>
            <div>
                <p className='image-name-date-id-name-para'>Nayah</p>
                <p className='image-name-date-id-para'>ID: TO1234567</p>
            </div>
        </div>
    </>
  )
}

export default ImageNameDateId