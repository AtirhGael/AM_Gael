import React from 'react'
import BreadCrumb from '../../../components/BreadCrumb'
import Subs from '../Component/Subs'
import { Col, Container, Row } from 'react-bootstrap'
import goldMedal from '../../../components/images/star.svg'
import Dropown from '../../../components/Dropown'

const EcopointRanking = () => {
  return (
    <div>
        <BreadCrumb page={'sub-ranking'}/>
        <Row style={{alignItems:'center',paddingBottom:20}}>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}> 
                <div className='heading-text'>
                    Subscription Ranking
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <Dropown/>
                
            </Col>
        </Row>
        <Container>
        <Row style={{gap:0}}>
            <Col xs={12} sm={12} md={6} lg={4} xxl={4} xl={4} style={{paddingBottom:10}}>
            <Subs
            title={'Diamond'}
            type={'ecopoint'}
            imgType={'VIP'}
            rightIcon={goldMedal}
            />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xxl={4} xl={4} style={{paddingBottom:10}}>
            <Subs
            title={'Gold'}
            type={'ecopoint'}
            imgType={'premuim'}
            rightIcon={goldMedal}
            />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xxl={4} xl={4} style={{paddingBottom:10}}>
            <Subs
            title={'Silver'}
            type={'ecopoint'}
            imgType={'VIP'}
            rightIcon={goldMedal}
            />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xxl={4} xl={4} style={{paddingBottom:10}}>
            <Subs
            title={'Entry'}
            type={'ecopoint'}
            imgType={'standard'}
            rightIcon={goldMedal}
            />
            </Col>
        </Row>
            </Container>
    </div>
  )
}

export default EcopointRanking
