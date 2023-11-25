import React, {useState} from 'react'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import { Grid } from '@mui/material'



const Layout = ({page, setPage}) => {
    const[showSideNav, setShowSideNav] = useState(false) 
    return (
      
          <Grid container>
              <Grid item xl={2} lg={0} md={0} sm={12} xs={12} className={`side-nav-div side-navigation-col sticky-nav ${showSideNav ? 'display-side-nav' : ''}`}>
                  <Navigation showSideNav={showSideNav} setShowSideNav={setShowSideNav} page={page} setPage={setPage}/>
              </Grid>
              <Grid item xl={10} lg={12} md={12} sm={12} xs={12} className={`dashboard-body ${showSideNav ? 'no-scroll' : ''}`}>
                  <div className='header-div'>
                      <Header setShowSideNav={setShowSideNav} showSideNav={showSideNav}/>
                  </div>
          
                  <div className={`pages-content-div `}>
                      <Outlet/>
                  </div>
              </Grid>
          </Grid>
      
    )
}

export default Layout