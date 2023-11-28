import React from 'react'
import '../Component/styles.css'
import Subs from '../Component/subs'
import ButtonDropdown from '../../../components/ButtonDropdown'
import BreadCrumb from '../../../components/BreadCrumb'
import { Grid,Stack } from '@mui/material'


const SubscriptionRanking = () => {
  return (
    <div>
         <BreadCrumb sectionData={'Agent Management'} pageData={'Subscription Ranking'}/>
        <Stack direction="horizontal" style={{justifyContent:'space-between'}}>
            
                <div className='heading-text'>
                    Subscription Ranking
                </div>
                <ButtonDropdown
                page = {'agent-management'}
                />
        </Stack>
        <Grid container style={{paddingTop:10}} spacing={1.5}>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                <Subs 
                type={'sub-ranking-with-image'}
                heading={'VIP'}
                image={true}
                title={'VIP'}
                imgType={'VIP'}
                />
                
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                <Subs 
                type={'sub-ranking'}
                heading={'VIP'}
                title={'Premuim'}
                imgType={'premuim'}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                <Subs 
                imgType={'standard'}
                title={'Standard'}
                type={'sub-ranking'}
                heading={'VIP'}/>
            </Grid>

        </Grid>
    </div>
  )
}

export default SubscriptionRanking
