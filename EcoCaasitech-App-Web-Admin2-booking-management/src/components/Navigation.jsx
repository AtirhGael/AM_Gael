import React, {useState} from 'react';
import logo from '../assets/images/logo.svg'
import homeicon from '../assets/icons/home-icon.svg'
import bookingicon from '../assets/icons/booking-icon.svg'
import editicon from '../assets/icons/edit-icon.svg'
import penicon from '../assets/icons/pen-icon.svg'
import peopleicon from '../assets/icons/people-icon.svg'
import navbuttondropdownicon from '../assets/icons/keyboard_arrow_up.svg'
import navbuttondropupicon from '../assets/icons/dropdown-keyboard_arrow_down.svg'
import { useNavigate } from 'react-router-dom';


const Navigation = ({showSideNav, setShowSideNav, page, setPage}) => {
    const navigate = useNavigate()
    const[agentManagementButtonDropdownVisible, setIsAgentManagementButtonDropdownVisible] = useState(false)
    const[bookingManagementButtonDropdownVisible, setIsBookingManagementButtonDropdownVisible] = useState(false)
    const[ownerManagementButtonDropdownVisible, setIsOwnerManagementButtonDropdownVisible] = useState(false)
    const[financialManagementButtonDropdownVisible, setIsFinancialManagementButtonDropdownVisible] = useState(false)
    const[settingsButtonDropdownVisible, setIsSettingsButtonDropdownVisible] = useState(false)

    const navigatingFunction = (path) => {
        if(showSideNav){setShowSideNav(false)}; 
        setPage(`${path}`); 
        navigate(`${path}`)
    }

  return (
    <div className='side-navigation-block'>
        <img src={logo} alt='Logo' className='navigation-logo'></img>
        <div className='navigation-links-div'>
            <div className='each-navigation-grid-div'>
                <img src={homeicon} alt='Home Icon' className='navigation-icon'></img>
                <span>Dashboard</span>
            </div>
            <div>
                <button className={`navigation-button ${(page === '/booking-management/book-now-later') ? 'active-navigation' : ''}`} onClick={() => setIsBookingManagementButtonDropdownVisible(!bookingManagementButtonDropdownVisible)}>
                    <div className='each-navigation-grid-div'>
                        <img src={bookingicon} alt='Home Icon' className='navigation-icon'></img>
                        <span>Booking  Management {bookingManagementButtonDropdownVisible ? <img src={navbuttondropdownicon} alt='' className='navbuttondropdonwicon'></img> : <img src={navbuttondropupicon} alt='' className='navbuttondropdonwicon'></img>}</span>
                    </div>
                </button>
            </div>
                {bookingManagementButtonDropdownVisible ? 
                    <div className='dropdown-buttons-div'>
                        <div>
                            <button className={`navigation-button ${(page === '/booking-management/book-now-later') ? 'active-navigation' : ''}`} onClick={() => navigatingFunction('/booking-management/book-now-later')}>
                                <div className='each-navigation-grid-div'>
                                    <span>Book Now/Later</span>
                                </div>
                            </button>
                        </div>
                    </div> : 
                    null
                }
                <div>
                        <button className={`navigation-button ${(page === 'owner-management') ? 'active-navigation' : ''}`} 
                        onClick={() => {
                            if(showSideNav){setShowSideNav(false)}; 
                            setPage('owner-management'); 
                            navigate('owner-management')
                        }}>
                        <div className='each-navigation-grid-div'>
                                <img src={editicon} alt='Home Icon' className='navigation-icon'></img>
                                <span>Owner Management</span>
                        </div>
                    </button>
                </div>
                {/* {ownerManagementButtonDropdownVisible ? 
                    <div></div>:
                    null
                } */}

            <div>
                <button className={`agent-management-dropdown-button navigation-button ${(page === '/agent-management/overview') ? 'active-navigation' : ''}`} onClick={() => {setIsAgentManagementButtonDropdownVisible(!agentManagementButtonDropdownVisible)}}>
                    <div className='each-navigation-grid-div'>
                        <img src={peopleicon} alt='Home Icon' className='navigation-icon'></img>
                        <span>Agent Management {agentManagementButtonDropdownVisible ? <img src={navbuttondropdownicon} alt='' className='navbuttondropdonwicon'></img> : <img src={navbuttondropupicon} alt='' className='navbuttondropdonwicon'></img>}</span>
                    </div>
                </button>
            </div>
                {agentManagementButtonDropdownVisible ? 
                    <div className='dropdown-buttons-div'>
                        <div>
                            <button className={`navigation-button ${(page === '/agent-management/overview') ? 'active-navigation' : ''}`} onClick={() => navigatingFunction('/agent-management/overview')}>
                                <div className='each-navigation-grid-div'>
                                    <span>Overview</span>
                                </div>
                            </button>
                        </div>

                        <div>
                            <button className={`navigation-button ${(page === '/agent-management/agent-listing') ? 'active-navigation' : ''}`} onClick={() => navigatingFunction('/agent-management/agent-listing')}>
                                <div className='each-navigation-grid-div'>
                                    <span>Agent Listing</span>
                                </div>
                            </button>
                        </div>

                        <div>
                            <button className={`navigation-button ${(page === '/agent-management/agent-training') ? 'active-navigation' : ''}`} onClick={() => navigatingFunction('/agent-management/agent-training')}>
                                <div className='each-navigation-grid-div'>
                                    <span>Training Agents</span>
                                </div>
                            </button>
                        </div>

                        <div>
                            <button className={`navigation-button ${(page === '/agent-management/active-agents') ? 'active-navigation' : ''}`} onClick={() => navigatingFunction('/agent-management/active-agents')}>
                                <div className='each-navigation-grid-div'>
                                    <span>Active Agents</span>
                                </div>
                            </button>
                        </div>

                        <div>
                            <button className={`navigation-button ${(page === '/agent-management/cohort-listing') ? 'active-navigation' : ''}`} onClick={() => navigatingFunction('/agent-management/cohort-listing')}>
                                <div className='each-navigation-grid-div'>
                                    <span>Demographics</span>
                                </div>
                            </button>
                        </div>

                        <div>
                            <button className={`navigation-button ${(page === '/agent-management/find-assign-agent') ? 'active-navigation' : ''}`} onClick={() => navigatingFunction('/agent-management/find-assign-agent')}>
                                <div className='each-navigation-grid-div'>
                                    <span>Find/Assign Agent</span>
                                </div>
                            </button>
                        </div>
                    </div> : 
                    null
                }

            
            <div>
                <button className={`navigation-button ${(page === '/financial-management/overview') ? 'active-navigation' : ''}`} onClick={() => setIsFinancialManagementButtonDropdownVisible(!financialManagementButtonDropdownVisible)}>
                    <div className='each-navigation-grid-div'>
                        <img src={editicon} alt='Home Icon' className='navigation-icon'></img>
                        <span>Financial Management {financialManagementButtonDropdownVisible ? <img src={navbuttondropdownicon} alt='' className='navbuttondropdonwicon'></img> : <img src={navbuttondropupicon} alt='' className='navbuttondropdonwicon'></img>}</span>
                    </div>
                </button>
            </div> 
                {financialManagementButtonDropdownVisible ? 
                    <div></div> :
                    null
                }
            <div>
                <button className={`navigation-button ${(page === '/settings/overview') ? 'active-navigation' : ''}`} onClick={() => setIsSettingsButtonDropdownVisible(!settingsButtonDropdownVisible)}>
                    <div className='each-navigation-grid-div'>
                        <img src={penicon} alt='Home Icon' className='navigation-icon'></img>
                        <span>Settings {settingsButtonDropdownVisible ? <img src={navbuttondropdownicon} alt='' className='navbuttondropdonwicon'></img> : <img src={navbuttondropupicon} alt='' className='navbuttondropdonwicon'></img>}</span>
                    </div>
                </button>
            </div>
                {settingsButtonDropdownVisible ?
                    <div>
                        
                    </div> :
                    null
                }
        </div>
    </div>
  )
}

export default Navigation