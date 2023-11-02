import React from 'react'
// import BreadCrumb from '../../../components/BreadCrumb'
// import Subs from '../Component/Subs'
import Subs from '../Component/subs'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import goldMedal from '../../../assets/icons/star.svg'
import Dropown from '../../../components/Dropown'
import Bread from '../../../components/Bread'

const BookingRanking = () => {
  return (
    <div>
        <Bread
        prevPage={'Agent Management'}
        mainPage={'Booking Management'}
        />
       <Stack direction="horizontal" style={{justifyContent:'space-between'}}>
                <div className='heading-text'>
                    Booking Ranking
                </div>
          
                <Dropown/>
       </Stack>

            <Row style={{gap:0}}>
            <Col xs={12} sm={12} md={6} lg={4} xxl={4} xl={4} style={{paddingBottom:10}}>
            <Subs
            title={'Diamond'}
            type={'booking'}
            // imgType={'VIP'}
            rightIcon={goldMedal}
            />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xxl={4} xl={4} style={{paddingBottom:10}}>
            <Subs
            title={'Gold'}
            type={'booking'}
            // imgType={'premuim'}
            rightIcon={goldMedal}
            />
            </Col>
           
        </Row>
    </div>
  )
}

export default BookingRanking
