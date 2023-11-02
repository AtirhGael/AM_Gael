import React from 'react'
import { Col, Row, Stack } from 'react-bootstrap'
import './styles.css'
import placeholderuserimage from '../../../assets/images/placeholder.svg'
import premuimTrophy from '../../../assets/icons/premuimTrophy.svg'
import vipTrophy from '../../../assets/icons/vipTrophy.svg'
import standardTrophy from '../../../assets/icons/standardTrophy.svg'
// import persona from '../../../assets/images/person.svg'
import PeopleIcon from '@mui/icons-material/People';
import { ArrowUpward } from '@mui/icons-material'
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

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
             <div className='with-bottom-layer' style={{position:'relative'}}>
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
                // position:'absolute',
                marginLeft:'auto',
                marginRight:'auto'
                }}>
                EcoPoint Level Entry
             </div>
            <div style={{display:'flex'}}>
                <div style={{display:'flex',gap:25,alignItems:'center'}}>
                <div style={{
                    height:40,
                    width:40,
                    backgroundColor:'#00B07426',
                    borderRadius:20,
                    justifyContent:'center',
                    alignItems:'center',
                    display: 'flex',
                }}>
               <LocalParkingIcon sx={{margin:'auto',color:'#4CAC3E',flex:1}}/>
                </div>
                    <div style={{fontWeight:'700',fontSize:20}}> <span style={{color:'#B08C4F',fontSize:22,fontWeight:'700'}}>200</span> pts</div>
                </div>
                <WorkspacePremiumIcon sx={{
                    color:'#4CAC3E',
                    height:80,
                    width:80,
                    position:'absolute',
                    right:0,
                    top:1,
                }}/>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',paddingTop:5,alignItems:'center'}}>
                <div style={{display:'flex',gap:25,alignItems:'center'}}>
                <div style={{
                    height:40,
                    width:40,
                    backgroundColor:'#00B07426',
                    borderRadius:20,
                    justifyContent:'center',
                    alignItems:'center',
                    display: 'flex',
                }}>
               <PeopleIcon sx={{margin:'auto',color:'#4CAC3E',flex:1}}/>
                </div>
                    <div style={{fontWeight:'700',fontSize:20}}> <span style={{color:'#4CAC3E',fontSize:22,fontWeight:'700'}}>100</span></div>
                </div>
                <div style={{display:'flex',gap:10,alignItems:'center'}}>
                <div style={{
                    height:30,
                    width:30,
                    backgroundColor:'#00B07426',
                    borderRadius:15,
                    justifyContent:'center',
                    alignItems:'center',
                    display: 'flex',
                }}>
               <ArrowUpward sx={{margin:'auto',color:'#4CAC3E',flex:1}}/>
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
