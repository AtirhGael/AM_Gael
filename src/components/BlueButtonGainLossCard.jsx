import React from 'react'
import Grid from '@mui/material/Grid';
import bluestatbutton from '../assets/icons/group_work.svg'
import gainarrowup from '../assets/icons/gain_arrow_drop_up.svg'
import lossarrowdown from '../assets/icons/loss_arrow_drop_down.svg'
import ButtonDropdown from './ButtonDropdown';
import greenarrowforward from '../assets/icons/green-arrow_forward.svg'



const BlueButtonGainLossCard = ({name, number, status, percent, page}) => {
  return (
    <>
        <div className='stat-section-div'>
            {(page === 'all-past-bookings') ?
                <Grid container spacing={1} className='all-past-bookings-blue-button-gain-loss-card'>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Grid container spacing={1}>
                            <Grid item xs={3} sm={3} md={3} lg={3}>
                                <div className='blue-circle-div'>
                                    <img src={bluestatbutton} alt='Agent Stat Button Icon' className='agent-stat-button-icon' />
                                </div>
                            </Grid>
                            <Grid item xs={9} sm={9} md={9} lg={9}>
                                <div className='status-stat-div'>
                                    <p className='total-paragraph'>{name}</p>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={3} sm={3} md={3} lg={3}>
                                <p className='agent-stat-number-paragraph'>{number}</p>
                            </Grid>
                            <Grid item xs={9} sm={9} md={9} lg={9}>
                                <div className='status-stat-div'>
                                    {(status === 'gain') ? 
                                        <p className='agent-stat-percentages gain-paragraph'><img src={gainarrowup} alt='' className='gain-arrow-up'></img> {percent}% increase</p> :
                                        <p className='agent-stat-percentages loss-paragraph'><img src={lossarrowdown} alt='' className='gain-arrow-up'></img> {percent}% decrease</p>
                                    }
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <ButtonDropdown page={page}/>
                    </Grid>
                </Grid> :
                <>
                    <Grid container spacing={1.5}>
                        <Grid item xs={3} sm={3} md={3} lg={3}>
                            <div className='blue-circle-div'>
                                <img src={bluestatbutton} alt='Agent Stat Button Icon' className='agent-stat-button-icon' />
                            </div>
                        </Grid>
                        <Grid item xs={9} sm={9} md={9} lg={9}>
                            <div className='status-stat-div'>
                                <p className='total-paragraph'>{name}</p>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={3} sm={3} md={3} lg={3}>
                            <p className='agent-stat-number-paragraph'>{number}</p>
                        </Grid>
                        <Grid item xs={9} sm={9} md={9} lg={9}>
                            <div className='status-stat-div'>
                                {(status === 'gain') ? 
                                    <p className='agent-stat-percentages gain-paragraph'><img src={gainarrowup} alt='' className='gain-arrow-up'></img> {percent}% increase</p> :
                                    <p className='agent-stat-percentages loss-paragraph'><img src={lossarrowdown} alt='' className='gain-arrow-up'></img> {percent}% decrease</p>
                                }
                                {(page === 'booking-management') ? 
                                    <img src={greenarrowforward} alt='' className='green-arrow-forward booking-management-cards-green-arrow-forward'></img> :
                                    null
                                }
                            </div>
                        </Grid>
                    </Grid>
                </>
            }
        </div>

    </>
  )
}

export default BlueButtonGainLossCard