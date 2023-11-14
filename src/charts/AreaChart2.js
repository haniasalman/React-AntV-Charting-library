import { Area } from '@ant-design/plots';
import jsonData from './areachart_curryear.json'

const AreaCh = () => {
    const data = jsonData

  const config = {
    data,
    xField: 'month',
    yField: 'unit_consumed',
    smooth:true,
    meta: {
        yField: {
          range: [0, 100]
        }
      },
    // yAxis: {
    //   range: [0, 100],
    // //   tickCount: 5,
    // },
    areaStyle: () => {
      return {
        fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
      };
    },
  };

  return <Area {...config} />;
};

export default AreaCh; 