import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setData(json)
      })
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  useEffect(() => {
    asyncFetch();
  }, []);
  const config = {
    data,
    padding: "auto",
    xField: 'Date',
    yField: 'scales',
    annotations: [
      {
        type: 'regionFilter',
        start: ['min', 'median'],
        end: ['max', 'max'],
        color: '#F4664A',
      },
      {
        type: 'text',
        position: ['min', 'median'],
        content: '中位数',
        offsetY: -4,
        style: { textBaseline: 'bottom' },
      },
      {
        type: 'line',
        start: ['min', 'median'],
        end: ['max', 'median'],
        style: {
          stroke: 'yellow', // '#F4664A',
          lineDash: [2, 2],
        },
      },
    ],
  };
  return <Line {...config} />;
};

export default DemoLine;
