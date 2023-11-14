import React from 'react';
import { DualAxes } from '@ant-design/plots';
import jsonData from '../data.json'

const MixedChart = () => {
  const data = jsonData
  // const data = [
  //   {
  //     month: 'March',
  //     billing_amount: 40,
  //     difference: 2828,
  //   },
  //   {
  //     month: 'April',
  //     billing_amount: 60,
  //     difference: 3060,
  //   },
  //   {
  //     month: 'May',
  //     billing_amount: 150,
  //     difference: 6750,
  //   },
  //   {
  //     month: 'June',
  //     billing_amount: 240,
  //     difference: 9300,
  //   },
  // ];
  const config = {
    // width: 200,
    // height: 400,
    // autoFit: true, //chart automatically adjusts to fit the container.
    data: [data, data],
    xField: 'month',
    yField: ['billing_amount', 'difference'],
    geometryOptions: [
      {
        geometry: 'column',
      },
      {
        geometry: 'line',
        lineStyle: {
          lineWidth: 2,
        },
      },
    ],
    legend: {
        layout: 'horizontal',
        position: 'bottom',
        title: {
            text: 'Billing Amount',
            spacing: 8,
          },
      }
  };
  return <DualAxes {...config} />;
};

export default MixedChart;