
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
      .catch(err => {
        console.log('fetch data failed', err);
      })
  }
  useEffect(() => {
    asyncFetch();
  },[]);

  return <Line
    data={data.slice(data.length-90, data.length).filter((item: any) => {
      return item.category === 'Gas fuel' || item.category === 'Cement production'
    })}
    xField='year'
    yField='value'
    seriesField='category'
    padding='auto'
    xAxis={
      {
        title: {
          text: '年份',
          style: {
            fontSize: 16
          }
        },
        label: {
          rotate: Math.PI / 6,
          offset: 10,
          style: {
            fill: "#aaa",
            fontSize: 12,
          },
          formatter: (name) => {
            return name;
          }
        },
        line: {style: {stroke: '#aaa'}},   //  x轴线的样式
        tickLine: {style: {stroke: '#aaa', lineWidth: 2}, length: 5},
        grid: {
          line: {
            style: {
              stroke: '#ddd',
              lineDash: [4, 2]
            },
          },
          alternateColor: 'rgba(0, 0, 0, 0.05)'
        },
        // min: '1997',
        // max: '2014'
        nice: true,
      }
    }
    yAxis={
      {
        title: {
          text: '排放量(吨)',
          style: { fontSize: 16 }
        },
        line: {
          style: {stroke: '#aaa'}
        },
        tickLine: {style: {lineWidth: 2, stroke: '#aaa'}, length: 5},
        grid: {
          line: {
            style: {
              stroke: '#ddd',
              lineDash: [4, 2]
            }
          },
          alternateColor: 'rgba(0, 0, 0, 0.05)'
        },
        // min: 0,
        // max: 2000
        label: {
          autoRotate: false,
          style: {
            fill: '#aaa',
            fontSize: 12
          },
          formatter: (v) => {
            return ''.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => {
              return ''.concat(s, ',');
            })
          }
        }

      }
    }
    label={
      {
        layout: {type: 'hide-overlap'},
        style: {textAlign: 'right'},
        formatter: (v) => {
          return v.value;
        },
        // content: '哈哈'
      }
    }
    point={
      {
        size: 5,
        style: {
          lineWidth: 1,
          fillOpacity: 1
        },
        shape: (item) => {
          if (item.category === 'Cement production') {
            return 'circle';
          }
          return 'diamond';
        }

      }
    }
    annotations={[
      {
        type: 'line',
        start: ['0%', '10%'],
        end: ['100%', '10%'],
        top: true,
        style: {
          stroke:'l(0) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
          lineWidth: 2
        }
      },
      {
        type: 'region',
        start: ['0%', '0%'],
        end: ['20%', '10%'],
        top: true,
        style: {
          fill: '#1890ff',
          fillOpacity: 1,
          opacity: 1
        }
      },
      {
        type: 'line',
        start: ['min', 'median'],
        end: ['max', 'median'],
        style: {
          stroke:'Turquoise',
          lineDash: [4, 2]
        }
      },
      {
        type: 'text',
        position: ['10%', '5%'],
        content: '二氧化碳排放量来源',
        style: {
          fill: '#fff',
          fontSize: 12,
          textAlign: 'center',
          textBaseline: 'middle',
          shadowColor: '#fff',
          shadowOffsetX: 12,
          shadowOffsetY: 12,
          shadowBlur: 2
        }
      },
    ]}
    legend={
      {
        position: 'top-right',
        itemName: {
          style: {
            fill: '#000'
          },
          formatter: (name) => {
            return name;
          }
        }
      }
    }
    meta={
      {
        year: {
          range: [0,1],
          // alias: 'metaAlias'
        }
      }
    }
  />
}

export default DemoLine;
