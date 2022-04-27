
import React, {useEffect, useState} from "react";
import {Line} from "@ant-design/charts";

const COLOR_PLATE_10 = [
  '#5B8FF9',
  '#5AD8A6',
  '#5D7092',
  '#F6BD16',
  '#E8684A',
  '#6DC8EC',
  '#9270CA',
  '#FF9D4D',
  '#269A99',
  '#FF99C3',
];

const DemoLine: React.FC = () => {

  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setData(json);
      })
  }
  useEffect(() => {
    asyncFetch();
  },[])

  return <Line
    data={data}
    xField='year'
    yField='value'
    seriesField='category'
    point={
      {
        // size: 5,
        // style: {
        //   lineWidth: 2,
        //   fillOpacity: 1
        // },
        style: (item) => {                //  每4年设置r
          return { r: item.year % 4 ? 0 : 3}
        },
        shape: (item) => {
          if (item.category === 'Gas fule') {
            return 'diamond';
          }
          return 'circle';
        }
      }
    }
    color={COLOR_PLATE_10}
    yAxis={
      {
        label: {
          formatter: function formatter(v) {
            return ''.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
              return ''.concat(s, ',');
            });
          },
        }
      }
    }
  />
}

export default DemoLine;
