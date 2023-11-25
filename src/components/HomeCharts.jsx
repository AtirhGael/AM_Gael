import React, { Children } from 'react'
import 'chart.js';
import "chartjs-plugin-datalabels";
import { Line, Pie , } from 'react-chartjs-2';
import ButtonDropdown from './ButtonDropdown';
import { LineChart } from '@mui/x-charts/LineChart';

function HomeCharts({marginTop,type,calender,seeDetails}) {
    const dataOne = {
        labels: ['Male', 'Female'],
        datasets: [{
            data: [58, 32],
            backgroundColor: ['#2D9CDB', '#35BFEE'],
            hoverBackgroundColor: ['#2D9CDB', '#35BFEE'],
            borderWidth: 0
        }],
    };
    const datatwo = {
        labels: ['Mon', 'Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets: [{
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: ['#2D9CDB', '#35BFEE'],
            hoverBackgroundColor: ['#2D9CDB', '#35BFEE'],
            borderWidth: 0,
            fill: false,
            // borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            
        }],
    };

    const donutOptions = {
        cutoutPercentage: 50,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
          datalabels: {
            anchor: 'end',
            color: 'black',
            offset: 5,
            formatter: (value, context) => {
              const data = context.chart.data;
              const dataset = data.datasets[context.datasetIndex];
              const total = dataset.data.reduce((acc, current) => acc + current, 0);
              const percentage = ((value / total) * 100).toFixed(1) + '%';
              return `${data.labels[context.dataIndex]}\n${percentage}`;
            },
          },
        },
        layout: {
            padding: 10,
        },
    };
  return (
    <div>
        {(type === 'trash')?(
              <div className='home-div-with-cart' style={{marginTop:marginTop}}>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <p style={{fontWeight:'500',fontFamily:'Barlow',minWidth:'50%',color:'#000',fontSize:20}}>{calender?'Booking details': 'Trash Cartegory'}</p>
                    {calender?(
                        <ButtonDropdown
                        page={'admin-management'}
                        />

                    ):null}
                </div>
              <div className='cohort-demographic-pie-chart'>
                  <Pie  
                      data={dataOne} 
                      options={donutOptions} 
                      className='agent-demographic-pie'
                  />
                  <div className='main-left-section-pie-chart'>
                      <div className='main-left-section-pie-chart-flex'>
                          <div className='main-left-section-pie-chart-box' style={{backgroundColor:'#2D9CDB'}}></div>
                          <div className='main-left-section-pie-chart-text'>Female</div>
                      </div>
                      <div className='main-left-section-pie-chart-flex'>
                          <div className='main-left-section-pie-chart-box' style={{backgroundColor:'#35BFEE'}}></div>
                          <div className='main-left-section-pie-chart-text'>Male</div>
                      </div>
                      <div className='main-left-section-pie-chart-flex'>
                          <div className='main-left-section-pie-chart-box' style={{backgroundColor:'#00C4CC'}}></div>
                          <div className='main-left-section-pie-chart-text'>Compost</div>
                      </div>
                      <div className='main-left-section-pie-chart-flex'>
                          <div className='main-left-section-pie-chart-box' style={{backgroundColor:'#00B074'}}></div>
                          <div className='main-left-section-pie-chart-text'>Compost</div>
                      </div>
                      
                  </div>
              </div>
              {seeDetails?(
              <div className='see-more-on-pie-chart'>
                See Details
              </div>

              ):null }

          </div>
        ):(type === 'lineChart')?(
            <div className='home-div-with-cart' style={{marginTop:marginTop}}>
            <div className='line-chart'>
            <p style={{fontWeight:'500',fontFamily:'Barlow'}}>Performance</p>
                <Line  
                    data={datatwo} 
                    options={donutOptions} 
                    className='agent-demographic-pie-chart'
                />
            </div>
        </div>
        ):null}
                  
                
    </div>
  )
}

export default HomeCharts
