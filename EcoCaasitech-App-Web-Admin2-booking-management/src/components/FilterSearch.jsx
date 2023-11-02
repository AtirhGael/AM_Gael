import React,{useState} from 'react'
import searchicon from '../assets/icons/search.svg'
import filtericon from '../assets/icons/filter_list.svg'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const FilterSearch = (onclick,onclick1,page) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
      };
  return (
    <div>
        <div className='listing-actions-div'>
            <button onclick={handleOpenMenu} className='listing-filter-button'>
                <img src={filtericon} alt='Filter Icon' className='listing-filter-icon'></img>
                <span>Filter</span>
            </button>
            <div className='listing-search-div'>
                <input placeholder='Search here' className='listing-search-input'></input>
                <button className='listing-search-icon-button'>
                    <img src={searchicon} alt='Search Icon' className='listing-search-icon'></img>
                </button>
            </div>
        </div>
        <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
            <div>
              <MenuItem onClick={onclick}>Status</MenuItem>
              <MenuItem onClick={onclick1}>Book Type</MenuItem>
            </div> 
      </Menu>
    </div>
  )
}

export default FilterSearch