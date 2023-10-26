import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './styles.css'
import placeholderuserimage from '../../../components/images/placeholder.svg'
import cupIcon from '../../../components/images/red-trophy.svg'

const CardBody = () =>{
    return(
        <div>
            <Row style={{alignItems:'center'}}>
                <Col xs={2} sm={2} md={2} lg={2}>
                    <img src={cupIcon} alt='' style={{display:'-ms-grid'}}/>
                </Col>
                <Col xs={7} sm={7} md={7} lg={7}>
                        <Row style={{alignItems:'center',paddingTop:5}}>
                        <Col xs={12} lg={2} md={6}>
                            <img src={placeholderuserimage} alt='' className='listing-table-placeholder-image'></img>
                        </Col>
                        <Col xs={12} lg={10} md={6}>
                            <div className='subs-text'>John Peterson</div>
                            <div className='subs-text-below'>Carrefour Jouvence</div>
                            <div style={{color:'#4CAC3E'}}>100 Pickups</div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                    <div style={{color:'#0D77B9'}}>100K</div>
                </Col>
            </Row>
        </div>
    )
}


const Subs = ({heading,title,onclick,type,rightIcon,image}) => {
  return (
    <>
      {type === 'sub-main'&&(
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
                <button 
                onClick={onclick}
                className='add-an-agent-button'>All Rankings</button>
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
        )}
        {type === 'sub-ranking'&& (
            <div className='subs-box'>
               <Row >
                    <Col xs={6} sm={6} md={6} lg={6}>
                        <div className='card-title'>{title}</div>
                         </Col>
                    <Col xs={6} sm={6} md={6} lg={6} style={{justifySelf:'end'}}>
                        {image?
                        <img src={rightIcon} alt='n' className='listing-table-placeholde'/>:null
                        }
                    </Col>
               </Row>
               <CardBody/>
               <CardBody/>
               <CardBody/>
               <CardBody/>
               <CardBody/>
               <CardBody/>
               <CardBody/>
               <CardBody/>
            </div>
        )}
    </>
  )
}

export default Subs
