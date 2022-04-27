
import React, {useEffect, useState} from "react";
import {Area} from "@ant-design/charts";

const DemoArea: React.FC = () => {

  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/67ef5751-b228-417c-810a-962f978af3e7.json')
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
    xField='year'
    yField='value'
    seriesField='country'
    isPercent={true}
    color={['#82d1de', '#cb302d', '#e3ca8c']}
    appendPadding={10}
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
    // areaStyle={
    //   () => {
    //     return { fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff' };
    //   }
    // }
    areaStyle={{ fillOpacity: 0.7 }}
    xAxis={
      {
        range: [0, 1],
        tickCount: 5
      }
    }
    yAxis={
      {
        label: {
          formatter: (value) => {
            return (value as unknown as number)*100;
          }
        }
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
