import React from 'react'
import './styles.css'
import demographicsmap from '../../assets/images/Rectangle 483.svg'
import Chart from 'chart.js/auto';
import 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import "chartjs-plugin-datalabels";
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { Grid } from '@mui/material';


const AgentDemographics = () => {
    const dataOne = {
        labels: ['Male', 'Female'],
        datasets: [{
            data: [58, 32],
            backgroundColor: ['#2D9CDB', '#35BFEE'],
            hoverBackgroundColor: ['#2D9CDB', '#35BFEE'],
            borderWidth: 0
        }],
    };

    const data = {
        labels: ['18-25', '26-35', '36-45', '46+'],
        datasets: [
          {
            label: 'Frequency',
            backgroundColor: [
                'rgba(2, 99, 255, 1)',
                'rgba(255, 119, 35, 1)',
                'rgba(142, 48, 255, 1)',
                'rgba(133, 128, 192, 1)'
            ],
            borderWidth: 0,
            data: [40, 88, 60, 22],
            barThickness: 15
          },
        ]
    };
      
    const options = {
        responsive: true,
        plugins: {
            legend: {
              display: false,
            },
            datalabels: {
                display: true,
                color: "black",
                align: "end",
                anchor: "end",
                font: { size: "14" }
            },
        },
        scales: {
          x: {
            beginAtZero: true,
            grid: {
                display: false, 
                drawBorder: false,
            },
            border: {
                display: false,
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
                stepSize: 25,
                min: 0,
                max: 100,
              },
            grid: {
                display: false, 
                drawBorder: false,
            },
            border: {
                display: false,
            }
          },
        },
    };

    const lineData = {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [
          {
            label: 'Frequencies',
            data: [10, 25, 50, 80, 18, 27, 50],
            fill: true,
            backgroundColor: '#CEEAFE',
            borderColor: '#0F9CFF',
            borderWidth: 2,
          },
        ],
    };

    const lineOptions = {
        responsive: true,
        plugins: {
            legend: {
              display: false,
            },
            datalabels: {
                color: 'transparent'
            },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
                stepSize: 25,
                min: 0,
                max: 100,
            },
            grid: {
                display: false, 
                drawBorder: false,
            },
            border: {
                display: false,
            }
          },
          x: {
            grid: {
                display: false, 
                drawBorder: false,
            },
            border: {
                display: false,
            }
          }
        },
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

    Chart.register(ChartDataLabels);

  return (
    <div>
        <div className='cohort-demographic-body-div'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6} className='cohort-demographic-each-col'>
                    <div className='cohort-demographic-each-stat-div'>
                        <p>Location</p>
                        <img src={demographicsmap} alt='' className='demographics-map'></img>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} className='cohort-demographic-each-col'>
                    <div className='cohort-demographic-each-stat-div'>
                        <p>Performance</p>
                        <Line data={lineData} options={lineOptions} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} className='cohort-demographic-each-col'>
                    <div className='cohort-demographic-each-stat-div'>
                        <p>Sex</p>
                        <div className='cohort-demographic-pie-chart-div'>
                            <Doughnut 
                                data={dataOne} 
                                options={donutOptions} 
                                className='agent-demographic-pie-chart'
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} className='cohort-demographic-each-col'>
                    <div className='cohort-demographic-each-stat-div'>
                        <p>Age</p>
                        <Bar data={data} options={options} />
                    </div>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default AgentDemographics