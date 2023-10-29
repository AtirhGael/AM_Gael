import React from 'react'
import { Row, Col } from 'react-bootstrap'
import demographicsmap from './images/Rectangle 483.svg'
import Chart from 'chart.js/auto';
import 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import "chartjs-plugin-datalabels";
import { Bar, Pie , Doughnut } from 'react-chartjs-2';

function HomeCharts({marginTop}) {
    const dataOne = {
        labels: ['Male', 'Female'],
        datasets: [{
            data: [58, 32],
            backgroundColor: ['#2D9CDB', '#35BFEE'],
            hoverBackgroundColor: ['#2D9CDB', '#35BFEE'],
            borderWidth: 0
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
                    <div className='home-div-with-cart' style={{marginTop:marginTop}}>
                        <div className='cohort-demographic-pie-chart-div'>
                        <p style={{fontWeight:'500',fontFamily:'Barlow'}}>Trash Cartegory</p>
                            <Pie  
                                data={dataOne} 
                                options={donutOptions} 
                                className='agent-demographic-pie-chart'
                            />
                        </div>

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
                                    <div className='main-left-section-pie-chart-box' style={{backgroundColor:'#000'}}></div>
                                    <div className='main-left-section-pie-chart-text'>Compost</div>
                                </div>
                                <div className='main-left-section-pie-chart-flex'>
                                    <div className='main-left-section-pie-chart-box' style={{backgroundColor:'#000'}}></div>
                                    <div className='main-left-section-pie-chart-text'>Compost</div>
                                </div>
                                
                            </div>
                    </div>
                
    </div>
  )
}

export default HomeCharts
