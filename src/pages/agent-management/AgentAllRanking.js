import React from 'react'
import { Dropdown, Container, Row, Col } from 'react-bootstrap'
import calendaricon from '../../components/images/calendar-icon.svg'
import placeholderuserimage from '../../components/images/placeholder.svg'
import goldtrophy from '../../components/images/gold-trophy.svg'
import greentrophy from '../../components/images/green-trophy.svg'
import redtrophy from '../../components/images/red-trophy.svg'
import BreadCrumb from '../../components/BreadCrumb'

const AgentAllRanking = () => {
    const page = 'agent-all-ranking'
  return (
    <div>
        <BreadCrumb page={page}/>

        <div>
            <div className='agent-time-range-dropdown-div'>
                <Dropdown className='agent-all-ranking-time-range-dropdown'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='time-range-dropdown-button'>
                        <img src={calendaricon} alt='Calendar Icon' className='dropdown-calendar-icon'></img> This Month
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>

        <div className='agent-all-ranking-stats-content-div'>
            <Container fluid style={{padding: '0px'}}>
                <Row className='agent-all-ranking-stats-content-row'>
                    <Col xs={12} sm={12} md={6} lg={4} className='agent-all-ranking-stats-content-equal-height-col'>
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
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} className='agent-all-ranking-stats-content-equal-height-col'>
                        <div className='agent-all-ranking-stats-each-content-div'>
                            <p className='agent-all-ranking-stats-each-content-heading-paragraph'>Most Engaged</p>
                            <div className='agent-all-ranking-stats-each-content-inner-div'>
                                <Row style={{marginTop: '10px'}}>
                                    <Col lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Col>
                                    <Col lg={9} md={9} sm={9} xs={9}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '10px'}}>
                                    <Col lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Col>
                                    <Col lg={9} md={9} sm={9} xs={9}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '10px'}}>
                                    <Col lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Col>
                                    <Col lg={9} md={9} sm={9} xs={9}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '10px'}}>
                                    <Col lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Col>
                                    <Col lg={9} md={9} sm={9} xs={9}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '10px'}}>
                                    <Col lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Col>
                                    <Col lg={9} md={9} sm={9} xs={9}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} className='agent-all-ranking-stats-content-equal-height-col'>
                        <div className='agent-all-ranking-stats-each-content-div'>
                            <p className='agent-all-ranking-stats-each-content-heading-paragraph'>Least Engaged</p>
                            <div className='agent-all-ranking-stats-each-content-inner-div'>
                                <Row style={{marginTop: '10px'}}>
                                    <Col lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Col>
                                    <Col lg={9} md={9} sm={9} xs={9}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '10px'}}>
                                    <Col lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Col>
                                    <Col lg={9} md={9} sm={9} xs={9}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '10px'}}>
                                    <Col lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Col>
                                    <Col lg={9} md={9} sm={9} xs={9}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '10px'}}>
                                    <Col lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Col>
                                    <Col lg={9} md={9} sm={9} xs={9}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '10px'}}>
                                    <Col lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Col>
                                    <Col lg={9} md={9} sm={9} xs={9}>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} className='agent-all-ranking-stats-content-equal-height-col'>
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
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} className='agent-all-ranking-stats-content-equal-height-col'>
                        <div className='agent-all-ranking-stats-each-content-div'>
                            <p className='agent-all-ranking-stats-each-content-heading-paragraph'>Most Present</p>
                            <div className='agent-all-ranking-stats-each-content-inner-div'>
                                <Row style={{marginTop: '10px'}}>
                                    <Col lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Col>
                                    <Col lg={7} md={7} sm={7} xs={7} className='most-present-ranking-name-col'>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Col>
                                    <Col lg={2} md={2} sm={2} xs={2} className='most-present-ranking-time-col'>
                                        <p className='most-present-ranking-time'>100h</p>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '10px'}}>
                                    <Col lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Col>
                                    <Col lg={7} md={7} sm={7} xs={7} className='most-present-ranking-name-col'>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Col>
                                    <Col lg={2} md={2} sm={2} xs={2} className='most-present-ranking-time-col'>
                                        <p className='most-present-ranking-time'>70h</p>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '10px'}}>
                                    <Col lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Col>
                                    <Col lg={7} md={7} sm={7} xs={7} className='most-present-ranking-name-col'>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Col>
                                    <Col lg={2} md={2} sm={2} xs={2} className='most-present-ranking-time-col'>
                                        <p className='most-present-ranking-time'>20h</p>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '10px'}}>
                                    <Col lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Col>
                                    <Col lg={7} md={7} sm={7} xs={7} className='most-present-ranking-name-col'>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Col>
                                    <Col lg={2} md={2} sm={2} xs={2} className='most-present-ranking-time-col'>
                                        <p className='most-present-ranking-time'>20h</p>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '10px'}}>
                                    <Col lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Col>
                                    <Col lg={7} md={7} sm={7} xs={7} className='most-present-ranking-name-col'>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Col>
                                    <Col lg={2} md={2} sm={2} xs={2} className='most-present-ranking-time-col'>
                                        <p className='most-present-ranking-time'>20h</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} className='agent-all-ranking-stats-content-equal-height-col'>
                        <div className='agent-all-ranking-stats-each-content-div'>
                            <p className='agent-all-ranking-stats-each-content-heading-paragraph'>Most Absent</p>
                            <div className='agent-all-ranking-stats-each-content-inner-div'>
                                <Row style={{marginTop: '10px'}}>
                                    <Col lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Col>
                                    <Col lg={7} md={7} sm={7} xs={7} className='most-present-ranking-name-col'>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Col>
                                    <Col lg={2} md={2} sm={2} xs={2} className='most-present-ranking-time-col'>
                                        <p className='most-absent-ranking-time'>10h</p>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '10px'}}>
                                    <Col lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Col>
                                    <Col lg={7} md={7} sm={7} xs={7} className='most-absent-ranking-name-col'>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Col>
                                    <Col lg={2} md={2} sm={2} xs={2} className='most-absent-ranking-time-col'>
                                        <p className='most-absent-ranking-time'>7h</p>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '10px'}}>
                                    <Col lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Col>
                                    <Col lg={7} md={7} sm={7} xs={7} className='most-absent-ranking-name-col'>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Col>
                                    <Col lg={2} md={2} sm={2} xs={2} className='most-absent-ranking-time-col'>
                                        <p className='most-absent-ranking-time'>2h</p>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '10px'}}>
                                    <Col lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Col>
                                    <Col lg={7} md={7} sm={7} xs={7} className='most-absent-ranking-name-col'>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Col>
                                    <Col lg={2} md={2} sm={2} xs={2} className='most-absent-ranking-time-col'>
                                        <p className='most-absent-ranking-time'>2h</p>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: '10px'}}>
                                    <Col lg={3} md={3} sm={3} xs={3}>
                                        <img src={placeholderuserimage} alt='Placeholder User' className='placeholderuserimage'></img>
                                    </Col>
                                    <Col lg={7} md={7} sm={7} xs={7} className='most-absent-ranking-name-col'>
                                        <p className='cohort-user-name-paragraph'>John Peterson</p>
                                        <p className='cohort-user-other-paragraph'>Carrefour Jouvence</p>
                                    </Col>
                                    <Col lg={2} md={2} sm={2} xs={2} className='most-absent-ranking-time-col'>
                                        <p className='most-absent-ranking-time'>2h</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default AgentAllRanking