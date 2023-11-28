import React, { useEffect, useState } from 'react'
import Subs from '../Component/subs'
import goldMedal from '../../../assets/images/Gold Icon.png'
import diamondMedal from '../../../assets/images/Diamond Icon.png'
import silverMedal from '../../../assets/images/Silver Icon.png'
import entryMedal from '../../../assets/images/Entry Icon.png'
import axiosServices from '../../../services/axiosServices'
import ButtonDropdown from '../../../components/ButtonDropdown'
import BreadCrumb from '../../../components/BreadCrumb'
import { Grid,Stack } from '@mui/material'


const EcopointRanking = () => {

  const [ecopointLevel, setEcopointLevel] = useState([]) 
  const [diamond,setDiamond] = useState([])
  const [silver,setSilver] = useState([])
  const [entry,setEntry] = useState([])

   
useEffect(()=>{
  axiosServices.rankByEcopoint().then(res=>{
    console.log(res.data.data,'for ecopoint ranking');
    setEcopointLevel(res.data.data)
  }).catch(error=>{
    console.log(error);
  })
},[])

const golden = ecopointLevel.map(item=>item.ecopoint_level)

console.log(golden);

  return (
    <div>
        <BreadCrumb sectionData={'Agent Management'} pageData={'EcoPoint Ranking'}/>
        <Stack direction="horizontal" style={{justifyContent:'space-between',paddingBottom:10}}>
                <div className='heading-text'>
                EcoPoint Ranking
                </div>
                <ButtonDropdown
                page = {'agent-management'}
                />
        </Stack>
        <Grid container spacing={1}>
         
            <Grid item xs={12} sm={12} md={6} lg={4} xxl={4} xl={4} style={{paddingBottom:10}}>
            <Subs
            title={'Diamond'}
            type={'ecopoint'}
            imgType={'VIP'}
            rightIcon={diamondMedal}
            />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xxl={4} xl={4} style={{paddingBottom:10}}>
            <Subs
            title={'Gold'}
            type={'ecopoint'}
            imgType={'premuim'}
            rightIcon={goldMedal}
            />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xxl={4} xl={4} style={{paddingBottom:10}}>
            <Subs
            title={'Silver'}
            type={'ecopoint'}
            imgType={'VIP'}
            rightIcon={silverMedal}
            />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xxl={4} xl={4} style={{paddingBottom:10}}>
            <Subs
            title={'Entry'}
            type={'ecopoint'}
            imgType={'VIP'}
            rightIcon={entryMedal}
            />
            </Grid>
            {ecopointLevel.ecopoint_level ==="Entry"?(
              <Grid  xs={12} sm={12} md={6} lg={4} xxl={4} xl={4} style={{paddingBottom:10}}>
              <div className='subs-box'>
                <Grid >
                  <Stack direction="horizontal" style={{justifyContent:'space-between'}}>
                          <div className='card-title'>Entry</div>
                          <img src={goldMedal} alt='' className='listing-table-placeholde'/>
                  </Stack>
                </Grid>
                {/* {ecopointLevel.map((item)=>(
                    <Row style={{alignItems:'center',paddingBottom:10}}>
                      <Col xs={2} sm={2} md={2} lg={2} >
                          <img src={vipTrophy} alt='' style={{display:'-ms-grid',height:24,width:24}}/>
                      </Col>
                      <Col xs={7} sm={7} md={7} lg={7}>
                              <Row style={{paddingTop:5,alignItems:'center'}}>
                              <Col xs={12} lg={3} md={6}>
                                  <img src={placeholderuserimage} alt='' style={{height:45,width:35}}></img>
                              </Col>
                              <Col xs={12} lg={9} md={6}>
                                  <div className='subs-text'>{item.first_name} {item.last_name}</div>
                                  <div className='subs-text-below'>{item.country_name}</div>
                                  <div style={{color:'#4CAC3E'}}>{item.ecopoint_total} Pickups</div>
                              </Col>
                          </Row>
                      </Col>
                      <Col xs={3} sm={3} md={3} lg={3}>
                          <div style={{color:'#0D77B9'}}>100K</div>
                      </Col>
                  </Row>

                ))} */}
              </div>
              </Grid>

            ):null }
        </Grid>
    </div>
  )
}

export default EcopointRanking
