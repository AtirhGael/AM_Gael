import React, {useState} from 'react'
import './styles.css'
import bigmap from '../../assets/images/Rectangle 338.svg'
import FilterSearch from '../../components/FilterSearch'
import arrowforward from '../../assets/icons/arrow_forward.svg'
import arrowback from '../../assets/icons/arrow_back.svg'
import verified from '../../assets/icons/verified.svg'
import placeholderagentimage from '../../assets/images/Ellipse 110.svg'
import personicon from '../../assets/icons/person.svg'
import navigationicon from '../../assets/icons/assistant_navigation.svg'
import locationicon from '../../assets/icons/location_on.svg'
import star from '../../assets/icons/star.svg'
import { useNavigate } from 'react-router-dom'
import GreenCheckbox from '../../components/GreenCheckbox'
import paperairplaneroundtheworld from '../../assets/images/submit image 1.svg'
import ModalLayout from '../../components/ModalLayout'
import { Grid } from '@mui/material'

const FindAssignAgent = ({setPage}) => {
    const navigate = useNavigate()
    const[isRequestAssignedSuccessfullyModalVisible, setIsRequestAssignedSuccessfullyModalVisible] = useState(false)
  return (
    <div>
        <img src={bigmap} alt='' style={{height: '300px', width: '100%', objectFit: 'cover', marginBottom: '50px'}}></img>

        <div className='find-assign-agent-upper-grid-div'>
            <FilterSearch/>
            <div className='find-assign-agent-right-div'>
                <button className='assign-button' onClick={() => setIsRequestAssignedSuccessfullyModalVisible(true)}>Assign</button>
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
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <div className='find-assign-each-agent-div'>
                        <GreenCheckbox/>
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
                            <button className='find-assign-each-agent-view-profile-button' onClick={() => {setPage('/agent-management/agent-profile'); navigate('/agent-management/agent-profile')}}>
                                <img src={personicon} alt='Person Icon' className='find-assign-each-agent-view-profile-button-person-icon'></img>
                                View Profile
                            </button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <div className='find-assign-each-agent-div'>
                        <GreenCheckbox/>
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
                            <button className='find-assign-each-agent-view-profile-button' onClick={() => {setPage('/agent-management/agent-profile'); navigate('/agent-management/agent-profile')}}>
                                <img src={personicon} alt='Person Icon' className='find-assign-each-agent-view-profile-button-person-icon'></img>
                                View Profile
                            </button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <div className='find-assign-each-agent-div'>
                        <GreenCheckbox/>
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
                            <button className='find-assign-each-agent-view-profile-button' onClick={() => {setPage('/agent-management/agent-profile'); navigate('/agent-management/agent-profile')}}>
                                <img src={personicon} alt='Person Icon' className='find-assign-each-agent-view-profile-button-person-icon'></img>
                                View Profile
                            </button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <div className='find-assign-each-agent-div'>
                        <GreenCheckbox/>
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
                            <button className='find-assign-each-agent-view-profile-button' onClick={() => {setPage('/agent-management/agent-profile'); navigate('/agent-management/agent-profile')}}>
                                <img src={personicon} alt='Person Icon' className='find-assign-each-agent-view-profile-button-person-icon'></img>
                                View Profile
                            </button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <div className='find-assign-each-agent-div'>
                        <GreenCheckbox/>
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
                            <button className='find-assign-each-agent-view-profile-button' onClick={() => {setPage('/agent-management/agent-profile'); navigate('/agent-management/agent-profile')}}>
                                <img src={personicon} alt='Person Icon' className='find-assign-each-agent-view-profile-button-person-icon'></img>
                                View Profile
                            </button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <div className='find-assign-each-agent-div'>
                        <GreenCheckbox/>
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
                            <button className='find-assign-each-agent-view-profile-button' onClick={() => {setPage('/agent-management/agent-profile'); navigate('/agent-management/agent-profile')}}>
                                <img src={personicon} alt='Person Icon' className='find-assign-each-agent-view-profile-button-person-icon'></img>
                                View Profile
                            </button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <div className='find-assign-each-agent-div'>
                        <GreenCheckbox/>
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
                            <button className='find-assign-each-agent-view-profile-button' onClick={() => {setPage('/agent-management/agent-profile'); navigate('/agent-management/agent-profile')}}>
                                <img src={personicon} alt='Person Icon' className='find-assign-each-agent-view-profile-button-person-icon'></img>
                                View Profile
                            </button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <div className='find-assign-each-agent-div'>
                        <GreenCheckbox/>
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
                            <button className='find-assign-each-agent-view-profile-button' onClick={() => {setPage('/agent-management/agent-profile'); navigate('/agent-management/agent-profile')}}>
                                <img src={personicon} alt='Person Icon' className='find-assign-each-agent-view-profile-button-person-icon'></img>
                                View Profile
                            </button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>

        <ModalLayout
            size={'small'}
            state={isRequestAssignedSuccessfullyModalVisible}
            stateFunction={setIsRequestAssignedSuccessfullyModalVisible}
            content={
                <>
                    <div className='action-modal-div'>
                        <img src={paperairplaneroundtheworld} alt='' className='paper-airplane-round-the-world'></img>
                        <p>Request assigned successfully</p>
                    </div>
                </>
            }
        />

    </div>
  )
}

export default FindAssignAgent