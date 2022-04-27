
import React, {useEffect, useState} from "react";
import {Line} from "@ant-design/charts";

const DemoLine: React.FC = () => {

  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setData(json);
      })
  }
  useEffect(() => {
    asyncFetch();
  }, []);

  return <Line
    data={data}
    xField='year'
    yField='value'
    seriesField='category'
    padding='auto'
    yAxis={
      {
        title: {
          text: '哈哈Y'
        }
      }
    }
    xAxis={
      {
        title: {
          text: '哈哈X',
        },
        label: {
          rotate: 270,
          formatter: (v) => {   // 对刻度标签的格式化
            // return '哈哈'.concat(v)
            return ''.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => {
              return ''.concat(s, ',');
            });
          }
        }
      }
    }
    color={['#1979C9', '#D62A0D', '#FAA219']}
  />
}
export default DemoLine;
