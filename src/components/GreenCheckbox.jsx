import React from 'react'
import { Checkbox } from '@mui/material';

const GreenCheckbox = () => {
  return (
    <>
      <Checkbox
        sx={{
            color: 'rgba(28, 27, 31, 0.5)',
            border: 'none',
            '&.Mui-checked': {
            color: 'rgba(76, 172, 62, 1)',
            border: 'none',
            },
            '& .MuiSvgIcon-root': { fontSize: 20 }, 
        }}
      />
    </>
  )
}

export default GreenCheckbox