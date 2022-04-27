
import React, {useEffect, useState} from "react";
import {Line} from "@ant-design/charts";

const DemoLine: React.FC = () => {

  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setData(json);
      })
      .catch(err => {
        console.log("fetch error: ", err)
      })
  }
  useEffect(() => {
    asyncFetch();
  }, [])

  return <Line
    data={data}
    xField='year'
    yField='gdp'
    seriesField='name'
    yAxis={
      {
        label: {
          style: {
            fill: '#aaa',
            fontSize: 12
          },
          formatter: (v) => {
            return ''.concat(((v as unknown as number) / 1000000000).toFixed(1) as unknown as string, ' B')
          }
        }
      }
    }
    legend={
      {
        position: 'top'
      }
    }
    smooth={true}
    animation={          //  这个得找资料再看看api ，要再理解下
      {
        appear: {
          animation: 'path-in',
          duration: 5000
        }
      }
    }
  />

}

export default DemoLine;
