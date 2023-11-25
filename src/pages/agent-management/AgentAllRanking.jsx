import React from 'react'
import './styles.css'
import placeholderuserimage from '../../assets/images/placeholder.svg'
import goldtrophy from '../../assets/icons/gold-trophy.svg'
import greentrophy from '../../assets/icons/green-trophy.svg'
import redtrophy from '../../assets/icons/red-trophy.svg'
import BreadCrumb from '../../components/BreadCrumb';
import { Grid } from '@mui/material'
import ButtonDropdown from '../../components/ButtonDropdown'

const AgentAllRanking = () => {
    const page = 'agent-all-ranking'
    const section = 'agent-management'
  return (
    <div className='agent-all-ranking-div'>
        <BreadCrumb pageData={'All Ranking'} sectionData={'Agent Management'}/>

        <div>
            <div>
                <ButtonDropdown page={page}/>
            </div>
        </div>

        <div className='agent-all-ranking-stats-content-div'>
            
                
                <Grid container spacing={1.5} className='agent-all-ranking-stats-content-Grid'>
                    <Grid item xs={12} sm={12} md={6} lg={4} className='agent-all-ranking-stats-content-equal-height-Grid'>
                        <div className='agent-all-ranking-stats-each-content-div'>
                            <p className='agent-all-ranking-stats-each-content-heading-paragraph'>Most Performance Agents</p>
                            <div className='most-perfomant-agents-grid-div'>
                                <img src={placeholderuserimage} alt='Placeholder User' className='most-perfomant-agents-placeholderuserimage'></img>
                                <p>John</p>
                                <div className='most-perfomant-agent-bar-div first-bar-div' style={{width: `${100}%`}}></div>
                                <p>1st</p>
                            </div>
                            <div className='most-perfomant-agents-grid-div'>
                                <img src={placeholderuserimage} alt='Placeholder User' className='most-perfomant-agents-placeholderuserimage'></img>
                                <p>John</p>
                                <div className='most-perfomant-agent-bar-div second-bar-div' style={{width: `${80}%`}}></div>
                                <p>2nd</p>
                            </div>
                            <div className='most-perfomant-agents-grid-div'>
                                <img src={placeholderuserimage} alt='Placeholder User' className='most-perfomant-agents-placeholderuserimage'></img>
                                <p>John</p>
                                <div className='most-perfomant-agent-bar-div third-bar-div' style={{width: `${60}%`}}></div>
                                <p>3rd</p>
                            </div>
                            <div className='most-perfomant-agents-grid-div'>
                                <img src={placeholderuserimage} alt='Placeholder User' className='most-perfomant-agents-placeholderuserimage'></img>
                                <p>John</p>
                                <div className='most-perfomant-agent-bar-div fourth-bar-div' style={{width: `${40}%`}}></div>
                                <p>4th</p>
                            </div>
                            <div className='most-perfomant-agents-grid-div'>
                                <img src={placeholderuserimage} alt='Placeholder User' className='most-perfomant-agents-placeholderuserimage'></img>
                                <p>John</p>
                                <div className='most-perfomant-agent-bar-div fifth-bar-div' style={{width: `${20}%`}}></div>
                                <p>5th</p>
                            </div>
                        </div> 
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} className='agent-all-ranking-stats-content-equal-height-Grid'>
                        <div className='agent-all-ranking-stats-each-content-div'>
                            <p className='agent-all-ranking-stats-each-content-heading-paragraph'>Most Engaged</p>
                            <div className='agent-all-ranking-stats-each-content-inner-div'>
                                <Grid container spacing={1} style={{marginTop: '10px'}}>
                                    <Grid item lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Grid>
                                    <Grid item lg={9} md={9} sm={9} xs={9}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} style={{marginTop: '10px'}}>
                                    <Grid item lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Grid>
                                    <Grid item lg={9} md={9} sm={9} xs={9}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} style={{marginTop: '10px'}}>
                                    <Grid item lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Grid>
                                    <Grid item lg={9} md={9} sm={9} xs={9}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} style={{marginTop: '10px'}}>
                                    <Grid item lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Grid>
                                    <Grid item lg={9} md={9} sm={9} xs={9}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} style={{marginTop: '10px'}}>
                                    <Grid item lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Grid>
                                    <Grid item lg={9} md={9} sm={9} xs={9}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} className='agent-all-ranking-stats-content-equal-height-Grid'>
                        <div className='agent-all-ranking-stats-each-content-div'>
                            <p className='agent-all-ranking-stats-each-content-heading-paragraph'>Least Engaged</p>
                            <div className='agent-all-ranking-stats-each-content-inner-div'>
                                <Grid container spacing={1} style={{marginTop: '10px'}}>
                                    <Grid item lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Grid>
                                    <Grid item lg={9} md={9} sm={9} xs={9}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} style={{marginTop: '10px'}}>
                                    <Grid item lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Grid>
                                    <Grid item lg={9} md={9} sm={9} xs={9}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} style={{marginTop: '10px'}}>
                                    <Grid item lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Grid>
                                    <Grid item lg={9} md={9} sm={9} xs={9}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} style={{marginTop: '10px'}}>
                                    <Grid item lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Grid>
                                    <Grid item lg={9} md={9} sm={9} xs={9}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} style={{marginTop: '10px'}}>
                                    <Grid item lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Grid>
                                    <Grid item lg={9} md={9} sm={9} xs={9}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} className='agent-all-ranking-stats-content-equal-height-Grid'>
                        <div className='agent-all-ranking-stats-each-content-div'>
                            <p className='agent-all-ranking-stats-each-content-heading-paragraph'>Top earners</p>
                            <div>
                                <div className='top-earner-grid-div'>
                                    <img src={goldtrophy} alt='Gold Trophy' className='top-earner-trophy'></img>
                                    <img src={placeholderuserimage} alt='Placeholder User' className='most-perfomant-agents-placeholderuserimage'></img>
                                    <div>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </div>
                                    <p className='top-earners-ranking-time'>100k</p>
                                </div>
                                <div className='top-earner-grid-div'>
                                    <img src={redtrophy} alt='Gold Trophy' className='top-earner-trophy'></img>
                                    <img src={placeholderuserimage} alt='Placeholder User' className='most-perfomant-agents-placeholderuserimage'></img>
                                    <div>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Montee{`'`} Maison Blanche, TKC</p>
                                    </div>
                                    <p className='top-earners-ranking-time'>70k</p>
                                </div>
                                <div className='top-earner-grid-div'>
                                    <img src={greentrophy} alt='Gold Trophy' className='top-earner-trophy'></img>
                                    <img src={placeholderuserimage} alt='Placeholder User' className='most-perfomant-agents-placeholderuserimage'></img>
                                    <div>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Rond Point Express</p>
                                    </div>
                                    <p className='top-earners-ranking-time'>40k</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} className='agent-all-ranking-stats-content-equal-height-Grid'>
                        <div className='agent-all-ranking-stats-each-content-div'>
                            <p className='agent-all-ranking-stats-each-content-heading-paragraph'>Most Present</p>
                            <div className='agent-all-ranking-stats-each-content-inner-div'>
                                <Grid container spacing={1} style={{marginTop: '10px'}}>
                                    <Grid item lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Grid>
                                    <Grid item lg={7} md={7} sm={7} xs={7} className='most-present-ranking-name-Grid'>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Grid>
                                    <Grid item lg={2} md={2} sm={2} xs={2} className='most-present-ranking-time-Grid'>
                                        <p className='most-present-ranking-time'>100h</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} style={{marginTop: '10px'}}>
                                    <Grid item lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Grid>
                                    <Grid item lg={7} md={7} sm={7} xs={7} className='most-present-ranking-name-Grid'>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Grid>
                                    <Grid item lg={2} md={2} sm={2} xs={2} className='most-present-ranking-time-Grid'>
                                        <p className='most-present-ranking-time'>70h</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} style={{marginTop: '10px'}}>
                                    <Grid item lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Grid>
                                    <Grid item lg={7} md={7} sm={7} xs={7} className='most-present-ranking-name-Grid'>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Grid>
                                    <Grid item lg={2} md={2} sm={2} xs={2} className='most-present-ranking-time-Grid'>
                                        <p className='most-present-ranking-time'>20h</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} style={{marginTop: '10px'}}>
                                    <Grid item lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Grid>
                                    <Grid item lg={7} md={7} sm={7} xs={7} className='most-present-ranking-name-Grid'>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Grid>
                                    <Grid item lg={2} md={2} sm={2} xs={2} className='most-present-ranking-time-Grid'>
                                        <p className='most-present-ranking-time'>20h</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} style={{marginTop: '10px'}}>
                                    <Grid item lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Grid>
                                    <Grid item lg={7} md={7} sm={7} xs={7} className='most-present-ranking-name-Grid'>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Grid>
                                    <Grid item lg={2} md={2} sm={2} xs={2} className='most-present-ranking-time-Grid'>
                                        <p className='most-present-ranking-time'>20h</p>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} className='agent-all-ranking-stats-content-equal-height-Grid'>
                        <div className='agent-all-ranking-stats-each-content-div'>
                            <p className='agent-all-ranking-stats-each-content-heading-paragraph'>Most Absent</p>
                            <div className='agent-all-ranking-stats-each-content-inner-div'>
                                <Grid container spacing={1} style={{marginTop: '10px'}}>
                                    <Grid item lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Grid>
                                    <Grid item lg={7} md={7} sm={7} xs={7} className='most-present-ranking-name-Grid'>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Grid>
                                    <Grid item lg={2} md={2} sm={2} xs={2} className='most-present-ranking-time-Grid'>
                                        <p className='most-absent-ranking-time'>10h</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} style={{marginTop: '10px'}}>
                                    <Grid item lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Grid>
                                    <Grid item lg={7} md={7} sm={7} xs={7} className='most-absent-ranking-name-Grid'>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Grid>
                                    <Grid item lg={2} md={2} sm={2} xs={2} className='most-absent-ranking-time-Grid'>
                                        <p className='most-absent-ranking-time'>7h</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} style={{marginTop: '10px'}}>
                                    <Grid item lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Grid>
                                    <Grid item lg={7} md={7} sm={7} xs={7} className='most-absent-ranking-name-Grid'>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Grid>
                                    <Grid item lg={2} md={2} sm={2} xs={2} className='most-absent-ranking-time-Grid'>
                                        <p className='most-absent-ranking-time'>2h</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} style={{marginTop: '10px'}}>
                                    <Grid item lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Grid>
                                    <Grid item lg={7} md={7} sm={7} xs={7} className='most-absent-ranking-name-Grid'>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Grid>
                                    <Grid item lg={2} md={2} sm={2} xs={2} className='most-absent-ranking-time-Grid'>
                                        <p className='most-absent-ranking-time'>2h</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} style={{marginTop: '10px'}}>
                                    <Grid item lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Grid>
                                    <Grid item lg={7} md={7} sm={7} xs={7} className='most-absent-ranking-name-Grid'>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Grid>
                                    <Grid item lg={2} md={2} sm={2} xs={2} className='most-absent-ranking-time-Grid'>
                                        <p className='most-absent-ranking-time'>2h</p>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                </Grid>
        </div>
    </div>
  )
}

export default AgentAllRanking