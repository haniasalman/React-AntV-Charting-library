import { DualAxes } from '@ant-design/plots';
import jsonData from './areachart_curryear.json'

const AreaChart = () => {
    const data = jsonData
  const config = {
    // data,
    data: [data, data],
    xField: 'month',
    yField: ['unit_consumed', 'billing_amount'],
    // xField: 'month',
    // yField: 'unit_consumed',
    // xAxis: {
    //   range: [0, 1],
    // },
    // geometryOptions: [
    //     {
    //       geometry: 'column',
    //     },
    //     {
    //       geometry: 'line',
    //       lineStyle: {
    //         lineWidth: 2,
    //       },
    //     },
    //   ],
    geometryOptions: [
        {
          geometry: 'line',
          color: '#5B8FF9',
          smooth: false,
        },
        {
          geometry: 'line',
          color: '#5AD8A6',
          smooth: true,
        },
      ],

      
  };

  return <DualAxes {...config} />;
};


export default AreaChart;