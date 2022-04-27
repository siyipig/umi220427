
import React, {useEffect, useState} from "react";
import {Area} from "@ant-design/charts";

const DemoArea: React.FC = () => {

  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
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
    seriesField='category'
    // isPercent={true}
    color={['#6897a7', '#8bc0d6', '#60d7a7', '#dedede', '#fedca9', '#fab36f', '#d96d6f']}
    // appendPadding={10}
    // padding='auto'
    legend={{position: 'top'}}

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
    // xAxis={
    //   {
    //     range: [0, 1],
    //     tickCount: 5
    //   }
    // }
    xAxis={
      {
        type: 'time',
        mask: 'YYYY'
      }
    }
    yAxis={
      {
        label: {
          // formatter: (value) => {
          //   return (value as unknown as number)*100;
          // }
          formatter: (value) => {
            return ''.concat(value).replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => {
              return ''.concat(s, ',');
            })
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
