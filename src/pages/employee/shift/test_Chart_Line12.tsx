



import React, {useEffect, useState} from "react";
import {Line} from "@ant-design/charts";

const DemoLine: React.FC = () => {

  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/c48dbbb1-fccf-4a46-b68f-a3ddb4908b68.json')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setData(json);
      })
      .catch(err => {
        console.log('fetch failed: ', err);
      })
  }
  useEffect(() => {
    asyncFetch();
  },[])

  return <Line
    data={data}
    xField='date'
    yField='value'
    seriesField='type'
    color={(item) => {
      const {type} = item;
      if (type === 'register') {
        return '#F4664A'
      }
      if (type === 'download') {
        return '#30BF78';
      }
      return '#FAAD14';
    }
    }
    yAxis={
      {
        label: {
          formatter: (v) => {
            return ''.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => {
              return ''.concat(s, ',');
            })
          }
        }
      }
    }
    lineStyle={
      (item) => {
        const {type} = item;
        if (type === 'register') {
          return {
            lineDash: [4, 4],
            opacity: 1
          }
        }
        return { opacity: 1}
      }
    }
  />
}

export default DemoLine;

