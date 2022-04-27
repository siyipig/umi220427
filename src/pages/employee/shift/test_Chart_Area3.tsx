
import React, {useEffect, useState} from "react";
import {Area} from "@ant-design/charts";

const DemoArea: React.FC = () => {

  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setData(json)
      })
      .catch(err => console.log('fetch failed: ', err))
  }
  useEffect(() => {
    asyncFetch();
  },[])

  return <Area
    data={data}
    xField='Date'
    yField='scales'
    // padding='auto'
    annotations={[
      {
        type: 'text',
        position: ['min', 'median'],
        content: '中位线',
        offsetY: -4,
        // style: { textBaseline: 'bottom' }
        top: true,
        style: {
          // fill: '#fff',
          fontSize: 12,
          textAlign: 'left',
          textBaseline: 'bottom',
        }
      },{
        type: 'line',
        start: ['min', 'median'],
        end: ['max', 'median'],
        top: true,
        style: {
          stroke:'red',
          lineDash: [2, 2]
        }
      }
    ]}
    areaStyle={
      () => {
        return { fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff' };
      }
    }
    xAxis={
      {
        range: [0, 1],
        tickCount: 5
      }
    }
    slider={
      {
        start: 0.1,
        end: 0.9,
        trendCfg: {isArea: true}
      }
    }
  />
}

export default DemoArea;
