import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'



const Layout = ({page, setPage}) => {
    const[showSideNav, setShowSideNav] = useState(false) 
    return (
      <Container fluid>
          <Row>
              <Col xl={2} lg={0} md={0} sm={12} xs={12} className={`side-nav-div side-navigation-col sticky-nav ${showSideNav ? 'display-side-nav' : ''}`}>
                  <Navigation showSideNav={showSideNav} setShowSideNav={setShowSideNav} page={page} setPage={setPage}
                  />
              </Col>
              <Col xl={10} lg={12} md={12} sm={12} xs={12} className={`dashboard-body ${showSideNav ? 'no-scroll' : ''}`}>
                  <div className='header-div'>
                      <Header setShowSideNav={setShowSideNav} showSideNav={showSideNav}/>
                  </div>
          
                  <div className={`pages-content-div `}>
                      <Outlet/>
                  </div>
              </Col>
          </Row>
      </Container>
    )
}

export default Layout