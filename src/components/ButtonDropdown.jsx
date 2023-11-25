import React, {useState} from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import calendaricon from '../assets/icons/calendar-icon.svg'

const ButtonDropdown = ({page, setPage, navigate}) => {
    const [anchorEl, setAnchorEl] = useState(null);
  return (
    <>
        <Button
            aria-controls="time-range-dropdown-menu"
            aria-haspopup="true"
            variant="contained"
            endIcon={<ArrowDropDownIcon />}
            onClick={(event) => setAnchorEl(event.currentTarget)}
            className='time-range-dropdown-button'
        >
            <img src={calendaricon} alt='Calendar Icon' className='dropdown-calendar-icon' />
            {(page === 'agent-all-ranking') ?
                'This Month' :
                (page === 'agent-management') ?
                    'Weekly' :
                    (page === 'cohort-listing' || page === 'agent-management/cohort-listing') ?
                        '1cohort0723':
                        (page === 'agent-training') ?
                            'Cohort1' :
                            (page === 'agent-profile') ?
                                'This Week':
                                (page === 'bidding-dashboard/incoming-bidding') ?
                                    'Recent' :
                                    (page === 'bidding-dashboard/owners-bid') ?
                                        'Top' :
                                        (page === 'all-past-bookings') ?
                                            'This Week' :
                                            (page === 'admin-management') ?
                                            'Today' :
                                        null
                                    }
                                </Button>

        {(page === 'agent-management/cohort-listing') ?
            <Menu
                id="time-range-dropdown-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                <MenuItem onClick={() => {setPage('/agent-management/cohort-listing'); navigate('/agent-management/cohort-listing')}}>Cohort Listing</MenuItem>
                <MenuItem>Another action</MenuItem>
                <MenuItem>Something else</MenuItem>
            </Menu> :
            <Menu
                id="time-range-dropdown-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                <MenuItem>Action</MenuItem>
                <MenuItem>Another action</MenuItem>
                <MenuItem>Something else</MenuItem>
            </Menu>
        }
    </>
  )
}

export default ButtonDropdown