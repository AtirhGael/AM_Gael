import React from 'react'
import Grid from '@mui/material/Grid';
import bluestatbutton from '../assets/icons/group_work.svg'
import gainarrowup from '../assets/icons/gain_arrow_drop_up.svg'
import lossarrowdown from '../assets/icons/loss_arrow_drop_down.svg'



const BlueButtonGainLossCard = ({name, number, status, percent}) => {
  return (
    <>
        <div className='stat-section-div'>
            <Grid container>
                <Grid item xs={3} sm={4} md={4} lg={3}>
                    <div className='agent-stat-button-icon-div'>
                        <img src={bluestatbutton} alt='Agent Stat Button Icon' className='agent-stat-button-icon' />
                    </div>
                </Grid>
                <Grid item xs={9} sm={8} md={8} lg={9}>
                    <div className='status-stat-div'>
                        <p className='total-paragraph'>{name}</p>
                    </div>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={3} sm={4} md={4}>
                    <p className='agent-stat-number-paragraph'>{number}</p>
                </Grid>
                <Grid item xs={9} sm={8} md={8}>
                    <div className='status-stat-div'>
                        {(status === 'gain') ? 
                            <p className='agent-stat-percentages gain-paragraph'><img src={gainarrowup} alt='' className='gain-arrow-up'></img> {percent}% increase</p> :
                            <p className='agent-stat-percentages loss-paragraph'><img src={lossarrowdown} alt='' className='gain-arrow-up'></img> {percent}% decrease</p>
                        }
                    </div>
                </Grid>
            </Grid>
        </div>

    </>
  )
}

export default BlueButtonGainLossCard