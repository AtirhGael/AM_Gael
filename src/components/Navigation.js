import React, {useState} from 'react';
import logo from './images/logo.svg'
import homeicon from './images/home-icon.svg'
import bookingicon from './images/booking-icon.svg'
import fileicon from './images/file-icon.svg'
import editicon from './images/edit-icon.svg'
import cupicon from './images/cup-icon.svg'
import penicon from './images/pen-icon.svg'
import graphicon from './images/graph-icon.svg'
import personicon from './images/person-icon.svg'
import calendaricon from './images/calendaricon.svg'
import chaticon from './images/chat-icon.svg'
import peopleicon from './images/people-icon.svg'
import navbuttondropdownicon from './images/keyboard_arrow_up.svg'
import navbuttondropupicon from './images/dropdown-keyboard_arrow_down.svg'
import { useNavigate } from 'react-router-dom';


const Navigation = ({showSideNav, setShowSideNav, page, setPage}) => {
    const navigate = useNavigate()
    const[buttonDropdownVisible, setIsButtonDropdownVisible] = useState(false)
  return (
    <div className='side-navigation-block'>
        <img src={logo} alt='Logo' className='navigation-logo'></img>
        <div className='navigation-links-div'>
            <div className='each-navigation-grid-div'>
                <img src={homeicon} alt='Home Icon' className='navigation-icon'></img>
                <span>Dashboard</span>
            </div>
            <div className='each-navigation-grid-div'>
                <img src={bookingicon} alt='Home Icon' className='navigation-icon'></img>
                <span>Booking  Management</span>
            </div>
            <div>
                <button className={`navigation-button ${(page === 'find-assign-agent') ? 'active-navigation' : ''}`} onClick={() => {if(showSideNav){setShowSideNav(false)}; setPage('find-assign-agent'); navigate('/find-assign-agent')}}>
                    <div className='each-navigation-grid-div'>
                        <img src={fileicon} alt='Home Icon' className='navigation-icon'></img>
                        <span>Find/Assign Agent</span>
                    </div>
                </button>
            </div>
            <div>
                <button className={`agent-management-dropdown-button navigation-button ${(page === 'agent-management') ? 'active-navigation' : ''}`} onClick={() => {setIsButtonDropdownVisible(!buttonDropdownVisible)}}>
                    <div className='each-navigation-grid-div'>
                        <img src={peopleicon} alt='Home Icon' className='navigation-icon'></img>
                        <span>Agent Management {buttonDropdownVisible ? <img src={navbuttondropdownicon} alt='' className='navbuttondropdonwicon'></img> : <img src={navbuttondropupicon} alt='' className='navbuttondropdonwicon'></img>}</span>
                    </div>
                </button>
            </div>
                {buttonDropdownVisible ? 
                    <div className='dropdown-buttons-div'>
                        <div>
                            <button className={`navigation-button ${(page === 'agent-management') ? 'active-navigation' : ''}`} onClick={() => {if(showSideNav){setShowSideNav(false)}; setPage('agent-management'); navigate('/')}}>
                                <div className='each-navigation-grid-div'>
                                    <span>Overview</span>
                                </div>
                            </button>
                        </div>

                        <div>
                            <button className={`navigation-button ${(page === 'agent-listing') ? 'active-navigation' : ''}`} onClick={() => {if(showSideNav){setShowSideNav(false)}; setPage('agent-listing'); navigate('/agent-listing')}}>
                                <div className='each-navigation-grid-div'>
                                    <span>Agent Listing</span>
                                </div>
                            </button>
                        </div>

                        <div>
                            <button className={`navigation-button ${(page === 'agent-training') ? 'active-navigation' : ''}`} onClick={() => {if(showSideNav){setShowSideNav(false)}; setPage('agent-training'); navigate('/agent-training')}}>
                                <div className='each-navigation-grid-div'>
                                    <span>Training Agents</span>
                                </div>
                            </button>
                        </div>

                        <div>
                            <button className={`navigation-button ${(page === 'active-agents') ? 'active-navigation' : ''}`} onClick={() => {if(showSideNav){setShowSideNav(false)}; setPage('active-agents'); navigate('/active-agents')}}>
                                <div className='each-navigation-grid-div'>
                                    <span>Active Agents</span>
                                </div>
                            </button>
                        </div>

                        <div>
                            <button className={`navigation-button ${(page === 'cohort-listing') ? 'active-navigation' : ''}`} onClick={() => {if(showSideNav){setShowSideNav(false)}; setPage('cohort-listing'); navigate('/agent-demographics')}}>
                                <div className='each-navigation-grid-div'>
                                    <span>Demographics</span>
                                </div>
                            </button>
                        </div>
                    </div> : 
                    null
                }

            <div>
                <button className={`navigation-button ${(page === 'owner-management') ? 'active-navigation' : ''}`} onClick={() => {if(showSideNav){setShowSideNav(false)}; navigate('/owner-management')}}>
                <div className='each-navigation-grid-div'>
                        <img src={editicon} alt='Home Icon' className='navigation-icon'></img>
                        <span>Owner Management</span>
                </div>
                    </button>
                </div>
            <div className='each-navigation-grid-div'>
                <img src={editicon} alt='Home Icon' className='navigation-icon'></img>
                <span>Zone Management</span>
            </div>
            <div className='each-navigation-grid-div'>
                <img src={cupicon} alt='Home Icon' className='navigation-icon'></img>
                <span>EcoPoints</span>
            </div>
            <div className='each-navigation-grid-div'>
                <img src={penicon} alt='Home Icon' className='navigation-icon'></img>
                <span>Reviews</span>
            </div>
            <div className='each-navigation-grid-div'>
                <img src={graphicon} alt='Home Icon' className='navigation-icon'></img>
                <span>Analytics</span>
            </div>
            <div className='each-navigation-grid-div'>
                <img src={personicon} alt='Home Icon' className='navigation-icon'></img>
                <span>Permissions</span>
            </div>
            <div className='each-navigation-grid-div'>
                <img src={calendaricon} alt='Home Icon' className='navigation-icon'></img>
                <span>Workforce Management</span>
            </div>
            <div className='each-navigation-grid-div'>
                <img src={chaticon} alt='Home Icon' className='navigation-icon'></img>
                <span>Support</span>
            </div>
        </div>
    </div>
  )
}

export default Navigation