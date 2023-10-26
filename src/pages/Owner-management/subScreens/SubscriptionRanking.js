import React from 'react'
import BreadCrumb from '../../../components/BreadCrumb'
import { Col, Row } from 'react-bootstrap'
import Dropown from '../../../components/Dropown'
import '../Component/styles.css'
import Subs from '../Component/Subs'


const SubscriptionRanking = () => {
  return (
    <div>
        <BreadCrumb page={'sub-ranking'}/>
        <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}> 
                <div className='heading-text'>
                        Subscription Ranking
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <Dropown/>
            </Col>
        </Row>
        <Row style={{paddingTop:10}}>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <Subs 
                type={'sub-ranking'}
                heading={'VIP'}
                image={true}
                title={'VIP'}
                />
                
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <Subs 
                type={'sub-ranking'}
                heading={'VIP'}
                title={'Premuim'}
                />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                <Subs 
                title={'Standard'}
                type={'sub-ranking'}
                heading={'VIP'}/>
            </Col>

        </Row>
    </div>
  )
}

export default SubscriptionRanking
