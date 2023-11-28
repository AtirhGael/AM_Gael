import React from 'react'
import Subs from '../Component/subs'
import ButtonDropdown from '../../../components/ButtonDropdown'
import BreadCrumb from '../../../components/BreadCrumb'
import { Grid,Stack } from '@mui/material'

const BookingRanking = () => {
  return (
    <div>
        <BreadCrumb pageData={'Agent Management'} sectionData={'Booking Management'}/>
       <Stack direction="horizontal" style={{justifyContent:'space-between',paddingBottom:10}}>
                <div className='heading-text'>
                    Booking Ranking
                </div>
          
                <ButtonDropdown
                page = {'agent-management'}
                />
                
       </Stack>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={4} xxl={4} xl={4} style={{paddingBottom:10}}>
                <Subs
                title={'Book Now'}
                type={'booking'}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4} xxl={4} xl={4} style={{paddingBottom:10}}>
                <Subs
                title={'Book Later'}
                type={'booking'}
               />
              </Grid>
           
        </Grid>
    </div>
  )
}

export default BookingRanking
