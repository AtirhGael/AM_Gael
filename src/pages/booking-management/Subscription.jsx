import React from 'react'
import { Grid } from '@mui/material'
import BlueButtonGainLossCard from '../../components/BlueButtonGainLossCard'
import './styles.css'
import FilterSearch from '../../components/FilterSearch'
import TableLayout from '../../components/TableLayout'
import ThreeDotsDropdown from '../../components/ThreeDotsDropdown'
import { useNavigate } from 'react-router-dom'
import ImageNameGrid from '../../components/ImageNameGrid'


const Subscription = ({setPage}) => {
    const navigate = useNavigate()
    const page = 'subscription'
    const section = 'booking-management'

  return (
    <div>
        <Grid container spacing={1} className='booking-management-stats-upper-div'>
            <Grid item xs={6} sm={6} md={3} lg={3} className='booking-management-stat-card-col'>
                <button className='stat-card-button'>
                    <BlueButtonGainLossCard 
                        name={'Total Subscription'}
                        number={60}
                        status={'gain'}
                        percent={'10'}
                        page={page}
                    />
                </button>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3} className='booking-management-stat-card-col'>
                <button className='stat-card-button'>
                    <BlueButtonGainLossCard 
                        name={'Upcoming Subscription'}
                        number={60}
                        status={'loss'}
                        percent={'10'}
                        page={page}
                    />
                </button>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3} className='booking-management-stat-card-col'>
                <button className='stat-card-button'>
                    <BlueButtonGainLossCard 
                        name={'Active Subscription'}
                        number={60}
                        status={'gain'}
                        percent={'10'}
                        page={page}
                    />
                </button>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3} className='booking-management-stat-card-col'>
                <button className='stat-card-button'>
                    <BlueButtonGainLossCard 
                        name={'Completed Subscription'}
                        number={60}
                        status={'loss'}
                        percent={'10'}
                        page={page}
                    />
                </button>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3} className='booking-management-stat-card-col'>
                <button className='stat-card-button'>
                    <BlueButtonGainLossCard 
                        name={'Unassigned Subscription'}
                        number={60}
                        status={'loss'}
                        percent={'10'}
                        page={page}
                    />
                </button>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3} className='booking-management-stat-card-col'>
                <button className='stat-card-button'>
                    <BlueButtonGainLossCard 
                        name={'Expired Subscription'}
                        number={60}
                        status={'loss'}
                        percent={'10'}
                        page={page}
                    />
                </button>
            </Grid>
        </Grid>

        <Grid container spacing={1} className=''>
            <Grid item xs={12} sm={12} md={6} lg={6} className=''>
                <div className='booking-management-unassigned-request-div'>
                    <p className='page-name-bold-text'>Subscribe Users</p>
                    <div className='booking-management-unassigned-request-grid-div'>
                        <FilterSearch/>
                        <button className='booking-management-unassigned-request-see-all-button' onClick={() => {setPage(('/booking-management/user-management-listing')); navigate('/booking-management/user-management-listing')}}>See All</button>
                    </div>

                    <TableLayout
                        headData={['#', 'Image/Name', 'Ecopoint Level', 'Subscription Type', 'Subscription Days', 'Action']}
                        bodyData={[
                            [
                                1,
                                <ImageNameGrid name={'Nayah M'}/>,
                                'Entry',
                                'VIP',
                                '30 days',
                                <ThreeDotsDropdown page={page} section={section}/>
                            ],
                            [
                                2,
                                <ImageNameGrid name={'Nayah M'}/>,
                                'Entry',
                                'VIP',
                                '30 days',
                                <ThreeDotsDropdown page={page} section={section}/>
                            ]
                        ]}
                        dataObject={{name: 'John'}}
                    />
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                
            </Grid>
        </Grid>
    </div>
  )
}

export default Subscription