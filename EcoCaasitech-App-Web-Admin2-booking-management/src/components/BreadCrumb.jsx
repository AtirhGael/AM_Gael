import React from 'react'
import chevronright from '../assets/icons/chevron_right.svg'

const BreadCrumb = ({section, page}) => {
  return (
    <div className='bread-crumb-div'>
      {(section === 'agent-management') ? 
        <span>{(page === 'agent-profile' ? 'Agent Listing' : 'Agent Management')}</span> :
        (section === 'booking-management') ?
          <span>Booking Management</span> : //add the other sections too
      null 
      }
      <img src={chevronright} alt='Chevron Right Icon' className='chevron-right-icon'></img>
      <span>
        {(page === 'active-agents') ? 
          'Active Agents' : 
          (page === 'agent-training') ? 
            'Training Agent' : 
            (page === 'agent-listing') ?
              'Agent Listing' :
              (page === 'cohort-listing') ?
                'Cohort Listing' :
                (page === 'agent-all-ranking') ?
                  'All Ranking' :
                  (page === 'agent-profile') ?
                    'Agent Profile' :
                    (page === 'incoming-request-listing') ?
                      'Incoming Request Listing' :
                      (page === 'bid') ?
                        <>
                          <span>Incoming Request</span>
                          <img src={chevronright} alt='Chevron Right Icon' className='chevron-right-icon'></img>
                          <span>View Details</span>
                          <img src={chevronright} alt='Chevron Right Icon' className='chevron-right-icon'></img>
                          <span>Bid</span>
                        </> :
                        (page === 'bidding-dashboard') ?
                          'Bidding Dashboard' :
                          (page === 'booking-details') ?
                            'Booking Details' :
          null //new pages goes here
        }
      </span>
    </div>
  )
}

export default BreadCrumb