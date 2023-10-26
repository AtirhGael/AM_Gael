import React from 'react'
import bigmap from '../../components/images/Rectangle 338.svg'
import FilterSearch from '../../components/FilterSearch'
import arrowforward from '../../components/images/arrow_forward.svg'
import arrowback from '../../components/images/arrow_back.svg'
import { Row, Col, Form } from 'react-bootstrap'
import verified from '../../components/images/verified.svg'
import placeholderagentimage from '../../components/images/Ellipse 110.svg'
import personicon from '../../components/images/person.svg'
import navigationicon from '../../components/images/assistant_navigation.svg'
import locationicon from '../../components/images/location_on.svg'
import star from '../../components/images/star.svg'
import { useNavigate } from 'react-router-dom'

const FindAssignAgent = ({setPage}) => {
    const navigate = useNavigate()
  return (
    <div>
        <img src={bigmap} alt='' style={{height: '300px', width: '100%', objectFit: 'cover', marginBottom: '50px'}}></img>

        <div className='find-assign-agent-upper-grid-div'>
            <FilterSearch/>
            <div className='find-assign-agent-right-div'>
                <button className='assign-button'>Assign</button>
                <span className='find-assign-agent-pagination-span'>1-6 <span className='find-assign-agent-pagination-inner-span'>of 30</span></span>
                <button className='direction-arrow-button'>
                    <img src={arrowback} alt='Arrow Backward Icon' className='direction-arrow-icon'></img>
                </button>
                <button className='direction-arrow-button'>
                    <img src={arrowforward} alt='Arrow Forward Icon' className='direction-arrow-icon'></img>
                </button>
            </div>
        </div>

        <div>
            <Row>
                <Col xs={12} sm={12} md={6} lg={3}>
                    <div className='find-assign-each-agent-div'>
                        <Form>
                            <Form.Check type='checkbox'></Form.Check>
                        </Form>
                        <div className="circular-container">
                            <div className="circular-border">
                                <div className="circular-image">
                                <img
                                    src={placeholderagentimage}
                                    alt="User Profile"
                                    width="65"
                                    height="65"
                                />
                                <div className="verification-badge">
                                    
                                    <img src={verified} alt='Verified Icon' className='verified-icon verification-badge'></img>
                                </div>
                                </div>
                            </div>
                        </div>

                        <p className='find-assign-each-agent-div-name'>
                            <span>John 5</span>
                            <img src={star} alt='Star Icon' className='find-assign-each-agent-div-name-star-icon'></img>
                        </p>
                        <p className='find-assign-each-agent-div-badge-id'>CTA0110456752</p>
                        <p className='find-assign-each-agent-div-category'>Category <span>A3</span></p>

                        <div className='find-assign-each-agent-middle-grid-div'>
                            <div className='find-assign-each-agent-middle-left-div'>
                                <img src={navigationicon} alt='Navigation Icon' className='find-assign-each-agent-view-profile-icons navigation-icon'></img>
                                <span>12 Pickups</span>
                            </div>
                            <div className='find-assign-each-agent-middle-right-div'>
                                <img src={locationicon} alt='Location Icon' className='find-assign-each-agent-view-profile-icons'></img>
                                <span>Jouvence</span>
                            </div>
                        </div>

                        <div className='find-assign-each-agent-view-profile-button-div'>
                            <button className='find-assign-each-agent-view-profile-button' onClick={() => {setPage('agent-profile'); navigate('/agent-profile')}}>
                                <img src={personicon} alt='Person Icon' className='find-assign-each-agent-view-profile-button-person-icon'></img>
                                View Profile
                            </button>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3}>
                    <div className='find-assign-each-agent-div'>
                        <Form>
                            <Form.Check type='checkbox'></Form.Check>
                        </Form>
                        <div className="circular-container">
                            <div className="circular-border">
                                <div className="circular-image">
                                <img
                                    src={placeholderagentimage}
                                    alt="User Profile"
                                    width="65"
                                    height="65"
                                />
                                <div className="verification-badge">
                                    
                                    <img src={verified} alt='Verified Icon' className='verified-icon verification-badge'></img>
                                </div>
                                </div>
                            </div>
                        </div>

                        <p className='find-assign-each-agent-div-name'>
                            <span>John 5</span>
                            <img src={star} alt='Star Icon' className='find-assign-each-agent-div-name-star-icon'></img>
                        </p>
                        <p className='find-assign-each-agent-div-badge-id'>CTA0110456752</p>
                        <p className='find-assign-each-agent-div-category'>Category <span>A3</span></p>

                        <div className='find-assign-each-agent-middle-grid-div'>
                            <div className='find-assign-each-agent-middle-left-div'>
                                <img src={navigationicon} alt='Navigation Icon' className='find-assign-each-agent-view-profile-icons navigation-icon'></img>
                                <span>12 Pickups</span>
                            </div>
                            <div className='find-assign-each-agent-middle-right-div'>
                                <img src={locationicon} alt='Location Icon' className='find-assign-each-agent-view-profile-icons'></img>
                                <span>Jouvence</span>
                            </div>
                        </div>

                        <div className='find-assign-each-agent-view-profile-button-div'>
                            <button className='find-assign-each-agent-view-profile-button' onClick={() => {setPage('agent-profile'); navigate('/agent-profile')}}>
                                <img src={personicon} alt='Person Icon' className='find-assign-each-agent-view-profile-button-person-icon'></img>
                                View Profile
                            </button>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3}>
                    <div className='find-assign-each-agent-div'>
                        <Form>
                            <Form.Check type='checkbox'></Form.Check>
                        </Form>
                        <div className="circular-container">
                            <div className="circular-border">
                                <div className="circular-image">
                                <img
                                    src={placeholderagentimage}
                                    alt="User Profile"
                                    width="65"
                                    height="65"
                                />
                                <div className="verification-badge">
                                    
                                    <img src={verified} alt='Verified Icon' className='verified-icon verification-badge'></img>
                                </div>
                                </div>
                            </div>
                        </div>

                        <p className='find-assign-each-agent-div-name'>
                            <span>John 5</span>
                            <img src={star} alt='Star Icon' className='find-assign-each-agent-div-name-star-icon'></img>
                        </p>
                        <p className='find-assign-each-agent-div-badge-id'>CTA0110456752</p>
                        <p className='find-assign-each-agent-div-category'>Category <span>A3</span></p>

                        <div className='find-assign-each-agent-middle-grid-div'>
                            <div className='find-assign-each-agent-middle-left-div'>
                                <img src={navigationicon} alt='Navigation Icon' className='find-assign-each-agent-view-profile-icons navigation-icon'></img>
                                <span>12 Pickups</span>
                            </div>
                            <div className='find-assign-each-agent-middle-right-div'>
                                <img src={locationicon} alt='Location Icon' className='find-assign-each-agent-view-profile-icons'></img>
                                <span>Jouvence</span>
                            </div>
                        </div>

                        <div className='find-assign-each-agent-view-profile-button-div'>
                            <button className='find-assign-each-agent-view-profile-button' onClick={() => {setPage('agent-profile'); navigate('/agent-profile')}}>
                                <img src={personicon} alt='Person Icon' className='find-assign-each-agent-view-profile-button-person-icon'></img>
                                View Profile
                            </button>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3}>
                    <div className='find-assign-each-agent-div'>
                        <Form>
                            <Form.Check type='checkbox'></Form.Check>
                        </Form>
                        <div className="circular-container">
                            <div className="circular-border">
                                <div className="circular-image">
                                <img
                                    src={placeholderagentimage}
                                    alt="User Profile"
                                    width="65"
                                    height="65"
                                />
                                <div className="verification-badge">
                                    
                                    <img src={verified} alt='Verified Icon' className='verified-icon verification-badge'></img>
                                </div>
                                </div>
                            </div>
                        </div>

                        <p className='find-assign-each-agent-div-name'>
                            <span>John 5</span>
                            <img src={star} alt='Star Icon' className='find-assign-each-agent-div-name-star-icon'></img>
                        </p>
                        <p className='find-assign-each-agent-div-badge-id'>CTA0110456752</p>
                        <p className='find-assign-each-agent-div-category'>Category <span>A3</span></p>

                        <div className='find-assign-each-agent-middle-grid-div'>
                            <div className='find-assign-each-agent-middle-left-div'>
                                <img src={navigationicon} alt='Navigation Icon' className='find-assign-each-agent-view-profile-icons navigation-icon'></img>
                                <span>12 Pickups</span>
                            </div>
                            <div className='find-assign-each-agent-middle-right-div'>
                                <img src={locationicon} alt='Location Icon' className='find-assign-each-agent-view-profile-icons'></img>
                                <span>Jouvence</span>
                            </div>
                        </div>

                        <div className='find-assign-each-agent-view-profile-button-div'>
                            <button className='find-assign-each-agent-view-profile-button' onClick={() => {setPage('agent-profile'); navigate('/agent-profile')}}>
                                <img src={personicon} alt='Person Icon' className='find-assign-each-agent-view-profile-button-person-icon'></img>
                                View Profile
                            </button>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3}>
                    <div className='find-assign-each-agent-div'>
                        <Form>
                            <Form.Check type='checkbox'></Form.Check>
                        </Form>
                        <div className="circular-container">
                            <div className="circular-border">
                                <div className="circular-image">
                                <img
                                    src={placeholderagentimage}
                                    alt="User Profile"
                                    width="65"
                                    height="65"
                                />
                                <div className="verification-badge">
                                    
                                    <img src={verified} alt='Verified Icon' className='verified-icon verification-badge'></img>
                                </div>
                                </div>
                            </div>
                        </div>

                        <p className='find-assign-each-agent-div-name'>
                            <span>John 5</span>
                            <img src={star} alt='Star Icon' className='find-assign-each-agent-div-name-star-icon'></img>
                        </p>
                        <p className='find-assign-each-agent-div-badge-id'>CTA0110456752</p>
                        <p className='find-assign-each-agent-div-category'>Category <span>A3</span></p>

                        <div className='find-assign-each-agent-middle-grid-div'>
                            <div className='find-assign-each-agent-middle-left-div'>
                                <img src={navigationicon} alt='Navigation Icon' className='find-assign-each-agent-view-profile-icons navigation-icon'></img>
                                <span>12 Pickups</span>
                            </div>
                            <div className='find-assign-each-agent-middle-right-div'>
                                <img src={locationicon} alt='Location Icon' className='find-assign-each-agent-view-profile-icons'></img>
                                <span>Jouvence</span>
                            </div>
                        </div>

                        <div className='find-assign-each-agent-view-profile-button-div'>
                            <button className='find-assign-each-agent-view-profile-button' onClick={() => {setPage('agent-profile'); navigate('/agent-profile')}}>
                                <img src={personicon} alt='Person Icon' className='find-assign-each-agent-view-profile-button-person-icon'></img>
                                View Profile
                            </button>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3}>
                    <div className='find-assign-each-agent-div'>
                        <Form>
                        <Form.Check type='checkbox'></Form.Check>
                      </Form>
                        <div className="circular-container">
                            <div className="circular-border">
                                <div className="circular-image">
                                <img
                                    src={placeholderagentimage}
                                    alt="User Profile"
                                    width="65"
                                    height="65"
                                />
                                <div className="verification-badge">
                                    
                                    <img src={verified} alt='Verified Icon' className='verified-icon verification-badge'></img>
                                </div>
                                </div>
                            </div>
                        </div>

                        <p className='find-assign-each-agent-div-name'>
                            <span>John 5</span>
                            <img src={star} alt='Star Icon' className='find-assign-each-agent-div-name-star-icon'></img>
                        </p>
                        <p className='find-assign-each-agent-div-badge-id'>CTA0110456752</p>
                        <p className='find-assign-each-agent-div-category'>Category <span>A3</span></p>

                        <div className='find-assign-each-agent-middle-grid-div'>
                            <div className='find-assign-each-agent-middle-left-div'>
                                <img src={navigationicon} alt='Navigation Icon' className='find-assign-each-agent-view-profile-icons navigation-icon'></img>
                                <span>12 Pickups</span>
                            </div>
                            <div className='find-assign-each-agent-middle-right-div'>
                                <img src={locationicon} alt='Location Icon' className='find-assign-each-agent-view-profile-icons'></img>
                                <span>Jouvence</span>
                            </div>
                        </div>

                        <div className='find-assign-each-agent-view-profile-button-div'>
                            <button className='find-assign-each-agent-view-profile-button' onClick={() => {setPage('agent-profile'); navigate('/agent-profile')}}>
                                <img src={personicon} alt='Person Icon' className='find-assign-each-agent-view-profile-button-person-icon'></img>
                                View Profile
                            </button>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3}>
                    <div className='find-assign-each-agent-div'>
                        <Form>
                        <Form.Check type='checkbox'></Form.Check>
                      </Form>
                        <div className="circular-container">
                            <div className="circular-border">
                                <div className="circular-image">
                                <img
                                    src={placeholderagentimage}
                                    alt="User Profile"
                                    width="65"
                                    height="65"
                                />
                                <div className="verification-badge">
                                    
                                    <img src={verified} alt='Verified Icon' className='verified-icon verification-badge'></img>
                                </div>
                                </div>
                            </div>
                        </div>

                        <p className='find-assign-each-agent-div-name'>
                            <span>John 5</span>
                            <img src={star} alt='Star Icon' className='find-assign-each-agent-div-name-star-icon'></img>
                        </p>
                        <p className='find-assign-each-agent-div-badge-id'>CTA0110456752</p>
                        <p className='find-assign-each-agent-div-category'>Category <span>A3</span></p>

                        <div className='find-assign-each-agent-middle-grid-div'>
                            <div className='find-assign-each-agent-middle-left-div'>
                                <img src={navigationicon} alt='Navigation Icon' className='find-assign-each-agent-view-profile-icons navigation-icon'></img>
                                <span>12 Pickups</span>
                            </div>
                            <div className='find-assign-each-agent-middle-right-div'>
                                <img src={locationicon} alt='Location Icon' className='find-assign-each-agent-view-profile-icons'></img>
                                <span>Jouvence</span>
                            </div>
                        </div>

                        <div className='find-assign-each-agent-view-profile-button-div'>
                            <button className='find-assign-each-agent-view-profile-button' onClick={() => {setPage('agent-profile'); navigate('/agent-profile')}}>
                                <img src={personicon} alt='Person Icon' className='find-assign-each-agent-view-profile-button-person-icon'></img>
                                View Profile
                            </button>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3}>
                    <div className='find-assign-each-agent-div'>
                        <Form>
                        <Form.Check type='checkbox'></Form.Check>
                      </Form>
                        <div className="circular-container">
                            <div className="circular-border">
                                <div className="circular-image">
                                <img
                                    src={placeholderagentimage}
                                    alt="User Profile"
                                    width="65"
                                    height="65"
                                />
                                <div className="verification-badge">
                                    
                                    <img src={verified} alt='Verified Icon' className='verified-icon verification-badge'></img>
                                </div>
                                </div>
                            </div>
                        </div>

                        <p className='find-assign-each-agent-div-name'>
                            <span>John 5</span>
                            <img src={star} alt='Star Icon' className='find-assign-each-agent-div-name-star-icon'></img>
                        </p>
                        <p className='find-assign-each-agent-div-badge-id'>CTA0110456752</p>
                        <p className='find-assign-each-agent-div-category'>Category <span>A3</span></p>

                        <div className='find-assign-each-agent-middle-grid-div'>
                            <div className='find-assign-each-agent-middle-left-div'>
                                <img src={navigationicon} alt='Navigation Icon' className='find-assign-each-agent-view-profile-icons navigation-icon'></img>
                                <span>12 Pickups</span>
                            </div>
                            <div className='find-assign-each-agent-middle-right-div'>
                                <img src={locationicon} alt='Location Icon' className='find-assign-each-agent-view-profile-icons'></img>
                                <span>Jouvence</span>
                            </div>
                        </div>

                        <div className='find-assign-each-agent-view-profile-button-div'>
                            <button className='find-assign-each-agent-view-profile-button' onClick={() => {setPage('agent-profile'); navigate('/agent-profile')}}>
                                <img src={personicon} alt='Person Icon' className='find-assign-each-agent-view-profile-button-person-icon'></img>
                                View Profile
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default FindAssignAgent