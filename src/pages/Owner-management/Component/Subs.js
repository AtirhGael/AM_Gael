import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './styles.css'
import placeholderuserimage from '../../../components/images/placeholder.svg'

const Subs = ({heading,title}) => {
  return (
    <div className='subs-box'>
        <Row style={{justifyContent:'space-between'}}>
            <Col xs={12} lg={5} md={6}>
                <div className='subs-text'>{heading}</div>
                <div style={{
                    fontFamily:'sans-serif',
                    fontWeight:'400',
                    color:'#2D9CDB',
                    fontSize:15
                }}>{title}</div>
            </Col>
            <Col xs={12} lg={7} md={6} style={{justifyContent:'flex-end',alignItems:'flex-end'}}>
            <button className='add-an-agent-button'>All Rankings</button>
            </Col>
        </Row>
        <Row style={{alignItems:'center',paddingTop:5}}>
            <Col xs={12} lg={2} md={6}>
                <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image'></img>
            </Col>
            <Col xs={12} lg={10} md={6}>
                <div className='subs-text'>John Peterson</div>
                <div className='subs-text-below'>Carrefour Jouvence</div>
            </Col>
        </Row>
        <Row style={{alignItems:'center',paddingTop:5}}>
            <Col xs={12} lg={2} md={6}>
                <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image'></img>
            </Col>
            <Col xs={12} lg={10} md={6}>
                <div className='subs-text'>John Peterson</div>
                <div className='subs-text-below'>Carrefour TKC</div>
            </Col>
        </Row>
        <Row style={{alignItems:'center',paddingTop:5}}>
            <Col xs={12} lg={2} md={6}>
                <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image'></img>
            </Col>
            <Col xs={12} lg={10} md={6}>
                <div className='subs-text'>John Peterson</div>
                <div className='subs-text-below'>Carrefour RoundPoint</div>
            </Col>
        </Row>
    </div>
  )
}

export default Subs
