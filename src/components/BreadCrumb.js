import React from 'react'
import chevronright from '../components/images/chevron_right.svg'

const BreadCrumb = ({page}) => {
  return (
    <div className='bread-crumb-div'>
      <span>{(page === 'agent-profile' ? 'Agent Listing' : 'Agent Management')}</span>
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
                    null
            }
        </span>
    </div>
  )
}

export default BreadCrumb