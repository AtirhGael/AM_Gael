import React from 'react'
import Bread from '../../../components/Bread'
import Subs from '../Component/subs'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import goldMedal from '../../../assets/icons/star.svg'
import Dropown from '../../../components/Dropown'

const EcopointRanking = () => {
  return (
    <div>
        <Bread
        prevPage={'Agent Management'}
        mainPage={'EcoPoint Ranking'}
        />
        <Stack direction="horizontal" style={{justifyContent:'space-between',paddingBottom:10}}>
                <div className='heading-text'>
                EcoPoint Ranking
                </div>
                <Dropown/>
        </Stack>
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
    </div>
  )
}

export default EcopointRanking
