import React from 'react'
import { Col, Row, Stack } from 'react-bootstrap'
import './styles.css'
import placeholderuserimage from '../../../components/images/placeholder.svg'
import premuimTrophy from '../../../components/images/premuimTrophy.svg'
import vipTrophy from '../../../components/images/vipTrophy.svg'
import standardTrophy from '../../../components/images/standardTrophy.svg'
import persona from '../../../components/images/personal.svg'
import Icons from '../../../components/Icons'


const CardBody = ({imgType}) =>{
    return(
        <div>
            <Row style={{alignItems:'center',paddingBottom:10}}>
                <Col xs={2} sm={2} md={2} lg={2} >
                    {imgType === 'VIP' && (
                               <img src={vipTrophy} alt='' style={{display:'-ms-grid',height:24,width:24}}/>
                            )}
                            {imgType === 'premuim' && (
                                <img src={premuimTrophy} alt='' style={{display:'-ms-grid',height:24,width:24}}/>
                            )}
                            {imgType === 'standard' && (
                                <img src={standardTrophy} alt='' style={{display:'-ms-grid'}}/>
                            )}
                </Col>
                <Col xs={7} sm={7} md={7} lg={7}>
                        <Row style={{paddingTop:5,alignItems:'center'}}>
                        <Col xs={12} lg={3} md={6}>
                                <img src={placeholderuserimage} alt='' style={{height:45,width:35}}></img>
                        </Col>
                        <Col xs={12} lg={9} md={6}>
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


const Subs = ({heading,title,onclick,type,rightIcon,image,imgType}) => {
  return (
    <>
      {type === 'sub-main'&&(
        <div className='subs-box'>
            <Row style={{paddingRight:5}}>
            <Stack direction="horizontal" style={{justifyContent:'space-between'}}>
                        <div>
                            <div className='subs-text'>{heading}</div>
                                <div style={{
                                fontFamily:'sans-serif',
                                fontWeight:'400',
                                color:'#2D9CDB',
                                fontSize:15
                            }}>{title}</div>
                        </div>
                        <button 
                        onClick={onclick}
                        className='add-an-agent-button'>All Rankings</button>
                </Stack>
               
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
               <Stack direction="horizontal" style={{justifyContent:'space-between'}}>
                        <div className='card-title'>{title}</div>
                        {image?
                        <img src={rightIcon} alt='n' className='listing-table-placeholde'/>:null
                        }
                </Stack>
                    
               </Row>
               <CardBody imgType={imgType}/>
               <CardBody imgType={imgType} />
               <CardBody imgType={imgType}/>
               <CardBody imgType={imgType}/>
               <CardBody imgType={imgType}/>
            </div>
        )}
        {type === 'ecopoint'&& (
            <div className='subs-box'>
               <Row >
                <Stack direction="horizontal" style={{justifyContent:'space-between'}}>
                        <div className='card-title'>{title}</div>
                        <img src={rightIcon} alt='' className='listing-table-placeholde'/>
                </Stack>
               </Row>
               <CardBody imgType={imgType}/>
               <CardBody imgType={imgType} />
            </div>
        )}
        {type === 'booking'&& (
            <div className='subs-box'>
               <Row >
                <Stack direction="horizontal" style={{justifyContent:'space-between'}}>
                        <div className='card-title'>{title}</div>
                        <img src={rightIcon} alt='' className='listing-table-placeholde'/>
                </Stack>
               </Row>
               <CardBody imgType={'premuim'}/>
               <CardBody imgType={'VIP'} />
               <CardBody imgType={'standard'} />
               <CardBody imgType={'VIP'} />
               <CardBody imgType={'premuim'} />
            </div>
        )}
        {type ==='floadCard' && (
             <div className='stat-section-div' style={{position:'relative'}}>
             <div style={{
                color:'#fff',
                backgroundColor:'#4CAC3EB2',
                textAlign:'center',
                borderRadius:5,
                marginTop:-25,
                fontSize:20,
                fontFamily:"Balow",
                fontWeight:700,
                width:'50%',
                // position:'absolute'
                marginLeft:'auto',
                marginRight:'auto'
                }}>
                EcoPoint Level Entry
             </div>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <div style={{display:'flex',gap:25,alignItems:'center'}}>
                <div className='agent-stat-button-icon-div-owner'>
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    height="25px"
                    width="25px"
                    >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M7 20V4h5.5a4 4 0 010 9H7" />
                    </svg>
                </div>
                    <div style={{fontWeight:'700',fontSize:20}}> <span style={{color:'#B08C4F',fontSize:22,fontWeight:'700'}}>200</span> pts</div>
                </div>
                <img src={standardTrophy} alt='' style={{height:20,width:25}}/>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',paddingTop:5,alignItems:'center'}}>
                <div style={{display:'flex',gap:25,alignItems:'center'}}>
                <div className='agent-stat-button-icon-div-owner'>
                <svg
                    fill="#00A389"
                    viewBox="0 0 16 16"
                    height="25px"
                    width="25px"
                    >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" />
                    </svg>
                </div>
                    <div style={{fontWeight:'700',fontSize:20}}> <span style={{color:'#4CAC3E',fontSize:22,fontWeight:'700'}}>100</span></div>
                </div>
                <div style={{display:'flex',gap:10,alignItems:'center'}}>
                <div className='agent-stat'>
                    <svg
                        viewBox="0 0 1024 1024"
                        fill="#00A389"
                        height="25px"
                        width="25px"
                        >
                        <path d="M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z" />
                        </svg>
                    </div>
                    <span style={{color:'#A3A3A3',fontSize:18,fontWeight:'700'}}>4%(30 days)</span>
                </div>
                
            </div>
             </div>
        )}
    </>
  )
}

export default Subs
